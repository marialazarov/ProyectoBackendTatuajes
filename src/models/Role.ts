import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn, // Importa el decorador CreateDateColumn
  UpdateDateColumn, // Importa el decorador UpdateDateColumn
} from "typeorm";
import { User } from "./User";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @CreateDateColumn() // Usa el decorador CreateDateColumn para createdAt
  createdAt!: Date;

  @UpdateDateColumn() // Usa el decorador UpdateDateColumn para updatedAt
  updatedAt!: Date;

  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable()
  users?: User[];
}

