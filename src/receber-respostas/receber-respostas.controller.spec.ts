import { Test, TestingModule } from '@nestjs/testing';
import { ReceberRespostasController } from './receber-respostas.controller';
import { ReceberRespostasService } from './receber-respostas.service';

describe('ReceberRespostasController', () => {
  let controller: ReceberRespostasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceberRespostasController],
      providers: [ReceberRespostasService],
    }).compile();

    controller = module.get<ReceberRespostasController>(ReceberRespostasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
