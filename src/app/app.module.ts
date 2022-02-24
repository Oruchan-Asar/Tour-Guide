import { Module } from '@nestjs/common';
import { TravelerModule } from 'src/traveler/traveler.module';
import { GuideModule } from '../guide/guide.module';

@Module({
  imports: [GuideModule, TravelerModule],
})
export class AppModule {}
