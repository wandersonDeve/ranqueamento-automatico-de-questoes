import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCadastrarPerguntaDto } from './dto/create-cadastrar-pergunta.dto';
import { UpdateCadastrarPerguntaDto } from './dto/update-cadastrar-pergunta.dto';

@Injectable()
export class CadastrarPerguntasService
{
  constructor(private db: PrismaService) { }
  
  async create(createCadastrarPerguntaDto: CreateCadastrarPerguntaDto) {
    return 'This action adds a new cadastrarPergunta';
  }

  async findAll() {
    return `This action returns all cadastrarPerguntas`;
  }

  async findOne(id: number) {
    const pergunta = await this.db.pergunta.findMany({
      where: {
        rank:
      }
    })
  }

  async update(id: number, updateCadastrarPerguntaDto: UpdateCadastrarPerguntaDto) {
    return `This action updates a #${id} cadastrarPergunta`;
  }

  async remove(id: number) {
    return `This action removes a #${id} cadastrarPergunta`;
  }
}
