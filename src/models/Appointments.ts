
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
  } from "typeorm";
  import { User } from "./User";
  import { Artist } from "./Artist";
  
  @Entity()
  export class Appointment {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    date!: string;
  
    @Column()
    hour!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  
    @ManyToOne(() => User, (user) => user.clientappointments)
    @JoinColumn({ name: "user_id" })
    user!: User;
  
    @ManyToOne(() => Artist, (artist) => artist.appointments)
    @JoinColumn({ name: "artist_id" })
    artist!: Artist;
  }
  