import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { guides } from 'src/db';
import {
  CreateGuideDto,
  FindGuideResponseDto,
  GuideResponseDto,
  UpdateGuideDto,
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

  findOne(id: string): FindGuideResponseDto {
    return this.guides.find((guide) => {
      return guide.id === id;
    });
  }

  update(payload: UpdateGuideDto, id: string): GuideResponseDto {
    let updatedGuide: GuideResponseDto;

    const updatedGuideList = this.guides.map((guide) => {
      if (guide.id === id) {
        updatedGuide = {
          id,
          ...payload,
        };
        return updatedGuide;
      } else return guide;
    });

    this.guides = updatedGuideList;

    return updatedGuide;
  }

  delete(id: string) {
    const updatedGuideList = this.guides.filter((guide) => guide.id !== id);
    return updatedGuideList;
  }
}
