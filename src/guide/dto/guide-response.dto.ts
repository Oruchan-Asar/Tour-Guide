import { ApiProperty } from '@nestjs/swagger';
import { CreateGuideDto } from './create-guide.dto';

export class GuideResponseDto extends CreateGuideDto {
  @ApiProperty()
  id: string;
}
