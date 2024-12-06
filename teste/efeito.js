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
    event.stopPropagation()

    /* carta.style.transform = "scale(2)" */


    carta.style.width = "90vw"
    carta.style.height = "100vh"

    carta.style.position = "fixed"
    carta.style.overflow = "scroll"
    
    carta.style.padding = "20px"
}