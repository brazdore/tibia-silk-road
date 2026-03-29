import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { Item } from '../../generated/prisma';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os items' })
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Busca items por nome' })
  @ApiParam({ name: 'name', description: 'Nome ou parte do nome do item' })
  async findByName(@Param('name') name: string): Promise<Item[]> {
    return this.itemsService.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca item por ID' })
  @ApiParam({ name: 'id', description: 'ID do item' })
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(+id);
  }
}
