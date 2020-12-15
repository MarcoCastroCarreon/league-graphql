import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StatsType {
  @Field((type) => Float)
  hp: number;
  @Field((type) => Float)
  hpperlevel: number;
  @Field((type) => Float)
  mp: number;
  @Field((type) => Float)
  mpperlevel: number;
  @Field((type) => Float)
  movespeed: number;
  @Field((type) => Float)
  armor: number;
  @Field((type) => Float)
  armorperlevel: number;
  @Field((type) => Float)
  spellblock: number;
  @Field((type) => Float)
  spellblockperlevel: number;
  @Field((type) => Float)
  attackrange: number;
  @Field((type) => Float)
  hpregen: number;
  @Field((type) => Float)
  hpregenperlevel: number;
  @Field((type) => Float)
  mpregen: number;
  @Field((type) => Float)
  mpregenperlevel: number;
  @Field((type) => Float)
  crit: number;
  @Field((type) => Float)
  critperlevel: number;
  @Field((type) => Float)
  attackdamage: number;
  @Field((type) => Float)
  attackdamageperlevel: number;
  @Field((type) => Float)
  attackspeedperlevel: number;
  @Field((type) => Float)
  attackspeed: number;
}
