import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('dttreino')
export class Dttreino {
    @PrimaryGeneratedColumn()
    id_perfil: number;

    @Column({ type: 'date' })
    data_inicio: Date;

    @Column({ type: 'date' })
    data_fim: Date;
    
    @OneToOne(() => User, user => user.treinos)
    user: User; 
}
