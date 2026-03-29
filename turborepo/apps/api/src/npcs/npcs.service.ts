import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { NpcDto } from './dto/npc.dto';
import { Prisma } from '../../generated/prisma';

const WEEKDAY_ORDER: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const includeRelations = {
  npc_quests: { include: { quest: true } },
  locations: { include: { city: true } },
} as const;

type NpcWithRelations = Prisma.NpcGetPayload<{
  include: typeof includeRelations;
}>;

@Injectable()
export class NpcsService {
  constructor(private prisma: PrismaService) {}

  private mapNpc(npc: NpcWithRelations): NpcDto {
    return {
      id: npc.id,
      name: npc.name,
      needs_quest_to_unlock: npc.needs_quest_to_unlock,
      icon_url: npc.icon_url,
      quests: npc.npc_quests.map((q) => ({
        id: q.quest.id,
        name: q.quest.name,
      })),
      locations: npc.locations
        .map((l) => ({
          city: l.city.name,
          weekday: l.weekday as string | null,
          coord_x: l.coord_x,
          coord_y: l.coord_y,
          coord_z: l.coord_z,
        }))
        .sort((a, b) => {
          const orderA = a.weekday ? (WEEKDAY_ORDER[a.weekday] ?? 99) : 99;
          const orderB = b.weekday ? (WEEKDAY_ORDER[b.weekday] ?? 99) : 99;
          return orderA - orderB;
        }),
    };
  }

  async findAll(): Promise<NpcDto[]> {
    const npcs = await this.prisma.npc.findMany({
      orderBy: { id: 'asc' },
      include: includeRelations,
    });
    return npcs.map((npc) => this.mapNpc(npc));
  }

  async findOne(id: number): Promise<NpcDto> {
    const npc = await this.prisma.npc.findUnique({
      where: { id },
      include: includeRelations,
    });

    if (!npc) throw new NotFoundException(`NPC #${id} not found`);
    return this.mapNpc(npc);
  }

  async findByName(name: string): Promise<NpcDto[]> {
    const npcs = await this.prisma.npc.findMany({
      where: {
        name: { contains: name, mode: 'insensitive' },
      },
      orderBy: { id: 'asc' },
      include: includeRelations,
    });
    return npcs.map((npc) => this.mapNpc(npc));
  }
}
