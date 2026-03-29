import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ItemsModule } from './items/items.module';
import { NpcsModule } from './npcs/npcs.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [PrismaModule, ItemsModule, NpcsModule, OffersModule],
})
export class AppModule {}
