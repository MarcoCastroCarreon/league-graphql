import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ItemStatsType {
  @Field((type) => Int, { nullable: true })
  FlatHPPoolMod?: number;
  @Field((type) => Int, { nullable: true })
  FlatMagicDamageMod?: number;
}
