import { Module } from '@nestjs/common';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';

@Module({
  imports: [],
  providers: [ItemsResolver, ItemsService],
})
export class ItemsModule {}
