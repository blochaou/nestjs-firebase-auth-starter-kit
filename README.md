<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.bef-technology.com/images/img/logo-bef-technology-138x70.jpg" width="138" alt="BEF Technology logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework with [Firebase Authentication](https://firebase.google.com/products/auth/?authuser=0) and [MongoDB integration](https://www.mongodb.com/).

## Installation

```bash
$ npm install
```

## Setup Firebase

Please download the service account file in your Firebase account. Copy and past the JSON parameter in the file firebase.secrets.json.
```
{
    "type": "",
    "project_id": "",
    "private_key_id": "",
    "private_key": "",
    "client_email": "",
    "client_id": "",
    "auth_uri": "",
    "token_uri": "",
    "auth_provider_x509_cert_url": "",
    "client_x509_cert_url": ""
}
```

![Firebase account service setting](./firebase-account-service-setting.png)

## Setup MongoDB

Change the MongoDB uri in the file constantes.ts

```
export const MONGO_URI = 'mongodb+srv://USERNAME:PASSWORD@DOMAINENAME/DBNAME?retryWrites=true';
```

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
