import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTravelerDto } from './create-traveler.dto';

export class TravelerResponseDto extends CreateTravelerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  createdAt: Date;
}
