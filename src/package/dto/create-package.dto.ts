import { ApiProperty } from '@nestjs/swagger';
import { Duration, Tour, Transport } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, ValidateNested } from 'class-validator';

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
  @IsPositive()
  price: number;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsEnum(Transport)
  transport: Transport;

  // @ApiProperty()
  // @IsEnum(Tour)
  // tour: Tour;

  @ApiProperty()
  @IsEnum(Duration)
  duration: Duration;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Image)
  images: Image[];
}

class Image {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;
}
