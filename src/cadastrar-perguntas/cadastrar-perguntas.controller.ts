import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadastrarPerguntasService } from './cadastrar-perguntas.service';
import { CreateCadastrarPerguntaDto } from './dto/create-cadastrar-pergunta.dto';
import { UpdateCadastrarPerguntaDto } from './dto/update-cadastrar-pergunta.dto';

@Controller('cadastrar-perguntas')
export class CadastrarPerguntasController {
  constructor(private readonly cadastrarPerguntasService: CadastrarPerguntasService) {}

  @Post()
  async create(@Body() createCadastrarPerguntaDto: CreateCadastrarPerguntaDto) {
    return this.cadastrarPerguntasService.create(createCadastrarPerguntaDto);
  }

  @Get()
  async findAll() {
    return this.cadastrarPerguntasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cadastrarPerguntasService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCadastrarPerguntaDto: UpdateCadastrarPerguntaDto) {
    return this.cadastrarPerguntasService.update(+id, updateCadastrarPerguntaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cadastrarPerguntasService.remove(+id);
  }
}
