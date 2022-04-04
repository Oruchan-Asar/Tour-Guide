import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsDate, IsString } from 'class-validator';
import { CreateGuideDto } from './create-guide.dto';

export class GuideResponseDto extends CreateGuideDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  role: Role;

  constructor(partial: Partial<GuideResponseDto>) {
    super();
    Object.assign(this, partial);
  }
}
