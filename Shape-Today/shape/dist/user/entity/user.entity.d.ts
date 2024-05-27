import { Filiacao } from './filiacao.entity';
import { Treino } from './treino.entity';
export declare class User {
    id_user: number;
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    filiacoes: Filiacao[];
    treinos: Treino[];
}
