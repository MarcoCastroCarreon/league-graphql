import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EffectType {
  @Field({ nullable: true })
  Effect1Amount: '0.24';
  @Field({ nullable: true })
  Effect2Amount: '10';
  @Field({ nullable: true })
  Effect3Amount: '550';
  @Field({ nullable: true })
  Effect4Amount: '0.1';
  @Field({ nullable: true })
  Effect5Amount: '0.3';
  @Field({ nullable: true })
  Effect6Amount: '2.5';
  @Field({ nullable: true })
  Effect7Amount: '90';
  @Field({ nullable: true })
  Effect8Amount: '240';
  @Field({ nullable: true })
  Effect9Amount: '600';
  @Field({ nullable: true })
  Effect10Amount: '40';
  @Field({ nullable: true })
  Effect11Amount: '5';
  @Field({ nullable: true })
  Effect12Amount: '0.3';
  @Field({ nullable: true })
  Effect13Amount: '0.7';
  @Field({ nullable: true })
  Effect14Amount: '3';
  @Field({ nullable: true })
  Effect15Amount: '300';
  @Field({ nullable: true })
  Effect16Amount: '1';
  @Field({ nullable: true })
  Effect17Amount: '0.4';
  @Field({ nullable: true })
  Effect18Amount: '9';
}
