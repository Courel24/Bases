import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {ExamOrder} from "@entities/ExamOrder.entity";

@ObjectType()
@Entity()
export class Glucose extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  glucose: number;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @Field(()=>ExamOrder,{nullable: false})
  @OneToOne(()=>ExamOrder,(examOrder)=>examOrder.glucoseResult)
  examOrderId: ExamOrder;
}
