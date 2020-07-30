function carregar(){
    var frase = window.document.getElementById('frase')
    var imagem = window.document.getElementById('imagem')

    var agora = new Date()
    var hora = agora.getHours()
    
    if(hora >= 0 && hora < 12){
        imagem.src = "imagens/manha.jpg"
        document.body.style.background = '#e2cd9f'

        //FRASE NO SINGULAR OU PLARAL
        if(hora == 1){
            frase.innerHTML = `Bom dia! <br>Agora é ${hora} hora.`
        } else{
            frase.innerHTML = `Bom dia! <br>Agora são ${hora} horas.`
        }
        //FIM DA FRASE NO SINGULAR OU PLURAL

      //TARDE  
    } else if(hora < 18){
        imagem.src = "imagens/tarde.jpg"
        document.body.style.background = '#b9846f'
        frase.innerHTML = `Boa tarde! <br>Agora são ${hora} horas.`

      //NOITE
    } else {
        imagem.src = "imagens/noite.jpg"
        document.body.style.background = '#515154'
        frase.innerHTML = `Boa Noite! <br>Agora são ${hora} horas.`
    }
    
}