import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceberRespostasModule } from './receber-respostas/receber-respostas.module';
import { CadastrarPerguntasModule } from './cadastrar-perguntas/cadastrar-perguntas.module';

@Module({
  imports: [ReceberRespostasModule, CadastrarPerguntasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
