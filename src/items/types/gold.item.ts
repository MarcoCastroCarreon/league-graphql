import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GoldType {
  @Field((type) => Int)
  base: number;
  @Field((type) => Boolean)
  purchasable: boolean;
  @Field((type) => Int)
  total: number;
  @Field((type) => Int)
  sell: number;
}
