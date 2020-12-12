import { Query, Resolver } from '@nestjs/graphql';
import { TaskType } from './types/task.type';

@Resolver()
export class TasksResolver {
  // constructor(
  //   private authorsService: AuthorsService,
  // ) {}

  @Query(() => [TaskType])
  async getTasks() {
    return ;
  }
}
