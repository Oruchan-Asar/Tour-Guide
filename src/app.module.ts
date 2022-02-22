import { Module } from '@nestjs/common';
import { GuideModule } from './guide/guide.module';

@Module({
  imports: [GuideModule],
})
export class AppModule {}
