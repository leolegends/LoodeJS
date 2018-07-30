const http         = require('http');
const notifier     = require('node-notifier');
const notificacoes = require('./notifier/notificacoes');

/* Notificacoes do S.O */

notificacoes(notifier);

http.createServer().listen(8000);

