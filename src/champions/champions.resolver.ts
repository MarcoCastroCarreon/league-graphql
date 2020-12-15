import { Query, Resolver } from '@nestjs/graphql';
import { ChampionsService } from './champions.service';
import { ChampionType } from './types/champion.type';

@Resolver()
export class ChampionsResolver {
  constructor(
    private championsService: ChampionsService,
  ) {}

  @Query(returns => [ChampionType])
  async getChamps() {
    const champs =(await this.championsService.getAllChampions()).data;
    const champsData = Object.values(champs);
    return champsData;
  }
}
