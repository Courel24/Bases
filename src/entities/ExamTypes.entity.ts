import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {ExamOrder} from "@entities/ExamOrder.entity";

@ObjectType()
@Entity()
export class ExamType extends BaseEntity {
  // Fields & Columns

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  name: number;

  @Field()
  @Column({ nullable: false })
  price: number;

  @Field()
  @Column({ nullable: false })
  category: number;

  @Field()
  @Column({ nullable: false })
  quantity: number;

  @Field()
  @Column({type:"date", nullable: false })
  timeToRegister: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;

  @Field(()=>[ExamOrder])
  @ManyToMany(()=>ExamOrder,(examorder)=>examorder.examTypes)
  examOrders: ExamOrder[]
}
