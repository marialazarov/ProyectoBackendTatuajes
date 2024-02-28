import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    CreateDateColumn, // Importa el decorador CreateDateColumn
    UpdateDateColumn, // Importa el decorador UpdateDateColumn
    ManyToOne,
    OneToMany,
    JoinColumn,
    OneToOne,
  } from "typeorm";
  import { User } from "./User";
  import { Appointment } from "./Appointments";
  import { Designs } from "./Designs";
  
  @Entity("artist")
  export class Artist {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    user_id!: number;

    @Column()
    name!: string;


    @Column()
    portfolio?: string;

    @Column()
    img?: string;
  
    @CreateDateColumn() 
    createdAt!: Date;
  
    @UpdateDateColumn() 
    updatedAt!: Date;
  
    @OneToOne(() => User, (user) => user.artists)
    @JoinColumn({ name: "user_id" })
    user!: User;
  
    @OneToMany(() => Appointment, (appointment) => appointment.artist)
    artistappointments!: Appointment[];
  
    @OneToMany(() => Designs, design => design.artist)
    designs!: Designs[];
  }
  