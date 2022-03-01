import { Injectable } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';

@Injectable()
export class PackageService {
  create(createPackageDto: CreatePackageDto) {
    return 'This action adds a new package';
  }

  findAll() {
    return `This action returns all package`;
  }

  findOne(id: string) {
    return `This action returns a #${id} package`;
  }

  update(id: string, updatePackageDto: UpdatePackageDto) {
    return `This action updates a #${id} package`;
  }

  remove(id: string) {
    return `This action removes a #${id} package`;
  }
}
