import { ApiProperty } from '@nestjs/swagger';
import { CreateTravelerDto } from './create-traveler.dto';

export class TravelerResponseDto extends CreateTravelerDto {
  @ApiProperty()
  id: string;
}
