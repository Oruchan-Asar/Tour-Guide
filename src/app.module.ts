import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuideModule } from './guide/guide.module';

@Module({
  imports: [GuideModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
