import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn, 
  UpdateDateColumn, 
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
  user: any;


 
}

