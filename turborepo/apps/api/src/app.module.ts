import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { PrismaModule } from './database/prisma.module';
import { ItemsModule } from './items/items.module';
import { NpcsModule } from './npcs/npcs.module';
import { OffersModule } from './offers/offers.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    PrismaModule,
    ItemsModule,
    NpcsModule,
    OffersModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
