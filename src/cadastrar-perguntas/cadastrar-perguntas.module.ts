import { Module } from '@nestjs/common';
import { CadastrarPerguntasService } from './cadastrar-perguntas.service';
import { CadastrarPerguntasController } from './cadastrar-perguntas.controller';

@Module({
  controllers: [CadastrarPerguntasController],
  providers: [CadastrarPerguntasService]
})
export class CadastrarPerguntasModule {}
