
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
    date!: Date;
  
    @Column()
    hour!: string;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  
    @ManyToOne(() => User, (user) => user.appointments)
    @JoinColumn({ name: "user_id" })
    user!: User;
  
    @ManyToOne(() => Artist, (artist) => artist.appointments)
    @JoinColumn({ name: "artist_id" })
    artist!: Artist;
  }
  