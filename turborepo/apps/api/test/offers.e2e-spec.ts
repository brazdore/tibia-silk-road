import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/database/prisma.service';
import { setupTestDatabase, teardownTestDatabase } from './setup';

type RequestTarget = Parameters<typeof request>[0];

interface OfferResponse {
  id: number;
  item_id: number;
  npc_id: number;
  price: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function parseOffer(value: unknown): OfferResponse {
  if (!isRecord(value)) {
    throw new Error('Expected offer object');
  }

  if (
    typeof value.id !== 'number' ||
    typeof value.item_id !== 'number' ||
    typeof value.npc_id !== 'number' ||
    typeof value.price !== 'number'
  ) {
    throw new Error('Invalid offer payload');
  }

  return {
    id: value.id,
    item_id: value.item_id,
    npc_id: value.npc_id,
    price: value.price,
  };
}

function parseOfferArray(value: unknown): OfferResponse[] {
  if (!Array.isArray(value)) {
    throw new Error('Expected offer array');
  }

  return value.map(parseOffer);
}

describe('Offers (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let server: RequestTarget;
  let itemId: number;
  let npcId: number;

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

    const item = await prisma.item.create({
      data: {
        name: 'Broadsword',
        weight: 52.5,
        type: 'Weapon',
        task_deliverable: true,
      },
    });
    const npc1 = await prisma.npc.create({
      data: { name: 'Rashid', needs_quest_to_unlock: true },
    });
    const npc2 = await prisma.npc.create({
      data: { name: 'Alesar', needs_quest_to_unlock: false },
    });

    itemId = item.id;
    npcId = npc1.id;

    await prisma.offer.createMany({
      data: [
        { item_id: itemId, npc_id: npc1.id, price: 100 },
        { item_id: itemId, npc_id: npc2.id, price: 200 },
      ],
    });
  }, 60000);

  afterAll(async () => {
    await prisma.offer.deleteMany();
    await prisma.item.deleteMany();
    await prisma.npc.deleteMany();
    await prisma.$disconnect();
    await app.close();
    await teardownTestDatabase();
  });

  it('GET /offers returns all offers', async () => {
    const res = await request(server).get('/offers').expect(200);
    const body = parseOfferArray(res.body);

    expect(body).toHaveLength(2);
  });

  it('GET /offers?item_id= returns offers for item', async () => {
    const res = await request(server)
      .get(`/offers?item_id=${itemId}`)
      .expect(200);
    const body = parseOfferArray(res.body);

    expect(body).toHaveLength(2);
  });

  it('GET /offers?npc_id= returns offers for npc', async () => {
    const res = await request(server)
      .get(`/offers?npc_id=${npcId}`)
      .expect(200);
    const body = parseOfferArray(res.body);

    expect(body).toHaveLength(1);
  });

  it('GET /offers?item_id=&npc_id= returns specific offer', async () => {
    const res = await request(server)
      .get(`/offers?item_id=${itemId}&npc_id=${npcId}`)
      .expect(200);
    const body = parseOfferArray(res.body);

    expect(body).toHaveLength(1);
    expect(body.at(0)?.price).toBe(100);
  });
});
