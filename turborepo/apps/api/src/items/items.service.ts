import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Item } from '../../generated/prisma';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return this.prisma.item.findMany({
      include: {
        offers: { include: { npc: true } },
      },
    });
  }

  async findOne(id: number): Promise<Item> {
    const item = await this.prisma.item.findUnique({
      where: { id },
      include: {
        offers: { include: { npc: true } },
      },
    });

    if (!item) throw new NotFoundException(`Item #${id} not found`);
    return item;
  }

  async findByName(name: string): Promise<Item[]> {
    return this.prisma.item.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      include: {
        offers: {
          include: { npc: true },
        },
      },
    });
  }
}
