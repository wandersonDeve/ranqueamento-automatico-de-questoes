import { Test, TestingModule } from '@nestjs/testing';
import { ReceberRespostasService } from './receber-respostas.service';

describe('ReceberRespostasService', () => {
  let service: ReceberRespostasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceberRespostasService],
    }).compile();

    service = module.get<ReceberRespostasService>(ReceberRespostasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
