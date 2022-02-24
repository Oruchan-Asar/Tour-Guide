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
  async findOneById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.guideService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateGuideDto,
  ): Promise<GuideResponseDto> {
    return this.guideService.update(body, id);
  }

  @Delete(':id')
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.guideService.delete(id);
  }
}
