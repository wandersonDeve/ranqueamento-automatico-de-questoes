import { PartialType } from '@nestjs/mapped-types';
import { CreateCadastrarPerguntaDto } from './create-cadastrar-pergunta.dto';

export class UpdateCadastrarPerguntaDto extends PartialType(CreateCadastrarPerguntaDto) {}
