import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../../generated/prisma';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string): Promise<Item[]> {
    return this.itemsService.findByName(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(parseInt(id));
  }
}
