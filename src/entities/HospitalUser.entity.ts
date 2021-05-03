import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {Role} from "@entities/Role.entity";

@ObjectType()
@Entity()
export class HospitalUser extends BaseEntity {
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
  documentId: string;

  @Field()
  @Column({ nullable: false })
  password: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @Field(()=>Role,{nullable:false})
  @ManyToOne(()=>Role,(role)=>role.userRoles)
  role: Role;

}
