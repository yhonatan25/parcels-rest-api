import { Test, TestingModule } from '@nestjs/testing';
import { ParcelsController } from './parcels.controller';
import { ParcelsService } from './parcels.service';

describe('ParcelsController', () => {
  let controller: ParcelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcelsController],
      providers: [ParcelsService],
    }).compile();

    controller = module.get<ParcelsController>(ParcelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
