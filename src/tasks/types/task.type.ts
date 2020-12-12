import { Field } from '@nestjs/graphql';

export class TaskType {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  createdAt: string;
  @Field({ name: 'description'})
  description: string;
}
