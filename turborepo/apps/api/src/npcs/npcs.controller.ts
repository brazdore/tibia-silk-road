import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { NpcsService } from './npcs.service';
import { NpcDto } from './dto/npc.dto';

@ApiTags('npcs')
@Controller('npcs')
export class NpcsController {
  constructor(private readonly npcsService: NpcsService) {}

  @Get()
  @ApiOperation({ summary: 'Returns all NPCs' })
  @ApiResponse({ status: 200, type: [NpcDto] })
  async findAll(): Promise<NpcDto[]> {
    return this.npcsService.findAll();
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Search NPCs by name' })
  @ApiParam({ name: 'name', description: 'Full or partial NPC name' })
  @ApiResponse({ status: 200, type: [NpcDto] })
  async findByName(@Param('name') name: string): Promise<NpcDto[]> {
    return this.npcsService.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns NPC by ID' })
  @ApiParam({ name: 'id', description: 'NPC ID' })
  @ApiResponse({ status: 200, type: NpcDto })
  @ApiResponse({ status: 404, description: 'NPC not found' })
  async findOne(@Param('id') id: string): Promise<NpcDto> {
    return this.npcsService.findOne(+id);
  }
}
