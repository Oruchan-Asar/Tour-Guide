import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Put } from '@nestjs/common';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Package')
@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Post(':guideId')
  create(@Param('guideId', new ParseUUIDPipe()) guideId: string, @Body() createPackageDto: CreatePackageDto) {
    return this.packageService.create(guideId, createPackageDto);
  }

  @Get(':guideId')
  findAllByGuideId(@Param('guideId') guideId: string) {
    return this.packageService.findAllByGuideId(guideId);
  }

  @Get(':packageId')
  findOneByPackageId(@Param('packageId', new ParseUUIDPipe()) packageId: string) {
    return this.packageService.findOneByPackageId(packageId);
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
