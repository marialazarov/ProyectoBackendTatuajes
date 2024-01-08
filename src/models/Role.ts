import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @CreatedDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable()
  users?: User[];
}

function CreatedDateColumn(): (target: Role, propertyKey: "createdAt") => void {
  throw new Error("Function not implemented.");
}
