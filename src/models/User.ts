import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn, // Importa el decorador CreateDateColumn
  UpdateDateColumn, // Importa el decorador UpdateDateColumn
  OneToMany,
} from "typeorm";
import { Role } from "./Role";
import { Artist } from "./Artist";
import { Appointment } from "./Appointments";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  surname!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @CreateDateColumn() // Usa el decorador CreateDateColumn para createdAt
  createdAt!: Date;

  @UpdateDateColumn() // Usa el decorador UpdateDateColumn para updatedAt
  updatedAt!: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({ name: "user_roles" })
  roles!: Role[];

  @OneToMany(() => Artist, (artist) => artist.user)
  artists!: Artist[];

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}
