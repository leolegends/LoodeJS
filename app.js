const http         = require('http');
const notifier     = require('node-notifier');
const notificacoes = require('./notifier/notificacoes');
const interval     = require('interval-promise');

/* Notificacoes do S.O */

interval(async () => {
 await notificacoes(notifier);
}, 1000, {iterations: 10})



http.createServer().listen(8000);

