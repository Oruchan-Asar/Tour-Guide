import { ApiProperty } from '@nestjs/swagger';
import { Duration, Tour, Transport } from '@prisma/client';
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
  @IsString()
  location: string;

  @ApiProperty()
  transport: Transport;

  // @ApiProperty()
  // tour: Tour;

  @ApiProperty()
  duration: Duration;
}
