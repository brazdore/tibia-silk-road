import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/database/prisma.service';
import { setupTestDatabase, teardownTestDatabase } from './setup';

type RequestTarget = Parameters<typeof request>[0];

interface NpcResponse {
  id: number;
  name: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function parseNpc(value: unknown): NpcResponse {
  if (!isRecord(value)) {
    throw new Error('Expected npc object');
  }

  if (typeof value.id !== 'number' || typeof value.name !== 'string') {
    throw new Error('Invalid npc payload');
  }

  return {
    id: value.id,
    name: value.name,
  };
}

function parseNpcArray(value: unknown): NpcResponse[] {
  if (!Array.isArray(value)) {
    throw new Error('Expected npc array');
  }

  return value.map(parseNpc);
}

describe('NPCs (e2e)', () => {
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

    await prisma.npc.createMany({
      data: [
        { name: 'Rashid', needs_quest_to_unlock: true },
        { name: 'Alesar', needs_quest_to_unlock: false },
      ],
    });
  }, 60000);

  afterAll(async () => {
    await prisma.npc.deleteMany();
    await prisma.$disconnect();
    await app.close();
    await teardownTestDatabase();
  });

  it('GET /npcs returns all npcs', async () => {
    const res = await request(server).get('/npcs').expect(200);
    const body = parseNpcArray(res.body);

    expect(body).toHaveLength(2);
  });

  it('GET /npcs/:id returns correct npc', async () => {
    const all = await request(server).get('/npcs').expect(200);
    const npcs = parseNpcArray(all.body);
    const firstNpc = npcs.at(0);

    if (!firstNpc) {
      throw new Error('Expected at least one NPC');
    }

    const res = await request(server).get(`/npcs/${firstNpc.id}`).expect(200);
    const body = parseNpc(res.body);

    expect(body.name).toBe('Rashid');
  });

  it('GET /npcs/:id returns 404 for unknown id', async () => {
    await request(server).get('/npcs/99999').expect(404);
  });

  it('GET /npcs/name/:name returns matching npcs', async () => {
    const res = await request(server).get('/npcs/name/Alesar').expect(200);
    const body = parseNpcArray(res.body);

    expect(body.at(0)?.name).toBe('Alesar');
  });
});
