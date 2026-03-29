import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [PrismaModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppController {}
