import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateGuideDto,
  GuideResponseDto,
  UpdateGuideDto,
} from './dto/guide.dto';
import { GuideService } from './guide.service';

@Controller('guides')
export class GuideController {
  constructor(private readonly guideService: GuideService) {}

  @Post()
  async create(@Body() body: CreateGuideDto): Promise<GuideResponseDto> {
    return this.guideService.create(body);
  }

  @Get()
  async findAll() {
    return this.guideService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: ParseUUIDPipe) {
    return this.guideService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: ParseUUIDPipe,
    @Body() updateGuideDto: UpdateGuideDto,
  ) {
    return `This action updates a #${id} guide`;
  }

  @Delete(':id')
  async remove(@Param('id') id: ParseUUIDPipe) {
    return `This action removes a #${id} guide`;
  }
}
