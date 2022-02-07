import { IsNumber, IsString } from 'class-validator';

export class CreateReceberRespostaDto {
  @IsNumber()
  id: number;

  @IsString()
  resposta: string;
}

// NESSA RESPOSTA PEGAMOS O ID DA PERGUNTA E A LETRA ESCOLHIDA PELA PESSOA