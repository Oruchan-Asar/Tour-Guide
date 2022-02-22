import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { guides } from 'src/db';
import {
  CreateGuideDto,
  FindGuideResponseDto,
  GuideResponseDto,
} from './dto/guide.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GuideService {
  private guides = guides;

  create(payload: CreateGuideDto): GuideResponseDto {
    const newGuide = {
      id: uuid(),
      ...payload,
    };

    this.guides.push(newGuide);

    return newGuide;
  }

  findAll(): FindGuideResponseDto[] {
    return this.guides;
  }

  findOne(id: ParseUUIDPipe) {}
}
