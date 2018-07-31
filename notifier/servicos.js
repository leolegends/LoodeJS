const shell = require('shelljs');

module.exports = (notifier) => {
    mongodb: {
            
        mongodb = shell.exec('systemctl | grep mongodb | grep active');
            
            if(mongodb == ""){

             notifier.notify(
                {
                    title: 'LoodeJS',
                    message:'Algo de errado com o mongoDB',
                    wait: true
                });            

            }
    }

};

