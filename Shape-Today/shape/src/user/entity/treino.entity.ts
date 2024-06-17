import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Dttreino } from './dttreino.entity';

@Entity('treino')
export class Treino {
    @PrimaryGeneratedColumn()
    id_perfil: number;

    @Column({ length: 10 })
    codigo: string;

    @Column({ length: 10 })
    carga: string;

    @Column({ length: 10 })
    serie: string;

    @Column({ length: 10 })
    repeticao: string;

    @ManyToOne(() => User, user => user.treinos)
    user: User; 

    @OneToOne(() => Dttreino, treino => treino.user)
    dttreinos: Dttreino[];  
}
