import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/database/prisma.service';
import { setupTestDatabase, teardownTestDatabase } from './setup';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const request = require('supertest') as typeof import('supertest');

describe('Items (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

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

    prisma = moduleFixture.get<PrismaService>(PrismaService);

    await prisma.item.createMany({
      data: [
        { name: 'Broadsword', weight: 52.5, type: 'Weapon', task_deliverable: true },
        { name: 'Plate Armor', weight: 120.0, type: 'Armor', task_deliverable: false },
      ],
    });
  }, 60000);

  afterAll(async () => {
    await prisma.item.deleteMany();
    await prisma.$disconnect();
    await app.close();
    await new Promise(resolve => setTimeout(resolve, 300));
    await teardownTestDatabase();
  });

  it('GET /items → returns all items ordered by id', async () => {
    const res = await request(app.getHttpServer()).get('/items').expect(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].name).toBe('Broadsword');
  });

  it('GET /items/:id → returns correct item', async () => {
    const res = await request(app.getHttpServer()).get('/items/1').expect(200);
    expect(res.body.name).toBe('Broadsword');
  });

  it('GET /items/:id → returns 404 for unknown id', async () => {
    await request(app.getHttpServer()).get('/items/9999').expect(404);
  });

  it('GET /items/name/:name → returns matching items', async () => {
    const res = await request(app.getHttpServer()).get('/items/name/sword').expect(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toBe('Broadsword');
  });
});