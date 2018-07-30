const shell = require('shelljs');

module.exports = (notifier) => {
    git: {
             notifier.notify(
                {
                    title: 'LoodeJS',
                    message:'Opa, parece que você não tem o git instalado, podemos instalar?',
                    wait: true
                });            

    }

};

