import { RiotAPITypes } from '@fightmegg/riot-api';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SummonerType {
  @Field(type => ID)
  profileIconId: number;
  @Field()
  name: string;
  @Field(type => ID)
  puuid: string;
  @Field(type => Int)
  summonerLevel: number;
  @Field()
  revisionDate: string;
  @Field(type => ID)
  id: string;
  @Field(type => ID)
  accountId: string;

  constructor(summoner: RiotAPITypes.Summoner.SummonerDTO) {
    this.profileIconId = summoner.profileIconId;
    this.name = summoner.name;
    this.id = summoner.id;
    this.puuid = summoner.puuid;
    this.accountId = summoner.accountId;
    this.revisionDate = summoner.revisionDate.toString();
    this.summonerLevel = summoner.summonerLevel;
  }
}
