import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { guides, packages } from 'src/db';
import { CreateGuideDto } from './dto/create-guide.dto';
import { GuideResponseDto } from './dto/response-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';

@Injectable()
export class GuideService {
  private guides = guides;
  private packages = packages;

  create(payload: CreateGuideDto): GuideResponseDto {
    const newGuide = {
      id: uuid(),
      ...payload,
    };

    this.guides.push(newGuide);

    return newGuide;
  }

  findAll(): GuideResponseDto[] {
    return this.guides;
  }

  async findOne(id: string): Promise<GuideResponseDto> {
    const guide = await this.guides.find((guide) => {
      return guide.id === id;
    });
    if (!guide) throw NotFoundException;
    return guide;
  }

  async update(id: string, payload: UpdateGuideDto): Promise<GuideResponseDto> {
    const guideToUpdate = await this.findOne(id);

    const indexOfGuide = await guides.findIndex((guide) => guide.id === guideToUpdate.id);
    return (guides[indexOfGuide] = {
      id: id,
      ...payload,
    });
  }

  async remove(id: string) {
    const indexOfGuide = await this.guides.findIndex((guide) => guide.id === id);

    if (indexOfGuide === -1) throw NotFoundException;

    this.guides.splice(indexOfGuide, 1);

    // DELETE PACKAGES OF GUIDE WHILE DELETING THE GUIDE
    const length = await this.packages.filter((p) => p.guideId === id).length;

    for (let i = 0; i < length; i++) {
      const indexOfPackage = await this.packages.findIndex((p) => p.guideId === id);
      packages.splice(indexOfPackage, 1);
    }

    return;
  }
}
