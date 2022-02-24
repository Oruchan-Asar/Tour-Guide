import { Module } from '@nestjs/common';
import { TravelerService } from './traveler.service';
import { TravelerController } from './traveler.controller';

@Module({
  controllers: [TravelerController],
  providers: [TravelerService],
})
export class TravelerModule {}
