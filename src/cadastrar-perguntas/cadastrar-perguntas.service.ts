import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCadastrarPerguntaDto } from './dto/create-cadastrar-pergunta.dto';
import { UpdateCadastrarPerguntaDto } from './dto/update-cadastrar-pergunta.dto';

@Injectable()
export class CadastrarPerguntasService {
  constructor(private db: PrismaService) {}

  async create(data: CreateCadastrarPerguntaDto) {
    const pergunta = await this.db.pergunta.findUnique({
      where: {
        pergunta:data.pergunta
      }
    });

    if (pergunta) {
      throw new BadRequestException(
        'Essa pergunta ja foi cadastrado antes',
      );
    }

    const novaPergunta = this.db.pergunta.create({ data })
    
    return novaPergunta;
  }

  async findAll() {
    const perguntas = await this.db.pergunta.findMany();
  }

  async findOne(id: number)
  {
    const pergunta = await this.db.pergunta.findFirst({
      where: {
        id: id,
      },
    });

    if (!pergunta) {
      throw new NotFoundException('Pergunta não encontrada');
    }

    return pergunta
  }

  async update(id: number, data: UpdateCadastrarPerguntaDto) {
    const pergunta = await this.db.pergunta.findFirst({
      where: {
        id: id,
      },
    });

    if (!pergunta) {
      throw new NotFoundException('Pergunta não encontrada');
    }

    const perguntaAtualizada = this.db.pergunta.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
  }

  async remove(id: number) {
    const pergunta = await this.db.pergunta.findFirst({
      where: {
        id: id,
      },
    });

    if (!pergunta) {
      throw new NotFoundException('Pergunta não encontrada');
    }

    const deletePergunta = this.db.pergunta.delete({
      where: {
        id: id,
      }
    })
  }
}
