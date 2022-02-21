import { Injectable } from '@nestjs/common';
import { CreateGuideDto } from './dto/create-guide.dto';

@Injectable()
export class GuideService {
  create(createGuideDto: CreateGuideDto) {}

  findAll() {}
}
