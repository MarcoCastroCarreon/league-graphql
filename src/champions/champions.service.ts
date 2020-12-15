import { Injectable } from '@nestjs/common';
import { DDragon } from '@fightmegg/riot-api';

@Injectable()
export class ChampionsService {

  async getAllChampions() {
    const ddragon = new DDragon();
    const champions = await ddragon.champion.all();

    return champions;
  }
}