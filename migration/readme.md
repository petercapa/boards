## Guide
### Create migration file 
if you want to create migration manually, execute the following command \
`npm run migrate:create`

### Start migration 
> NODE_ENV = "dev" | "local" | "prod" 

`npm run migration:up:${NODE_ENV}` \
Once it excuted, migrations table created at the required database

### Revert migration
> NODE_ENV = "dev" | "local" | "prod" 

`npm run migration:down:${NODE_ENV}`