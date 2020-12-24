import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ChampionsModule } from './champions/champions.module';
import { SummonersModule } from './summoners/summoners.module';

@Module({
  imports: [
    ChampionsModule,
    SummonersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
