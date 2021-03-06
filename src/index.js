const rc = require('rc');
const Init = require('./init');
const path = require('path');

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

var options = rc('oaaserver', {
  port: 6969,
  root: path.join(__dirname, '../data/'),

  imba: {
    host: 'hostname',
    port: 0,
    user: 'username',
    password: 'password'
  }
});

Init(options);
