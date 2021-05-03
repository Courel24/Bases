import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable, OneToOne
} from 'typeorm';
import {ExamType} from "@entities/ExamTypes.entity";
import {Glucose} from "@entities/Glucose.entity";

@ObjectType()
@Entity()
export class ExamOrder extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({type:"date", nullable: false })
  examAppointment: string;

  @Field()
  @Column({type:"date", nullable: false })
  checkExamResultAppointment: string;

  @Field()
  @Column({ nullable: false })
  recommendations: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @Field(()=>[ExamType], {nullable: false})
  @ManyToMany(()=>ExamType, (examtype)=>examtype.examOrders)
  @JoinTable()
  examTypes: ExamType[];

  @Field(()=>Glucose,{nullable: false})
  @OneToOne(()=>Glucose,(glucose)=>glucose.examOrderId)
  glucoseResult: Glucose;
}