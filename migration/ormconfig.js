module.exports = {
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    migrationsRun: false,
    logging: false,
    entities: ["../src/**/*.entity{.ts,.js}"],
    migrations: [__dirname + '/versions/*{.ts,.js}'],
    migrationsTableName: "migrations",
    extra: {
        autoCommit: false,
    },
    cli: {
        migrationsDir: 'migration/versions'
    }
}