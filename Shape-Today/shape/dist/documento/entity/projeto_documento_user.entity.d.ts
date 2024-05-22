import { Projeto } from './projeto.entity';
import { Documento } from './documento.entity';
import { User } from 'src/user/entity/user.entity';
export declare class ProjetoDocumentoUser {
    userId: number;
    projetoId: number;
    documentoId: number;
    proprietario: boolean;
    projeto: Projeto;
    documento: Documento;
    user: User;
}
