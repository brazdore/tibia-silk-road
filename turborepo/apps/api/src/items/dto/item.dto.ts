import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  weight: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  task_deliverable: boolean;

  @ApiProperty({ nullable: true })
  icon_url: string | null;
}
