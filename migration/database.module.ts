import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
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
        TypeOrmModule.forRoot(require('./ormconfig'))
    ]
})
export class DatabaseModule {}
