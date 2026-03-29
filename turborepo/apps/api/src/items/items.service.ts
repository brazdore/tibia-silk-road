import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { ItemDto } from './dto/item.dto';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ItemDto[]> {
    return this.prisma.item.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number): Promise<ItemDto> {
    const item = await this.prisma.item.findUnique({
      where: { id },
    });

    if (!item) throw new NotFoundException(`Item #${id} not found`);
    return item;
  }

  async findByName(name: string): Promise<ItemDto[]> {
    return this.prisma.item.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      orderBy: { id: 'asc' },
    });
  }
}
