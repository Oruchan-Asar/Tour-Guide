import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PackageResponseDto } from './dto/response-package.dto';
import { Filter } from './interface/filter.interface';

@Injectable()
export class PackageService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(guideId: string, payload: CreatePackageDto): Promise<PackageResponseDto> {
    console.log('You are here!');
    return this.prismaService.package.create({
      data: {
        id: uuid(),
        ...payload,
        guideId,
      },
    });
  }

  async findAllPackages(filters: Filter): Promise<PackageResponseDto[]> {
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

  async update(id: string, payload: UpdatePackageDto): Promise<PackageResponseDto> {
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

    return updatedPackage;
  }

  async removeByPackageId(id: string) {
    const firstPackage = await this.prismaService.package.findFirst({
      where: {
        id,
      },
    });

    if (!firstPackage) throw NotFoundException;

    await this.prismaService.package.delete({
      where: {
        id,
      },
    });

    return;
  }
}
