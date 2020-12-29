import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ItemImageType {
  @Field()
  full: string;
  @Field()
  sprite: string;
  @Field()
  group: string;
  @Field((type) => Int)
  x: number;
  @Field((type) => Int)
  y: number;
  @Field((type) => Int)
  w: number;
  @Field((type) => Int)
  h: number;
}
