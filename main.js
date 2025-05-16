const botoes = document.querySelectorAll(",botao");

for (let i=0; i<botoes.length;i++){
    botoes[I].onclick = function (){

        for(let j=0;j<botoes.length; j++){
            botoes[j].classList.revome("ativo");
        }

        botoes[i].classList.add ("ativo");
    }
}