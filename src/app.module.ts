import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ChampionsModule } from './champions/champions.module';

@Module({
  imports: [
    ChampionsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
