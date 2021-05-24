import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: false,
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    cli: {
        migrationsDir: 'migration'
    }
};

export = config;