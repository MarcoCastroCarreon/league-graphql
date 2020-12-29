import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EffectType } from './effect.item';
import { GoldType } from './gold.item';
import { ItemImageType } from './image.item';
import { MapsType } from './maps.item';
import { ItemStatsType } from './stats.image';

@ObjectType()
export class ItemType {
  @Field((type) => String)
  name: string;
  @Field((type) => String)
  description: string;
  @Field((type) => String)
  colloq: string;
  @Field((type) => String)
  plaintext: string;
  @Field((type) => Int)
  specialRecipe: number;
  @Field((type) => Boolean, { nullable: true })
  inStore?: boolean;
  @Field((type) => ItemImageType)
  image: ItemImageType;
  @Field((type) => GoldType)
  gold: GoldType;
  @Field((type) => [String])
  tags: String[];
  @Field((type) => MapsType)
  maps: MapsType;
  @Field((type) => ItemStatsType, { nullable: true })
  stats?: ItemStatsType;
  @Field((type) => EffectType, { nullable: true })
  effect?: EffectType;
  @Field((type) => Int, { nullable: true })
  depth?: number;

  constructor(item: any) {
    this.name = item.name;
    this.maps = item.maps;
    this.description = item.description;
    this.inStore = item.inStore;
    this.colloq = item.colloq;
    this.plaintext = item.plaintext;
    this.specialRecipe = item.specialRecipe;
    this.image = item.image;
    this.gold = item.gold;
    this.tags = item.tags;
    this.stats = item.stats;
    this.effect = item.effect;
    this.depth = item.depth;
  }
}
