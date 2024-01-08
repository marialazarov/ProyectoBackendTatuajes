import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  Timestamp,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Appointment } from "./Appointments";
import { Designs } from "./Designs";

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  portfolio!: string;

  @CreatedDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.artists)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @OneToMany(() => Appointment, (appointment) => appointment.artist)
  appointments!: Appointment[];
  
  @OneToMany(() => Designs, design => design.artist)
designs!: Designs[];
  
}

function CreatedDateColumn(): (
  target: Artist,
  propertyKey: "createdAt"
) => void {
  throw new Error("Function not implemented.");
}
function ManyToOne(
  arg0: () => typeof User,
  arg1: (user: any) => any
): (target: Artist, propertyKey: "user") => void {
  throw new Error("Function not implemented.");
}

function JoinColumn(arg0: {
  name: string;
}): (target: Artist, propertyKey: "user") => void {
  throw new Error("Function not implemented.");
}
