import { Module } from '@nestjs/common';
import { PackageModule } from 'src/package/package.module';
import { TravelerModule } from 'src/traveler/traveler.module';
import { UsersModule } from 'src/users/users.module';
import { GuideModule } from '../guide/guide.module';

@Module({
  imports: [GuideModule, TravelerModule, PackageModule, UsersModule],
})
export class AppModule {}
