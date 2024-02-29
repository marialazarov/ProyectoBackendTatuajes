
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
  
  @Entity("appointments")
  export class Appointment {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    user_id!: number;

    @Column()
    artist_id!: number;

  
    @Column()
    date!: string;
  
    @Column()
    hour!: string;
  
    @CreateDateColumn()
    createdAt?: Date;
  
    @UpdateDateColumn()
    updatedAt?: Date;
  
    @ManyToOne(() => User, (user) => user.clientappointments)
    @JoinColumn({ name: "user_id" })
    user?: User;
  
    @ManyToOne(() => Artist, (artist) => artist.user)
    @JoinColumn ({name: "artist_id", referencedColumnName:"id"})
    artist?: Artist;
  }
  