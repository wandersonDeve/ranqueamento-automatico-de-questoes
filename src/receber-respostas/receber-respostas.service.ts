import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateReceberRespostaDto } from './dto/create-receber-resposta.dto';

@Injectable()
export class ReceberRespostasService {
  constructor(private db: PrismaService) {}

  async create(data: CreateReceberRespostaDto) {
    //DESCONSTRUI DATA EM DUAS CONSTANTES
    const { id, resposta } = data;

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
    return this.update(resultado, id);
  }

  async update(resposta: string, id: number)
  {
    
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

    //CALCULANDO A MEDIA ENTRE AS RESPOSTA CERTAS E ERRADAS
    const media = pergunta.qtn_respotas_certas / pergunta.qtn_respotas_erradas;

    console.log(media);

    //FACIL > 1
    //MEDIO = 1
    //DIFICIL < 1

    if (media > 1) {
      var resultado = 'Facil';
    } else if (media < 1) {
      var resultado = 'Dificil';
    } else {
      var resultado = 'Media';
    }

    //SALVANDO NO BANCO O RANK ATUAL DA PERGUNTA
    this.db.pergunta.update({
      where: { id },
      data: {
        rank: resultado,
      },
    });

    //RETORNA AO USUARIO QUE A RESPOSTA FOI COMPUTADA
    return 'Escolha computada';
  }
}
