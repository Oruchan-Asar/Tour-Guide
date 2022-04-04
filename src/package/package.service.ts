import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UpdatePackageDto } from './dto/update-package.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PackageResponseDto } from './dto/response-package.dto';
import { Filter } from './interface/filter.interface';
import { CreatePackageParams } from './interface/create-package.interface';
import { UpdatePackageParams } from './interface/update-package.interface';

@Injectable()
export class PackageService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(guideId: string, { images, ...payload }: CreatePackageParams): Promise<PackageResponseDto> {
    const userExist = await this.prismaService.user.findUnique({
      where: {
        id: guideId,
      },
    });

    if (!userExist) throw NotFoundException;

    const pkg = await this.prismaService.package.create({
      data: {
        id: uuid(),
        ...payload,
        guideId,
      },
    });

    const Packageimages = images.map((image) => {
      return { ...image, packageId: pkg.id };
    });

    await this.prismaService.image.createMany({
      data: Packageimages,
    });

    return new PackageResponseDto(pkg);
  }

  async findAllFilteredPackages(filters: Filter): Promise<PackageResponseDto[]> {
    const allPackages = await this.prismaService.package.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        location: true,
        transport: true,
        duration: true,
        images: {
          select: {
            url: true,
          },
        },
      },
      where: filters,
    });

    return allPackages.map((pkg) => new PackageResponseDto(pkg));
  }

  async findAllByGuideId(guideId): Promise<PackageResponseDto[]> {
    const allPackages = await this.prismaService.package.findMany({
      where: {
        guideId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        transport: true,
        duration: true,
        images: {
          select: {
            url: true,
          },
        },
      },
    });

    return allPackages.map((pkg) => new PackageResponseDto(pkg));
  }

  async update(id: string, payload: UpdatePackageParams): Promise<PackageResponseDto> {
    const packageExist = await this.prismaService.package.findUnique({
      where: {
        id: id,
      },
    });

    if (!packageExist) throw NotFoundException;

    const updatedPackage = await this.prismaService.package.update({
      where: {
        id,
      },
      data: {
        id: id,
        ...payload,
      },
    });

    if (!updatedPackage) throw new NotFoundException(404, 'Package not found!');

    return new PackageResponseDto(updatedPackage);
  }

  async removeByPackageId(id: string) {
    const firstPackage = await this.prismaService.package.findUnique({
      where: {
        id,
      },
    });

    if (!firstPackage) throw NotFoundException;

    await this.prismaService.image.deleteMany({
      where: {
        packageId: id,
      },
    });

    await this.prismaService.package.delete({
      where: {
        id,
      },
    });

    return;
  }
}
