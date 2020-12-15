import { Module } from '@nestjs/common';
import { ChampionsResolver } from './champions.resolver';
import { ChampionsService } from './champions.service';

@Module({
  imports: [],
  providers: [ChampionsResolver, ChampionsService],
})
export class ChampionsModule {}
