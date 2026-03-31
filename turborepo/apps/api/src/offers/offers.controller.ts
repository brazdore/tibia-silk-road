import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { OffersService } from './offers.service';
import { OfferDto } from './dto/offer.dto';

@ApiTags('offers')
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  @ApiOperation({
    summary: 'Returns all offers, optionally filtered by item or NPC',
  })
  @ApiQuery({ name: 'item_id', required: false, type: Number })
  @ApiQuery({ name: 'npc_id', required: false, type: Number })
  @ApiResponse({ status: 200, type: [OfferDto] })
  async findAll(
    @Query('item_id') itemId?: string,
    @Query('npc_id') npcId?: string,
  ): Promise<OfferDto[]> {
    return this.offersService.findAll(
      itemId ? +itemId : undefined,
      npcId ? +npcId : undefined,
    );
  }
}
