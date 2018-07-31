const servicos = require('./servicos');
const projeto  = require('./projeto');

notificacoes = {
    Nprojeto: (notifier, file, evt) => {
        projeto(notifier, file, evt);
    },
    Nservicos: (notifier) => {
        servicos(notifier);   
    },
};

module.exports = notificacoes;