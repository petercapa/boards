import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CommentsService } from './comments.service';
import { Comments } from '../entities/comments.entity';
// import { CommentsResolver } from './comments.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  exports: [TypeOrmModule],
//   providers: [CommentsService, CommentsResolver],
})
export class CommentsModule {}
