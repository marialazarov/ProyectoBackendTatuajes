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
    portfolio?: string;
  
    @CreateDateColumn() 
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
  