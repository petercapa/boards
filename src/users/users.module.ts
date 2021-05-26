import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { Users } from '../entities/users.entity';
import { UsersResolver } from './users.resolver';
import { CommentsModule } from '../comments/comments.module';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), forwardRef(() => CommentsModule)],
  exports: [TypeOrmModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}