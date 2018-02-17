# ng-insecure

This Angular application is authenticated, but calls an unsecured API, the endpoint to which is visible in the code bundle on initial page load.

> Data in the unsecured API is falsified for demo purposes.

This repo demonstrates why you should _never_ rely solely on front-end authentication to secure sensitive data.

## Dependencies

* [Node.js](https://nodejs.org)
* A package manager: suggest [npm](https://npmjs.com) (which comes with Node) or [Yarn](https://yarnpkg.com)
* [Angular CLI](https://github.com/angular/angular-cli)

## Setup

Clone the repo:

```bash
$ git clone https://github.com/kmaida/ng-insecure.git
```

Install dependencies:

```bash
$ cd ng-insecure
$ npm install
# or yarn install
```

## Serve

### Development

To start the local development server:

```bash
$ ng serve
```

The app will then run at [http://localhost:4200](http://localhost:4200).

### Staging

To build the app and start the webserver which runs the code from the `/dist` folder:

```bash
$ ng build --env=staging
$ node server
```

The app will then run at [http://localhost:1339](http://localhost:1339).

### Production

This demo app is live at [https://nginsecure.kmaida.net](https://nginsecure.kmaida.net).

## License

[MIT](LICENSE) © Kim Maida 2018
