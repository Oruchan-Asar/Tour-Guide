import { Injectable } from '@nestjs/common';
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
    return this.guides.find((guide) => {
      return guide.id === id;
    });
  }

  update(id: string, payload: UpdateGuideDto): GuideResponseDto {
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

  remove(id: string): GuideResponseDto[] {
    this.guides = this.guides.filter((guide) => guide.id !== id);
    return guides;
  }
}
