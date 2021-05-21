import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './env'
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { Users } from './users/users.entity';
import { Comments } from './comments/comments.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { Boards } from './boards/boards.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.HOST,
      port: env.PORT,
      username: env.USERNAME,
      password: env.PASSWORD,
      database: env.DB_NAME,
      entities: [
        Users,
        Comments,
        Boards
      ],
      namingStrategy: new SnakeNamingStrategy()
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: true,
      playground: true,
    }),
    UsersModule,
    BoardsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
