import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { ItemDto } from './dto/item.dto';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOperation({ summary: 'Returns all items' })
  @ApiResponse({ status: 200, type: [ItemDto] })
  async findAll(): Promise<ItemDto[]> {
    return this.itemsService.findAll();
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Search items by name' })
  @ApiParam({ name: 'name', description: 'Full or partial item name' })
  @ApiResponse({ status: 200, type: [ItemDto] })
  async findByName(@Param('name') name: string): Promise<ItemDto[]> {
    return this.itemsService.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns item by ID' })
  @ApiParam({ name: 'id', description: 'Item ID' })
  @ApiResponse({ status: 200, type: ItemDto })
  @ApiResponse({ status: 404, description: 'Item not found' })
  async findOne(@Param('id') id: string): Promise<ItemDto> {
    return this.itemsService.findOne(+id);
  }
}
