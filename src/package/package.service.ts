import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { packages } from 'src/db';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { PackageResponseDto } from './dto/response-package.dto';

@Injectable()
export class PackageService {
  private packages = packages;

  create(guideId: string, payload: CreatePackageDto): CreatePackageDto {
    const newPackage = {
      id: uuid(),
      ...payload,
      guideId: guideId,
    };

    this.packages.push(newPackage);

    return newPackage;
  }

  findAllByGuideId(guideId: string): PackageResponseDto[] {
    return this.packages.filter((p) => p.guideId === guideId);
  }

  findOneByPackageId(packageId: string): PackageResponseDto {
    const onePackage = this.packages.find((p) => p.id === packageId);

    if (!onePackage) throw NotFoundException;

    return onePackage;
  }

  async update(packageId: string, payload: UpdatePackageDto) {
    const onePackage = await this.findOneByPackageId(packageId);

    const newPackage = {
      id: packageId,
      ...payload,
      guideId: onePackage.guideId,
    };

    const indexOfPackage = this.packages.findIndex((p) => p === onePackage);

    packages[indexOfPackage] = newPackage;

    return packages[indexOfPackage];
  }

  removeByPackageId(PackageId: string) {
    const indexOfPackage = this.packages.findIndex((p) => p.id === PackageId);
    packages.splice(indexOfPackage, 1);
  }
}
