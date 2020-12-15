import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class InfoType {
  @Field((type) => Int)
  attack: number;
  @Field((type) => Int)
  defense: number;
  @Field((type) => Int)
  magic: number;
  @Field((type) => Int)
  difficulty: number;
}
