import { Module } from '@nestjs/common';
import { NpcsController } from './npcs.controller';
import { NpcsService } from './npcs.service';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NpcsController],
  providers: [NpcsService],
})
export class NpcsModule {}
