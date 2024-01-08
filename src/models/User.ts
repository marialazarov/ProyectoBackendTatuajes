import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
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

  @CreatedDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({ name: "user_roles" })
  roles!: Role[];

  @OneToMany(() => Artist, (artist) => artist.user)
  artists!: Artist[];

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}

function CreatedDateColumn(): (target: User, propertyKey: "createdAt") => void {
  throw new Error("Function not implemented.");
}

function UpdateDateColumn(): (target: User, propertyKey: "updatedAt") => void {
  throw new Error("Function not implemented.");
}
