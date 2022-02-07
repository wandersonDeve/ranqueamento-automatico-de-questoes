import { Controller, Body, Patch, } from '@nestjs/common';
import { ReceberRespostasService } from './receber-respostas.service';
import { CreateReceberRespostaDto } from './dto/create-receber-resposta.dto';

@Controller('receber-respostas')
export class ReceberRespostasController {
  constructor(private readonly receberRespostasService: ReceberRespostasService) {}

  @Patch()
  async create(@Body() createReceberRespostaDto: CreateReceberRespostaDto) {
    return this.receberRespostasService.create(createReceberRespostaDto);
  }
}

// USAREMOS DE INICIO SOMENTE O POST PARA ENVIAR ESSA RESPOSTA NO SERVIDOR E COMPARAR A RESPOSTA