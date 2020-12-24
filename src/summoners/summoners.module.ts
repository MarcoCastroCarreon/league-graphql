import { Module } from '@nestjs/common';
import { SummonersResolver } from './summoners.resolver';
import { SummonersService } from './summoners.service';

@Module({
  imports: [],
  providers: [SummonersResolver, SummonersService],
})
export class SummonersModule {}
