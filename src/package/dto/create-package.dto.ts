import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePackageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  transport: Transport;

  @ApiProperty()
  tours: Tours;

  @ApiProperty()
  duration: Duration;
}

export enum Transport {
  WALKING,
  CAR,
  BIKE,
  MOTOR,
  SCOOTER,
  BOAT,
  PUBLIC,
}

export enum Tours {
  CITY,
  DAY,
  NIGHT,
  ART_CULTURE,
  FOOD,
  NATURE,
  PHOTO,
  SHOPPING,
}

export enum Duration {
  LESS_THAN_3_HOURS,
  HALF_DAY,
  FULL_DAY,
}
