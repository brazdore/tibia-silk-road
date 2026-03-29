import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { OfferDto } from './dto/offer.dto';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async findAll(itemId?: number, npcId?: number): Promise<OfferDto[]> {
    return this.prisma.offer.findMany({
      where: {
        ...(itemId ? { item_id: itemId } : {}),
        ...(npcId ? { npc_id: npcId } : {}),
      },
      orderBy: { id: 'asc' },
    });
  }
}
