import { Injectable } from '@nestjs/common';
import { DDragon, RiotAPI, RiotAPITypes } from '@fightmegg/riot-api';

const ddragon = new DDragon();
const CONFIG: RiotAPITypes.Config = {
  debug: false,
  cache: {
    cacheType: 'local',
  },
};
const API = new RiotAPI('RGAPI-1335dd0f-5486-454c-b0b6-38ed2b5bb3b5', CONFIG);

@Injectable()
export class ChampionsService {

  async getAllChampions() {
    
    const champions = await ddragon.champion.all();

    return champions;
  }
}