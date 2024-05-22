import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'; 
import { Filiacao } from './filiacao.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ length: 40 })
  nome: string;

  @Column({ unique: true, length: 40 })
  email: string;

  @Column({ length: 60})
  senha: string;

  @Column({ length: 14 })
  cpf: string;

  @OneToMany(() => Filiacao, (filiacao) => filiacao.user) 
  filiacoes: Filiacao[]; 
}
