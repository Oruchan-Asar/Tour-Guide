import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { guides } from '../../db';

@Injectable()
export class ValidGuideMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware Called');
    const guideId = req.params.guideId;
    const guideExists = guides.some((guide) => {
      return guide.id === guideId;
    });
    if (!guideExists) {
      throw new HttpException('Guide not found', 400);
    }
    next();
  }
}
