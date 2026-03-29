import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(url?: string) {
    const connectionString = url ?? process.env.DATABASE_URL!;
    const pool = new pg.Pool({
      connectionString,
      ssl: url ? false : { rejectUnauthorized: false },
    });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma conectado ao banco com sucesso');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
