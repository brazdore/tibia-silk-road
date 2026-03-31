import { ApiProperty } from '@nestjs/swagger';

export class OfferDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  item_id: number;

  @ApiProperty()
  npc_id: number;

  @ApiProperty()
  price: number;
}
