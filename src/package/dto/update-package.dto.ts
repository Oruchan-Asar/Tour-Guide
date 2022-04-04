import { OmitType, PartialType } from '@nestjs/swagger';
import { CreatePackageDto } from './create-package.dto';

export class UpdatePackageDto extends PartialType(OmitType(CreatePackageDto, ['images'])) {}
