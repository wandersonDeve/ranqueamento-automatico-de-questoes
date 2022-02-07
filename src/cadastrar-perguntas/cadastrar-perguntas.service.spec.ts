import { Test, TestingModule } from '@nestjs/testing';
import { CadastrarPerguntasService } from './cadastrar-perguntas.service';

describe('CadastrarPerguntasService', () => {
  let service: CadastrarPerguntasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastrarPerguntasService],
    }).compile();

    service = module.get<CadastrarPerguntasService>(CadastrarPerguntasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
