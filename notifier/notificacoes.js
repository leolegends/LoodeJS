const servicos = require('./servicos');
const shell    = require('shelljs');

module.exports = (notifier) => {
    notifier.notify('Message');
}