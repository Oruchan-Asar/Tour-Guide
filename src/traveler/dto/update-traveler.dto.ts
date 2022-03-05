import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTravelerDto } from './create-traveler.dto';

export class UpdateTravelerDto extends CreateTravelerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
