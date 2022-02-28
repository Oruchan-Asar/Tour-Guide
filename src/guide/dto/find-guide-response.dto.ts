import { ApiProperty } from '@nestjs/swagger';
import { CreateGuideDto } from './create-guide.dto';

export class FindGuideResponseDto extends CreateGuideDto {
  @ApiProperty()
  id: string;
}
