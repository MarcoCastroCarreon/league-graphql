import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MapsType {
  @Field((type) => Boolean)
  summonersRift: boolean;
  @Field((type) => Boolean)
  howlingAbyss: boolean;
}
