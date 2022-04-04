import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateGuideDto } from './dto/create-guide.dto';
import { GuideResponseDto } from './dto/response-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class GuideService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateGuideDto): Promise<GuideResponseDto> {
    const newGuide = await this.prismaService.user.create({
      data: {
        id: uuid(),
        ...payload,
        createdAt: new Date(),
        role: Role.Guide,
      },
    });

    return newGuide;
  }

  async findAll(role): Promise<GuideResponseDto[]> {
    const allGuides = await this.prismaService.user.findMany({
      where: {
        role,
      },
    });

    return allGuides.map((guide) => new GuideResponseDto(guide));
  }

  async findOne(id: string): Promise<GuideResponseDto> {
    const guide = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    return guide;
  }

  async update(id: string, payload: UpdateGuideDto): Promise<GuideResponseDto> {
    const updatedGuide = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        id: id,
        ...payload,
      },
    });

    return updatedGuide;
  }

  async remove(id: string) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
