import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsString } from 'class-validator';
import { CreatePackageDto } from './create-package.dto';

export class PackageResponseDto extends CreatePackageDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  @Exclude()
  guideId: string;

  constructor(partial: Partial<PackageResponseDto>) {
    super();
    Object.assign(this, partial);
  }
}
