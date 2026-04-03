import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/database/prisma.service';
import { setupTestDatabase, teardownTestDatabase } from './setup';

type RequestTarget = Parameters<typeof request>[0];

interface ItemResponse {
  id: number;
  name: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function parseItem(value: unknown): ItemResponse {
  if (!isRecord(value)) {
    throw new Error('Expected item object');
  }

  if (typeof value.id !== 'number' || typeof value.name !== 'string') {
    throw new Error('Invalid item payload');
  }

  return {
    id: value.id,
    name: value.name,
  };
}

function parseItemArray(value: unknown): ItemResponse[] {
  if (!Array.isArray(value)) {
    throw new Error('Expected item array');
  }

  return value.map(parseItem);
}

describe('Items (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let server: RequestTarget;

  beforeAll(async () => {
    const databaseUrl = await setupTestDatabase();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(new PrismaService(databaseUrl))
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    server = app.getHttpServer() as RequestTarget;
    prisma = moduleFixture.get<PrismaService>(PrismaService);

    await prisma.item.createMany({
      data: [
        {
          name: 'Broadsword',
          weight: 52.5,
          type: 'Weapon',
          task_deliverable: true,
        },
        {
          name: 'Plate Armor',
          weight: 120.0,
          type: 'Armor',
          task_deliverable: false,
        },
      ],
    });
  }, 60000);

  afterAll(async () => {
    await prisma.item.deleteMany();
    await prisma.$disconnect();
    await app.close();
    await new Promise((resolve) => setTimeout(resolve, 300));
    await teardownTestDatabase();
  });

  it('GET /items returns all items ordered by id', async () => {
    const res = await request(server).get('/items').expect(200);
    const body = parseItemArray(res.body);

    expect(body).toHaveLength(2);
    expect(body.at(0)?.name).toBe('Broadsword');
  });

  it('GET /items/:id returns correct item', async () => {
    const res = await request(server).get('/items/1').expect(200);
    const body = parseItem(res.body);

    expect(body.name).toBe('Broadsword');
  });

  it('GET /items/:id returns 404 for unknown id', async () => {
    await request(server).get('/items/9999').expect(404);
  });

  it('GET /items/name/:name returns matching items', async () => {
    const res = await request(server).get('/items/name/sword').expect(200);
    const body = parseItemArray(res.body);

    expect(body).toHaveLength(1);
    expect(body.at(0)?.name).toBe('Broadsword');
  });
});
