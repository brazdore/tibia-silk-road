import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { PrismaModule } from './database/prisma.module';
import { ItemsModule } from './items/items.module';
import { NpcsModule } from './npcs/npcs.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [
    PrismaModule,
    ItemsModule,
    NpcsModule,
    OffersModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // ms
        limit: 100, // max. per IP
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
