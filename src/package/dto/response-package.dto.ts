import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreatePackageDto } from './create-package.dto';

export class PackageResponseDto extends CreatePackageDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  guideId: string;
}
