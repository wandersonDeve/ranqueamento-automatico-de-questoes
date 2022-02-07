import { Prisma } from "@prisma/client";

export class CadastrarPergunta implements Prisma.PerguntaUncheckedCreateInput{
    id?: number;
    pergunta: string;
    rank?: string;
    letra_a: string;
    letra_b: string;
    letra_c: string;
    letra_d: string;
    letra_e: string;
    resposta_certa: string;
    qtn_respotas_certas?: number;
    qtn_respotas_erradas?: number;

}
