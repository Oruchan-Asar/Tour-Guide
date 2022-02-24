import { Test, TestingModule } from '@nestjs/testing';
import { TravelerService } from './traveler.service';

describe('TravelerService', () => {
  let service: TravelerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelerService],
    }).compile();

    service = module.get<TravelerService>(TravelerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
