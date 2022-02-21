import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
import { GuideService } from './guide.service';

@Controller('guide')
export class GuideController {
  constructor(private guideService: GuideService) {}

  @Post()
  async create(@Body() createGuideDto: CreateGuideDto) {
    this.guideService.create(createGuideDto);
  }

  @Get()
  async findAll() {
    return this.guideService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    return `This action returns a #${id} guide`;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGuideDto: UpdateGuideDto,
  ) {
    return `This action updates a #${id} guide`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a #${id} guide`;
  }
}
