import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';

@Module({
  imports: [],
  providers: [TasksResolver],
})
export class TasksModule {}
