import { Field, ID, ObjectType } from '@nestjs/graphql';
import { InfoType } from './info.champion';
import { ChampionStatsType } from './stats.champion';

@ObjectType()
export class ChampionType {
  @Field()
  version: string;
  @Field(type => ID)
  id: string;
  @Field()
  key: string;
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  blurb: string;
  @Field((type) => InfoType)
  info: InfoType;
  @Field((type) => [String])
  tags: string[];
  @Field()
  partype: string;
  @Field()
  stats: ChampionStatsType;
}
