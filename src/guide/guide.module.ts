import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidGuideMiddleware } from 'src/common/middlewares/validGuide.middleware';
import { GuideController } from './guide.controller';
import { GuideService } from './guide.service';

@Module({
  providers: [GuideService],
  controllers: [GuideController],
})
export class GuideModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidGuideMiddleware).forRoutes({
      path: 'guides/:guideId',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidGuideMiddleware).forRoutes({
      path: 'guides/:guideId',
      method: RequestMethod.PUT,
    });
  }
}
