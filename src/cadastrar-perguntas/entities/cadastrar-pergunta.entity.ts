import { Prisma } from "@prisma/client";

export class CadastrarPergunta implements Prisma.PerguntaUncheckedCreateInput{
    id?: number;
    pergunta: string;
    rank?: string;
    resposta_certa: string;
    qtn_respotas_certas: number;
    qtn_respotas_erradas: number;
    opcoes?: Prisma.OpcoesUncheckedCreateNestedOneWithoutPerguntaInput;
   
}
