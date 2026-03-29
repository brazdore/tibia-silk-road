import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ItemsModule } from './items/items.module';
import { NpcsModule } from './npcs/npcs.module';

@Module({
  imports: [PrismaModule, ItemsModule, NpcsModule],
})
export class AppModule {}
