import { Test, TestingModule } from '@nestjs/testing';
import { CadastrarPerguntasController } from './cadastrar-perguntas.controller';
import { CadastrarPerguntasService } from './cadastrar-perguntas.service';

describe('CadastrarPerguntasController', () => {
  let controller: CadastrarPerguntasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastrarPerguntasController],
      providers: [CadastrarPerguntasService],
    }).compile();

    controller = module.get<CadastrarPerguntasController>(CadastrarPerguntasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
