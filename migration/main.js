async function bootstrap() {
  // Init env
  switch (process.env.NODE_ENV) {
    case 'dev':
      require('dotenv').config({ path: '.env.dev' })

    case 'prod':
      return 'env.prod'

    default:
      require('dotenv').config({ path: '.env.local' })
  }
  
  // Required statement: migration type can be either "run" or "revert"
  let stm = `node --require ts-node/register ./node_modules/typeorm/cli.js --config migration/ormconfig.js migration:${process.env.TYPE} `
  if (process.env.TYPE === "generate") {
    // TODO: change the file name at your convenience
    stm = `node --require ts-node/register ./node_modules/typeorm/cli.js -- --config migration/ormconfig.js migration:${process.env.TYPE} --name generation`
  }

  // Run migration command
  await require("child_process").exec(stm, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
  })
  
}

bootstrap();
