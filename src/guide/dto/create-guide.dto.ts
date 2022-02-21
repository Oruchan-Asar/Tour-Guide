import { ApiProperty } from '@nestjs/swagger';

export enum RoleEnum {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export class CreateGuideDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ enum: RoleEnum, default: [], isArray: true })
  roles: RoleEnum[] = [];

  @ApiProperty({ required: false, default: false })
  isReserved?: boolean = false;
}
