import { ApiProperty } from '@nestjs/swagger';

const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export class QuestDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class LocationDto {
  @ApiProperty()
  city: string;

  @ApiProperty({ nullable: true, enum: WEEKDAYS })
  weekday: string | null;

  @ApiProperty()
  coord_x: number;

  @ApiProperty()
  coord_y: number;

  @ApiProperty()
  coord_z: number;
}

export class NpcDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  needs_quest_to_unlock: boolean;

  @ApiProperty({ nullable: true })
  icon_url: string | null;

  @ApiProperty({ type: [QuestDto] })
  quests: QuestDto[];

  @ApiProperty({ type: [LocationDto] })
  locations: LocationDto[];
}
