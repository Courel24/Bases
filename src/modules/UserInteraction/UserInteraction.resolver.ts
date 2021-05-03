import { UserInteractionTypes } from '@modules/UserInteraction/UserInteraction.types';
import { FieldResolver, Query, Resolver } from 'type-graphql';

@Resolver(() => UserInteractionTypes)
export class SettingUpFormResolver {
  @Query()
  @FieldResolver()
  UserInteractionQueries(): string {
    return "ok";
  }
}
