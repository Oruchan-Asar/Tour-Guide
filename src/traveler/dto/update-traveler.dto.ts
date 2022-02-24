import { PartialType } from '@nestjs/swagger';
import { CreateTravelerDto } from './create-traveler.dto';

export class UpdateTravelerDto extends PartialType(CreateTravelerDto) {}
