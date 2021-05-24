import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { Users } from './users/users.entity';
import { Comments } from './comments/comments.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { Boards } from './boards/boards.entity';
import * as Joi from 'joi'

function getEnvFile(nodeEnv) {
  switch (nodeEnv) {
    case 'dev':
      return '.env.dev'

    case 'prod':
      return '.env.prod'

    default:
      return '.env.local'
  }
}

@Module({
  imports: [
    // ENV config
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: getEnvFile(process.env.NODE_ENV),
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod', 'local').required(),
        HOST: Joi.string().required(),
        PORT: Joi.string().required(),
        USERNAME: Joi.string().required(),
        PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    // DB config
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Users,
        Comments,
        Boards
      ],
      namingStrategy: new SnakeNamingStrategy()
    }),
    // GraphQL module config
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
