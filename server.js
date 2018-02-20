// Modules
const path = require('path');
const express = require('express');

// App
const app = express();

// Request security
function reqSec(req, res, next) {
  // HTTP Strict Transport Security (HSTS)
  // Enforces HTTPS across the entire app
  // While nginx does a redirect, HSTS redirects
  // before anything is sent to the server
  res.setHeader('Strict-Transport-Security', 'max-age=630720');
  // Defend against Cross Site Scripting (XSS)
  // This is when a malicious entity injects scripts
  res.setHeader('X-XSS-Protection', '1; mode=block');
  // Require iFrame sources to come from the same origin
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  // Content Security Policy
  // Helpful in preventing XSS to ensure scripts only come
  // from approved origins
  res.setHeader('Content-Security-Policy', 'script-src "self"');
  // Send the request on with security headers
  return next();
}
app.use(reqSec);

// Run the app with static files from the /dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back /dist/index.html
// This passes routing to the Angular app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Set port
const port = process.env.PORT || '1339';
app.set('port', port);

// Start the app
app.listen(port, () => console.log(`Angular app deployed at localhost:${port}`));
