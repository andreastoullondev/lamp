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


for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(){
        alert('clicado');
    })
}