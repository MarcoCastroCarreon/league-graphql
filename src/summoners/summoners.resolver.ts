  import { PlatformId } from '@fightmegg/riot-api';
  import { Args, Query, Resolver } from '@nestjs/graphql';
  import { SummonersService } from './summoners.service';
  import { ChampionMasteryType } from './types/champion_mastery.summoner';
  import { SummonerType } from './types/summoner.type';

  @Resolver()
  export class SummonersResolver {
    constructor(private summonersService: SummonersService) {}

    @Query((returns) => SummonerType)
    async getSummonerByName(
      @Args('name') name: string,
      @Args('platform') platform: PlatformId,
    ): Promise<SummonerType> {
      const summonerFounded = await this.summonersService.getSummonerInfoName(
        name,
        platform,
      );

      return summonerFounded && new SummonerType(summonerFounded);
    }

    @Query((returns) => [ChampionMasteryType])
    async getChampionsMasteryBySummonerId(
      @Args('summonerId') summonerId: string,
      @Args('platform') platform: PlatformId,
    ) {
      const masterysFounded = await this.summonersService.getChampionsMasteryFromSummoner(
        summonerId,
        platform,
      );

      return (
        masterysFounded &&
        masterysFounded.map((mastery) => new ChampionMasteryType(mastery))
      );
    }
  }
