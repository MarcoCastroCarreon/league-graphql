import { Injectable } from '@nestjs/common';
import { DDragon, RiotAPITypes } from '@fightmegg/riot-api';

const ddragon = new DDragon();

@Injectable()
export class ItemsService {
  async getAllItems(): Promise<RiotAPITypes.DDragon.DDragonItemWrapperDTO> {
    const items: RiotAPITypes.DDragon.DDragonItemWrapperDTO = await ddragon.items();

    return items;
  }
}
