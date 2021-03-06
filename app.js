const http         = require('http');
const notifier     = require('node-notifier');
const servicos     = require('./notifier/notificacoes');
const watch        = require('node-watch');
const config       = require('./config');

/* Notificacoes do S.O */

var watcher = watch(config.diretorio_projeto, { recursive: true });
 
watcher.on('change', function(evt, name) {
    servicos.Nprojeto(notifier, name, evt);
});

var watcher_so = watch(config.diretorio_so, { recursive: true });
 
watcher_so.on('change', function(evt, name) {
    servicos.Nso(notifier, name, evt);
});

http.createServer().listen(8000);

