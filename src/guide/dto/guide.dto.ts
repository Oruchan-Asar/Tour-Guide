import { ParseUUIDPipe } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class FindGuideResponseDto {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export class CreateGuideDto {
  name: string;
  surname: string;
  email: string;
}

export class GuideResponseDto {
  id: ParseUUIDPipe;
  name: string;
}

export class UpdateGuideDto {
  name: string;
}
