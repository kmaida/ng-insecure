// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    domain: 'kmaida.auth0.com',
    clientId: 'Rp1ZbPH6fK93lynaOt6HyQa3KcvN7Xl8',
    redirect: 'http://localhost:4200/callback',
    logoutUrl: 'http://localhost:4200'
  }
};
