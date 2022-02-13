import { Injectable, NotFoundException } from '@nestjs/common';
import { randomInt } from 'crypto';
import { PrismaService } from 'src/prisma.service';
import { CreateReceberRespostaDto } from './dto/create-receber-resposta.dto';

@Injectable()
export class ReceberRespostasService {
  constructor(private db: PrismaService) {}

  async create(data: CreateReceberRespostaDto) {
    //DESCONSTRUI DATA EM TRES CONSTANTES
    const { id, resposta, pontos } = data;

    //VERIFICANDO SE A RESPOSTA ESTA VINDO EM BRANCO
    if (resposta == undefined) {
      throw new NotFoundException('Nenhuma opção foi selecionada');
    }

    //RECEBENDO DO BANCO A PERGUNTA COM A RESPOSTA
    const resposta_certa = await this.db.pergunta.findUnique({
      where: {
        id: id,
      },
    });

    //COMPARANDO A RESPOSTA E SALVANDO O RESULTADO
    if (resposta_certa.resposta_certa == resposta) {
      var resultado = 'certa';
    } else {
      var resultado = 'errada';
    }

    //ENVIANDO O RESULTADO PARA UPDATE NO BANCO DE DADOS
    return this.update(resultado, id, pontos);
  }

  async update(resposta: string, id: number, pontos: number) {
    //FAZENDO A ATUALIZAÇÃO DO NUMERO DE ACERTOS E ERROS DA PERGUNTA NO BANCO DE DADOS
    if (resposta == 'certa') {
      var pergunta = await this.db.pergunta.update({
        where: {
          id: id,
        },
        data: {
          qtn_respotas_certas: {
            increment: 1,
          },
        },
      });
    } else {
      var pergunta = await this.db.pergunta.update({
        where: {
          id: id,
        },
        data: {
          qtn_respotas_erradas: {
            increment: 1,
          },
        },
      });
    }

    //CALCULANDO A porcentagem de respostas certas
    const media = (100/(pergunta.qtn_respotas_certas + pergunta.qtn_respotas_erradas))*pergunta.qtn_respotas_certas

    console.log(media);

    //Facil <=  100%
    //Medio <= 66%
    //Dificil <= 33%

    if (media <= 33) {
      var resultado = 'Dificil';
    } else if (media <= 66) {
      var resultado = 'Media';
    } else {
      var resultado = 'Facil';
    }

    //SALVANDO NO BANCO O RANK ATUAL DA PERGUNTA
    this.db.pergunta.update({
      where: { id },
      data: {
        rank: resultado,
      },
    });

    //NIVEL DO USUARIO DA PROXIMA PERGUNTA
    if (pontos < 3) {
      var proximaPergunta = 'Facil';
    } else if (pontos < 6) {
      var proximaPergunta = 'Media';
    } else {
      var proximaPergunta = 'Dificil';
    }

    //CRIA UM GRUPO COM AS PERGUNTAS DO NIVEL QUE O USUARIO ESTA
    const grupoPergunta = this.db.pergunta.findMany({
      where: {
        rank: proximaPergunta,
      },
    });

    //SELECIONA ALEATORIAMENTE UMA PERGUNTA DO ARRAY
    const perguntaSelecionada = grupoPergunta[Math.floor(Math.random() * (await grupoPergunta).length)]

    // FALTA A VALIDAÇÃO - PARA VERIFICAR SE A PERGUNTA ESCOLHIDA JA FOI RESPONDIDA ANTES

    //RETORNA AO USUARIO QUE A RESPOSTA FOI COMPUTADA
    return perguntaSelecionada;
  }
}
