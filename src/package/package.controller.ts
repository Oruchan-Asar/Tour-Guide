import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Put, Query } from '@nestjs/common';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { ApiTags } from '@nestjs/swagger';
import { PackageResponseDto } from './dto/response-package.dto';
import { Duration, Tour, Transport } from '@prisma/client';

@ApiTags('Package')
@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Post(':guideId')
  create(
    @Param('guideId', new ParseUUIDPipe()) guideId: string,
    @Body() createPackageDto: CreatePackageDto,
  ): Promise<PackageResponseDto> {
    return this.packageService.create(guideId, createPackageDto);
  }

  @Get()
  findAllFilteredPackages(
    @Query('location') location?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('transport') transport?: Transport,
    // Query('tour') tour?: Tour,
    @Query('duration') duration?: Duration,
  ): Promise<PackageResponseDto[]> {
    const price =
      minPrice || maxPrice
        ? {
            ...(minPrice && { gte: parseFloat(minPrice) }),
            ...(maxPrice && { gte: parseFloat(maxPrice) }),
          }
        : undefined;

    const filters = {
      ...(location && { location }),
      ...(price && { price }),
      ...(transport && { transport }),
      // ...(tour && { tour }),
      ...(duration && { duration }),
    };

    return this.packageService.findAllFilteredPackages(filters);
  }

  @Get(':guideId')
  findAllByGuideId(@Param('guideId') guideId: string): Promise<PackageResponseDto[]> {
    return this.packageService.findAllByGuideId(guideId);
  }

  @Put(':packageId')
  update(@Param('packageId', new ParseUUIDPipe()) packageId: string, @Body() payload: UpdatePackageDto) {
    return this.packageService.update(packageId, payload);
  }

  @Delete(':packageId')
  removeByPackageId(@Param('packageId', new ParseUUIDPipe()) id: string) {
    return this.packageService.removeByPackageId(id);
  }
}
