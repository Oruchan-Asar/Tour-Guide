import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsBoolean, IsString } from 'class-validator';

export class CreateGuideDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  surname: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ type: [String] })
  @IsNotEmpty()
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
