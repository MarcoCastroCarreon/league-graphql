import { Args, Query, Resolver } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './types/item.type';

@Resolver()
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query((returns) => [ItemType])
  async getItems() {
    const items = Object.values((await this.itemsService.getAllItems()).data);
    console.log(items.map(item => item.effect))
    const modifiedItems: ItemType[] = items.map((item) => {
      let maps = {
        summonersRift: item.maps['11'],
        howlingAbyss: item.maps['12'],
      };

      return new ItemType({ ...item, maps });
    });
    return modifiedItems;
  }
}
