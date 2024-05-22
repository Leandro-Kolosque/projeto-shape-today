import { PalavraChave } from './palavra-chave.entity';
import { ProjetoDocumentoUser } from './projeto_documento_user.entity';
export declare class Documento {
    id_documento: number;
    anoPublicacao: number;
    titulo: string;
    discente: string;
    orientador: string;
    resumo: string;
    palavrasChave: PalavraChave[];
    projetoDocumentoUsers: ProjetoDocumentoUser[];
}
