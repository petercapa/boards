## Playground example
#### get
```
{
  users {
    id,
    nickname
  }
}
```
#### create
```
mutation createUser {
  createUser(createUserInput: {email: "peter2@capa.ai", password: "password", nickname: "nick2"}) {
    id,
    email,
    password,
    nickname
  }
}
```
#### update
```
mutation updateUser {
  updateUser(updateUserInput: {id:2, email: "peter3@capa.ai", nickname: "nick3"}) {
    id,
    email,
    nickname
  }
}
```
You can update either `email` or `nickname` or both. Once you update single field, return param is to be the required updating field. otherwise, error is returning as you mentioned the non-updated field to return



## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
