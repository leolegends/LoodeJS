const watches = {
    alteracoes: (notifier, file, evento) => {
        if(evento == "update"){
            status = "modificado";
        }else if(evento == "remove"){
            status = "destruido";
        }
             notifier.notify(
                {
                    title: 'LoodeJS - Projeto',
                    message:'O arquivo ' + file + " foi " + status,
                    wait: true
                });            

        
    },

    so: (notifier, file, evento) => {
        if(evento == "update"){
            status = "modificado";
        }else if(evento == "remove"){
            status = "destruido";
        }

             notifier.notify(
                {
                    title: 'LoodeJS - SO',
                    message:'O arquivo ' + file + " foi " + status,
                    wait: true
                });            

        
    }

    };

module.exports = watches;