import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateGuideDto } from './create-guide.dto';

export class GuideResponseDto extends CreateGuideDto {
  @ApiProperty()
  @IsString()
  id: string;
}
