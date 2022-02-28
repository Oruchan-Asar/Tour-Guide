import { Test, TestingModule } from '@nestjs/testing';
import { Guide111Service } from './guide.service';

describe('Guide111Service', () => {
  let service: Guide111Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Guide111Service],
    }).compile();

    service = module.get<Guide111Service>(Guide111Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
