import { Filiacao } from './filiacao.entity';
import { ProjetoDocumentoUser } from 'src/documento/entity/projeto_documento_user.entity';
export declare class User {
    id_user: number;
    nome: string;
    email: string;
    senha: string;
    filiacoes: Filiacao[];
    projetoDocumentoUsers: ProjetoDocumentoUser[];
}
