import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'SettingUpForm Functions' })
export class UserInteractionTypes {
  @Field({ nullable: false })
  SettingUpFormQueries: string;
}
