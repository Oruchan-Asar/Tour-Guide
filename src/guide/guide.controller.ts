import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Put } from '@nestjs/common';
import { GuideService } from './guide.service';
import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
import { ApiTags } from '@nestjs/swagger';
import { GuideResponseDto } from './dto/response-guide.dto';
import { Role } from '@prisma/client';

@ApiTags('Guide')
@Controller('guides')
export class GuideController {
  constructor(private readonly guideService: GuideService) {}

  @Post()
  create(@Body() body: CreateGuideDto): Promise<GuideResponseDto> {
    return this.guideService.create(body);
  }

  @Get(':role')
  findAll(@Param('role') role: Role) {
    return this.guideService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.guideService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateGuideDto: UpdateGuideDto) {
    return this.guideService.update(id, updateGuideDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.guideService.remove(id);
  }
}
