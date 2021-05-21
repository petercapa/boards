import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsService } from './boards.service';
import { Boards } from './boards.entity';
import { BoardsResolver } from './boards.resolver';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  imports: [TypeOrmModule.forFeature([Boards]), forwardRef(() => CommentsModule)],
  exports: [TypeOrmModule],
  providers: [BoardsService, BoardsResolver],
})
export class BoardsModule {}