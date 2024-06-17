import { Test, TestingModule } from '@nestjs/testing';
import { DttreinoController } from './dttreino.controller';

describe('DttreinoController', () => {
  let controller: DttreinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DttreinoController],
    }).compile();

    controller = module.get<DttreinoController>(DttreinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
