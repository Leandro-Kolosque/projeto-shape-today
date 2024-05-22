import { ProjetoDocumentoUser } from "./projeto_documento_user.entity";
export declare class Projeto {
    id_projeto: number;
    titulo: string;
    ano_inicial: number;
    ano_final: number;
    projetoDocumentoUsers: ProjetoDocumentoUser[];
}
