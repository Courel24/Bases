import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {HospitalUser} from "@entities/HospitalUser.entity";

@ObjectType()
@Entity()
export class Role extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  name: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @Field(()=>[HospitalUser],{nullable: false})
  @OneToMany(()=>HospitalUser,(hospitalUser)=>hospitalUser.role)
  userRoles: HospitalUser[];
}
