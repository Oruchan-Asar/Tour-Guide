import { ApiProperty } from '@nestjs/swagger';

export class FindGuideResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  location: string;

  @ApiProperty({ type: [String] })
  languages: string[];

  @ApiProperty({ enum: ['Transportation', 'Photograph', 'Accomodation'] })
  services: Services;
}

export class CreateGuideDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  location: string;

  @ApiProperty({ type: [String] })
  languages: string[];

  @ApiProperty({ enum: ['Transportation', 'Photograph', 'Accomodation'] })
  services: Services;
}

export class GuideResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  location: string;

  @ApiProperty({ type: [String] })
  languages: string[];

  @ApiProperty({ enum: ['Transportation', 'Photograph', 'Accomodation'] })
  services: Services;
}

export class UpdateGuideDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  location: string;

  @ApiProperty({ type: [String] })
  languages: string[];

  @ApiProperty({ enum: ['Transportation', 'Photograph', 'Accomodation'] })
  services: Services;
}

export enum Services {
  Transportation = 'Transportation',
  Photograph = 'Photograph',
  Accomodation = 'Accomodation',
}
