import { ApiProperty } from '@nestjs/swagger';
import { CreatePackageDto } from './create-package.dto';

export class PackageResponseDto extends CreatePackageDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  guideId: string;
}
