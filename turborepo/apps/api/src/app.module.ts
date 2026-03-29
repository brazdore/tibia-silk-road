import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [PrismaModule, ItemsModule],
})
export class AppModule {}
