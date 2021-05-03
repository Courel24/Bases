import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import {Appointment} from "@entities/Appointment.entity";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  phone: string;

  @Field()
  @Column({ nullable: false, unique: true })
  user: string;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column({ nullable: false })
  lastname: string;

  @Field()
  @Column({ nullable: false, unique: true })
  epsId: string;

  @Field()
  @Column({ nullable: false, unique: true })
  documentId: string;

  @Field()
  @Column({ nullable: false })
  clinicalHistory: string;

  @Field()
  @Column({ nullable: false })
  afiliationType: string;

  @Field()
  @Column({ nullable: false })
  password: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @Field(()=>[Appointment],{nullable: false})
  @OneToMany(()=>Appointment,(appointment)=>appointment.user)
  appointments: Appointment[];
}
