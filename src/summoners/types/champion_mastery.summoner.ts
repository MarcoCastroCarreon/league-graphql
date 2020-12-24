import { RiotAPITypes } from '@fightmegg/riot-api';
import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChampionMasteryType {
  @Field()
  championPointsUntilNextLevel: string;
  @Field((type) => Float)
  chestGranted: boolean;
  @Field((type) => ID)
  championId: number;
  @Field()
  lastPlayTime: string;
  @Field((type) => Int)
  championLevel: number;
  @Field((type) => ID)
  summonerId: string;
  @Field((type) => Int)
  championPoints: number;
  @Field()
  championPointsSinceLastLevel: string;
  @Field((type) => Int)
  tokensEarned: number;

  constructor(
    championsMastery: RiotAPITypes.ChampionMastery.ChampionMasteryDTO,
  ) {
    this.championPointsUntilNextLevel = championsMastery.championPointsUntilNextLevel.toString();
    this.chestGranted = championsMastery.chestGranted;
    this.championId = championsMastery.championId;
    this.lastPlayTime = championsMastery.lastPlayTime + '';
    this.championLevel = championsMastery.championLevel;
    this.summonerId = championsMastery.summonerId;
    this.championPoints = championsMastery.championPoints;
    this.championPointsSinceLastLevel =
      championsMastery.championPointsSinceLastLevel + '';
    this.tokensEarned = championsMastery.tokensEarned;
  }
}
