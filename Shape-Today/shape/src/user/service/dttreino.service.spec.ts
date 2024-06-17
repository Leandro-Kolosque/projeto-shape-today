import { Test, TestingModule } from '@nestjs/testing';
import { DttreinoService } from './dttreino.service';

describe('DttreinoService', () => {
  let service: DttreinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DttreinoService],
    }).compile();

    service = module.get<DttreinoService>(DttreinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
