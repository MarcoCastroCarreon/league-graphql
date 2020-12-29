import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ChampionsModule } from './champions/champions.module';
import { ItemsModule } from './items/items.module';
import { SummonersModule } from './summoners/summoners.module';

@Module({
  imports: [
    ChampionsModule,
    SummonersModule,
    ItemsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
