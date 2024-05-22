import { Documento } from './documento.entity';
import { Descritor } from './descritor.entity';
export declare class PalavraChave {
    id_palavrachave: number;
    palavra: string;
    descritor: Descritor;
    documento: Documento;
}
