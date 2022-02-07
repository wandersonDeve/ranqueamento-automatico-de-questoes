import { Prisma } from "@prisma/client";
import { IsString } from "class-validator";
import { CadastrarPergunta } from "../entities/cadastrar-pergunta.entity";

export class CreateCadastrarPerguntaDto extends CadastrarPergunta
{
    @IsString()
    pergunta: string;

    @IsString()
    resposta_certa: string;

    opcoes?: Prisma.OpcoesUncheckedCreateNestedOneWithoutPerguntaInput;
}
