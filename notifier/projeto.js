module.exports = (notifier, file, evento) => {
    
    alteracoes: {

        if(evento == "update"){
            status = "modificado";
        }else if(evento == "remove"){
            status = "destruido";
        }

             notifier.notify(
                {
                    title: 'LoodeJS',
                    message:'O arquivo ' + file + " foi " + status,
                    wait: true
                });            

        
    }

};

