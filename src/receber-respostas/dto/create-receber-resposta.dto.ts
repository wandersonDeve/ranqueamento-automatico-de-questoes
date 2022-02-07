import { IsNumber, IsString } from 'class-validator';

export class CreateReceberRespostaDto {
  @IsNumber()
  id: number;

  @IsString()
  resposta: string;

  @IsNumber()
  pontos: number;
}

// NESSA RESPOSTA PEGAMOS O ID DA PERGUNTA E A LETRA ESCOLHIDA PELA PESSOA
