import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateGuideDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  location: string;

  @ApiProperty({ type: [String] })
  languages: string[];

  // @ApiProperty({ enum: ['Transportation', 'Photograph', 'Accomodation'] })
  // services: Services[];

  @ApiProperty()
  @IsBoolean()
  isReserved: boolean;
}

export enum Services {
  Transportation = 'Transportation',
  Photograph = 'Photograph',
  Accomodation = 'Accomodation',
}
