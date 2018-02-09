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

To start the local development server:

```bash
$ ng serve
```

To start the webserver which runs the code from the `/dist` folder:

```bash
$ node server
```

## License

[MIT](LICENSE) © Kim Maida 2018
