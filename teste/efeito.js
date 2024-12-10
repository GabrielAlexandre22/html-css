var envelope = document.querySelector(".container");
var carta = document.querySelector(".carta")

envelope.onclick = function abrir(){
    for(var i = 1; i <= 2; i++){
        var cima = document.querySelector(`.cima${i}`)

        if(cima){
            if(i == 1){
                cima.style.transform = "rotateX(90deg)"
            } else{
                setTimeout(function(){cima.style.transform = "rotateX(180deg)"
            }, 500)}
        }
    }

    setTimeout(function(){
        carta.style.transform = "translateY(-90%)"

        setTimeout(function(){
            carta.style.zIndex = "7"
            carta.style.transform = "translateY(0%)"
        }, 1000)
    }, 1000)
    
}

/* setTimeout(function(){
        for(var i = 2; i >= 1; i--){
            var cima = document.querySelector(`.cima${i}`)

            if(cima){
                if(i == 2){
                    cima.style.transform = "rotateX(90deg)"
                } else{
                    setTimeout(function(){cima.style.transform = "rotateX(0deg)"
                }, 1000)}
            }
        }
    }, 2000) */

carta.onclick = function(event){
    var envelope = document.querySelector(".container");

    event.stopPropagation()

    with(carta.style){
        width = "90vw" 
        maxHeight = "100vh"

        position = "fixed"
        overflow = "scroll"

        padding = "20px"
    }

    document.querySelectorAll("p").forEach(p => {
        p.style.color = "black"
    })

    envelope.style.animation = "nada"
}