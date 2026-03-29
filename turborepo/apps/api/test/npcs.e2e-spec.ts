import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/database/prisma.service';
import { setupTestDatabase, teardownTestDatabase } from './setup';
import request = require('supertest');

describe('NPCs (e2e)', () => {
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

  it('GET /npcs → returns all npcs', async () => {
    const res = await request(app.getHttpServer()).get('/npcs').expect(200);
    expect(res.body).toHaveLength(2);
  });

  it('GET /npcs/:id → returns correct npc', async () => {
    const all = await request(app.getHttpServer()).get('/npcs').expect(200);
    const id = all.body[0].id;
    const res = await request(app.getHttpServer())
      .get(`/npcs/${id}`)
      .expect(200);
    expect(res.body.name).toBe('Rashid');
  });

  it('GET /npcs/:id → returns 404 for unknown id', async () => {
    await request(app.getHttpServer()).get('/npcs/99999').expect(404);
  });

  it('GET /npcs/name/:name → returns matching npcs', async () => {
    const res = await request(app.getHttpServer())
      .get('/npcs/name/Alesar')
      .expect(200);
    expect(res.body[0].name).toBe('Alesar');
  });
});
