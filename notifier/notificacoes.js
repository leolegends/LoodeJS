const servicos = require('./servicos');
const projeto  = require('./projeto');

const notificacoes = {
    Nprojeto: (notifier, file, evt) => {
        projeto.alteracoes(notifier, file, evt);
    },
    Nso: (notifier, file, evt) => {
        projeto.so(notifier, file, evt);
    },
    Nservicos: (notifier) => {
        servicos(notifier);   
    }
};

module.exports = notificacoes;