import { User } from './user.entity';
import { Dttreino } from './dttreino.entity';
export declare class Treino {
    id_perfil: number;
    codigo: string;
    carga: string;
    serie: string;
    repeticao: string;
    user: User;
    dttreinos: Dttreino[];
}
