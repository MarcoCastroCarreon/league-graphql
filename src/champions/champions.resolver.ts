import { Args, Query, Resolver } from '@nestjs/graphql';
import { ChampionsService } from './champions.service';
import { ChampionType } from './types/champion.type';

@Resolver()
export class ChampionsResolver {
  constructor(private championsService: ChampionsService) {}

  @Query((returns) => [ChampionType])
  async getChamps() {
    const champs = (await this.championsService.getAllChampions()).data;
    const champsData = Object.values(champs);
    return champsData;
  }

  @Query((returns) => ChampionType)
  async getChampionById(@Args('championId') championId: string) {
    const champs = (await this.championsService.getAllChampions()).data;
    const champsData = Object.values(champs);

    const champion = champsData.filter((champ) => champ.key === championId);

    return champion.length > 0 && champion[0];
  };
}
