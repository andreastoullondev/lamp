// lampada -> ajustes na lampada 


const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function islampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){
    if(!islampBroken()){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if(!islampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampbroken(){
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff (){
    if( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else if(turnOnOff.textContent == 'Desligar'){
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click', lampOnOff );
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampbroken);

// contaor 

document.addEventListener("DOMContentLoaded", function(){
    let numeroAtual = 0

    const numeroNoHtml = document.getElementById('numero-atual');
    const botaosub = document.getElementById('botao-que-subtrai');
    const botaosoma = document.getElementById('botao-que-soma');

    function atualizaNoHtml(){
        numeroNoHtml.textContent = numeroAtual
    }


    botaosoma.addEventListener('click', function(){
        numeroAtual++
        atualizaNoHtml()
    })

    botaosub.addEventListener('click', ()=>{
        numeroAtual--
        atualizaNoHtml()
    })
})


// Pedra papel ou tesoura Muito trabalho, mas temos a solução 


var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = ""
var inimigoOpt = "";

function validarVitoria(){
    
}


function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    for(var i = 0 ;i < enemyOptions.length; i++ ){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3.3);

    const enemyOptions = document.querySelectorAll('.enemy-options div')
    resetInimigo();
    for(var i = 0;i < enemyOptions.length;i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }


validarVitoria();
//alert(playerOpt);
//alert(inimigoOpt);



// esta demorando 3 segundos depois do click, preciso ver isso
}



function  resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt')

        inimigoJogar();


        //alert(playerOpt)
    })
}