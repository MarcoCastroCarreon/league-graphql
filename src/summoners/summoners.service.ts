import { Injectable } from '@nestjs/common';
import { RiotAPI, RiotAPITypes, PlatformId } from '@fightmegg/riot-api';

const CONFIG: RiotAPITypes.Config = {
  debug: false,
  cache: {
    cacheType: 'local',
  },
};
const API = new RiotAPI('RGAPI-1335dd0f-5486-454c-b0b6-38ed2b5bb3b5', CONFIG);

@Injectable()
export class SummonersService {
  async getSummonerInfoName(
    name: string,
    platform: PlatformId,
  ): Promise<RiotAPITypes.Summoner.SummonerDTO | null> {
    const summoner = await API.summoner.getBySummonerName({
      summonerName: name,
      region: platform as RiotAPITypes.LoLRegion,
    });

    return summoner || null;
  }

  async getChampionsMasteryFromSummoner(summonerId: string, platform: PlatformId): Promise<
    RiotAPITypes.ChampionMastery.ChampionMasteryDTO[]
  > {
    return await API.championMastery.getAllChampions({
      region: platform as RiotAPITypes.LoLRegion,
      summonerId
    });
  }
}
