import { ApiProperty } from '@nestjs/swagger';
import { CreateTravelerDto } from './create-traveler.dto';

export class UpdateTravelerDto extends CreateTravelerDto {
  @ApiProperty()
  id: string;
}
