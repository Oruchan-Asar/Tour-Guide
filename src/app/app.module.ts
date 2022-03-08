import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PackageModule } from 'src/package/package.module';
import { TravelerModule } from 'src/traveler/traveler.module';
import { UsersModule } from 'src/users/users.module';
import { GuideModule } from '../guide/guide.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GuideModule, TravelerModule, PackageModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
