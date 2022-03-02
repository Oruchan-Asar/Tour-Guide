import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { guides } from 'src/db';
import { CreateGuideDto } from './dto/create-guide.dto';
import { GuideResponseDto } from './dto/guide-response.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
import { FindGuideResponseDto } from './dto/find-guide-response.dto';

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
    const guide = this.guides.find((guide) => {
      return guide.id === id;
    });
    if (!guide) throw NotFoundException;
    return guide;
  }

  update(id: string, payload: UpdateGuideDto): GuideResponseDto {
    const guideToUpdate = this.findOne(id);

    const indexOfGuide = guides.findIndex((guide) => guide.id === guideToUpdate.id);
    return (guides[indexOfGuide] = {
      id: id,
      ...payload,
    });
  }

  remove(id: string) {
    const indexOfGuide = this.guides.findIndex((guide) => guide.id === id);

    if (indexOfGuide === -1) throw NotFoundException;

    this.guides.splice(indexOfGuide, 1);
    return;
  }
}
