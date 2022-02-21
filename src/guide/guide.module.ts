import { Module } from '@nestjs/common';
import { GuideController } from './guide.controller';
import { GuideService } from './guide.service';

@Module({
  providers: [GuideService],
  controllers: [GuideController],
})
export class GuideModule {}
