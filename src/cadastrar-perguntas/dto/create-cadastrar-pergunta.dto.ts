import { Prisma } from "@prisma/client";
import { IsString } from "class-validator";
import { CadastrarPergunta } from "../entities/cadastrar-pergunta.entity";

export class CreateCadastrarPerguntaDto extends CadastrarPergunta
{
    @IsString()
    pergunta: string;

    @IsString()
    letra_a: string;
    letra_b: string;
    letra_c: string;
    letra_d: string;
    letra_e: string;
    resposta_certa: string;
}