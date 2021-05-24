## Guide
### Create migration file 
if you want to create migration manually, execute the following command \
`npm run typeorm migration:create -- -c local -d migration -n filename`

if you want to create migration command in sync with your model changes, execute the following command \
`npm run typeorm migration:generate -- -c local -d migration -n NewMigration`

### Rebuild migration
`npm run build`

### Start migration 
`npm run typeorm migration:run` \
Once it excuted, migrations table created at the required database

### Revert migration
`npm run typeorm migration:revert`