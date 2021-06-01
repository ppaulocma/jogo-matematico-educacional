var conta, botao1, botao2, botao3, botao4, n1, n2, numOperador, operador, 
resultado=0, contaTexto=0 ,sorteioBotao, botao1=0, pontos= 0, pontuacao, 
selecionar_dificuldade = 0, jogador=new Array(),count = 60,tempo, minutos = 2,tempoTotal = 0, maior = 0,
 jogadores = new Array(), pontos_finais, cont= 0

botao1 = document.getElementById("botao_1")
botao2 = document.getElementById("botao_2")
botao3 = document.getElementById("botao_3")
botao4 = document.getElementById("botao_4")
pontuacao = document.getElementById("pontos")
tempo = document.getElementById("tempo")
conta = document.getElementById("conta")
pontos_finais = document.getElementById("pontos_finais")

function botao_iniciar() { 
    var menu = document.getElementsByClassName("botoes_menu")
    var titulo = document.getElementsByClassName("h1")
    menu[0].setAttribute("class","animated")
    titulo[0].setAttribute("class","animated")
    setTimeout(function time(){window.location.href="html/cadastrar.html"},1500)


}
function botao_instrucoes() {
    var menu = document.getElementsByClassName("botoes_menu")
    var titulo = document.getElementsByClassName("h1")
    menu[0].setAttribute("class","animated")
    titulo[0].setAttribute("class","animated")
    setTimeout(function time(){window.location.href="html/sobre.html"},1500)
    
}
function botao_ranking() {
    var menu = document.getElementsByClassName("botoes_menu")
    var titulo = document.getElementsByClassName("h1")
    menu[0].setAttribute("class","animated")
    titulo[0].setAttribute("class","animated")
    setTimeout(function time(){window.location.href="html/pontuacoes.html"},1500)
    
 
}
function botao_creditos() {
    var menu = document.getElementsByClassName("botoes_menu")
    var titulo = document.getElementsByClassName("h1")
    menu[0].setAttribute("class","animated")
    titulo[0].setAttribute("class","animated")
    setTimeout(function time(){window.location.href="html/creditos.html"},1500)
    
}
function voltar_menu() {
    window.location.href="../index.html"
}
function tentar_novamente() {
    window.location.href="jogo.html"
    
}
function voltar() {
    window.location.href="../index.html"
}
function carregarJogo(){
    jogador = JSON.parse(localStorage.getItem("jogador"))
    selecionar_dificuldade = jogador[jogador.length-1].nivel
    logica()
    start()

}
function dificuldade(n) {
    jogador = JSON.parse(localStorage.getItem("jogador"))
    if(jogador == null){
        jogador = new Array()
    }
    
    var nome = document.getElementById("nickname").value
    var turma = document.getElementById("turma").value
    var itemUsuario = 
    {
        nome: nome,
        turma : turma, 
        pontuacao : 0,
        nivel : n    
    }
    jogador.push(itemUsuario)
    if(nome.length <=2 || turma.length ==0 || nome.length>15 || turma.length>6){
        Mudarestado('minhaDiv')
        start2('minhaDiv')
        cont = 0        
    }else{
        localStorage.setItem('jogador',JSON.stringify(jogador))
        var fundo = document.getElementsByClassName("botoes_dificuldades")
        fundo[0].setAttribute("class","animated")
        setTimeout(function time(){window.location.href="jogo.html"},1500)
        
    }

}
function logica() {
    if(selecionar_dificuldade == 1){
        n1= parseInt(Math.random()*100 - 1)
        n2= parseInt(Math.random()*100 - 1)
        sorteioBotao=parseInt(Math.random()*3)
        numOperador = parseInt(Math.random()*2)
        if (numOperador == 0) {
            resultado = n1+n2
            contaTexto = n1+"+"+n2
            conta.innerHTML = contaTexto;
        }
        if (numOperador == 1) {
            resultado = n1-n2
            contaTexto = n1+"-"+n2
            conta.innerHTML = contaTexto;
        }
        if (sorteioBotao == 0) {
            botao1.innerHTML = resultado; 
            botao2.innerHTML = n1+n1+3
            botao3.innerHTML = n1-n2+n1+4
            botao4.innerHTML = n2-n1+n2+1
            botao1.value = resultado
        }
        if (sorteioBotao == 1) {
            botao1.innerHTML =  n1+n1+3
            botao2.innerHTML = resultado;
            botao3.innerHTML = n1-n2+n1+4
            botao4.innerHTML = n2-n1+n2+2
            botao2.value = resultado

        }
        if (sorteioBotao == 2) {
            botao1.innerHTML =  n1+n1+3
            botao2.innerHTML = n1-n2+n1+4
            botao3.innerHTML = resultado;
            botao4.innerHTML = n2-n1+n2+1
            botao3.value = resultado

        }
        if (sorteioBotao == 3) {
            botao1.innerHTML =  n1+n1+3
            botao2.innerHTML = n1-n2+n1+4
            botao3.innerHTML = n2-n1+n2+2
            botao4.innerHTML = resultado;
            botao4.value = resultado

        }
        pontuacao.innerHTML = pontos
    }
    if(selecionar_dificuldade==2){
        sorteioBotao= parseInt(Math.random()*3)
        numOperador = parseInt(Math.random()*3)
        if (numOperador == 0) {
            n1= parseInt(Math.random()*100 - 1)
            n2= parseInt(Math.random()*100 - 1)
            resultado = n1+n2
            contaTexto = n1+"+"+n2
            conta.innerText = contaTexto;
            extra1 = n1+n2+3
            extra2 = n1-n2+n1+4
            extra3 = n2-n1+n2+1
        }
        if (numOperador == 1) {
            n1= parseInt(Math.random()*100 - 1)
            n2= parseInt(Math.random()*100 - 1)
            resultado = n1-n2
            contaTexto = n1+"-"+n2
            conta.innerHTML = contaTexto;
            extra1 = n1+n1+3
            extra2 = n1-n2+n1+4
            extra3 = n2-n1+n2+1
        }
        if (numOperador == 2) {
            n1= parseInt(Math.random()*20 )
            n2= parseInt(Math.random()*20 )
            resultado = n1*n2
            contaTexto = n1+"x"+n2
            conta.innerHTML = contaTexto;
            extra1 = n1*n1+3
            extra2 = n2+n1*4
            extra3 = n2+n1+n2+1
        }
        if (sorteioBotao == 0) {
            botao1.innerHTML = resultado; 
            botao2.innerHTML = extra1
            botao3.innerHTML = extra2
            botao4.innerHTML = extra3
            botao1.value = resultado
        }
        if (sorteioBotao == 1) {
            botao1.innerHTML =  extra1
            botao2.innerHTML = resultado;
            botao3.innerHTML = extra2
            botao4.innerHTML = extra3
            botao2.value = resultado
    
        }
        if (sorteioBotao == 2) {
            botao1.innerHTML =  extra1
            botao2.innerHTML = extra2
            botao3.innerHTML = resultado;
            botao4.innerHTML = extra3
            botao3.value = resultado
    
        }
        if (sorteioBotao == 3) {
            botao1.innerHTML =  extra1
            botao2.innerHTML = extra2
            botao3.innerHTML = extra3
            botao4.innerHTML = resultado;
            botao4.value = resultado
    
        }
        pontuacao.innerHTML = pontos
    }
    if(selecionar_dificuldade==3){
        sorteioBotao= parseInt(Math.random()*3)
        numOperador = parseInt(Math.random()*4)
        if (numOperador == 0) {
            n1= parseInt(Math.random()*100 - 1)
            n2= parseInt(Math.random()*100 - 1)
            resultado = n1+n2
            contaTexto = n1+"+"+n2
            conta.innerText = contaTexto;
            extra1 = n1+n2+3
            extra2 = n1-n2+n1+4
            extra3 = n2-n1+n2+1
        }
        if (numOperador == 1) {
            n1= parseInt(Math.random()*100 - 1)
            n2= parseInt(Math.random()*100 - 1)
            resultado = n1-n2
            contaTexto = n1+"-"+n2
            conta.innerHTML = contaTexto;
            extra1 = n1+n1+3
            extra2 = n1-n2+n1+4
            extra3 = n2-n1+n2+1
        }
        if (numOperador == 2) {
            n1= parseInt(Math.random()*20 )
            n2= parseInt(Math.random()*20 )
            resultado = n1*n2
            contaTexto = n1+"x"+n2
            conta.innerHTML = contaTexto;
            extra1 = n1*n1+3
            extra2 = n2+n1*4
            extra3 = n2+n1+n2+1
        }
        if (numOperador == 3) {
            n1= parseInt(1+(Math.random()*20))
            n2= parseInt(1+(Math.random()*20))
            resultado = (n1/n2).toFixed(1)
            contaTexto = n1+"รท"+n2
            conta.innerHTML = contaTexto;
            extra1 = (n1/3).toFixed(1)
            extra2 = (n2/2).toFixed(1)
            extra3 = (n1+n2/7).toFixed(1)
        }
        if (sorteioBotao == 0) {
            botao1.innerHTML = resultado; 
            botao2.innerHTML = extra1
            botao3.innerHTML = extra2
            botao4.innerHTML = extra3
            botao1.value = resultado
        }
        if (sorteioBotao == 1) {
            botao1.innerHTML =  extra1
            botao2.innerHTML = resultado;
            botao3.innerHTML = extra2
            botao4.innerHTML = extra3
            botao2.value = resultado
    
        }
        if (sorteioBotao == 2) {
            botao1.innerHTML =  extra1
            botao2.innerHTML = extra2
            botao3.innerHTML = resultado;
            botao4.innerHTML = extra3
            botao3.value = resultado
    
        }
        if (sorteioBotao == 3) {
            botao1.innerHTML =  extra1
            botao2.innerHTML = extra2
            botao3.innerHTML = extra3
            botao4.innerHTML = resultado;
            botao4.value = resultado
    
        }
        pontuacao.innerHTML = pontos 
    }
}
function clickBotao1() {
    if (botao1.value == resultado) {
        if(selecionar_dificuldade == 1){
        pontos+=50
        }
        if(selecionar_dificuldade == 2){
            pontos+=100
        }
        if(selecionar_dificuldade == 3){
            pontos+=150
        }
        logica()
        
    }
    else{
        window.location.href="fim de jogo.html"
        jogador[jogador.length-1].pontuacao = pontos
        localStorage.setItem('jogador',JSON.stringify(jogador))
    }
}
function clickBotao2() {
    if (botao2.value == resultado) {
        if(selecionar_dificuldade == 1){
            pontos+=50
            }
            if(selecionar_dificuldade == 2){
                pontos+=100
            }
            if(selecionar_dificuldade == 3){
                pontos+=150
            }
        logica()
    }
    else{
        window.location.href="fim de jogo.html"
        
        jogador[jogador.length-1].pontuacao = pontos
        localStorage.setItem('jogador',JSON.stringify(jogador))
    }
}
function clickBotao3() {
    if (botao3.value == resultado) {
        if(selecionar_dificuldade == 1){
            pontos+=50
            }
            if(selecionar_dificuldade == 2){
                pontos+=100
            }
            if(selecionar_dificuldade == 3){
                pontos+=150
            }
        logica()
        
    }
    else{
        window.location.href="fim de jogo.html"
        
        jogador[jogador.length-1].pontuacao = pontos
        localStorage.setItem('jogador',JSON.stringify(jogador))
    }
}
function clickBotao4() {
    if (botao4.value == resultado) {
        if(selecionar_dificuldade == 1){
            pontos+=50
            }
            if(selecionar_dificuldade == 2){
                pontos+=100
            }
            if(selecionar_dificuldade == 3){
                pontos+=150
            }
        logica()
        
    }
    else{
        window.location.href="fim de jogo.html"
        
        jogador[jogador.length-1].pontuacao = pontos
        localStorage.setItem('jogador',JSON.stringify(jogador))
    }
}
function start() {
    if (count > 0){
       count -= 1;
       tempoTotal = minutos+":"+count
       if(count < 10 && count >=0){
           tempoTotal = minutos+":0"+count
       }
       if (count == 0) {
           minutos -= 1
           count = 60
       }
       if (minutos == -1) {
           tempoTotal = "O Tempo Acabou"
           jogador[jogador.length-1].pontuacao = pontos
           localStorage.setItem('jogador',JSON.stringify(jogador))
           window.location.href="fim de jogo.html"
        
       }
       tempo.innerHTML = tempoTotal;
       setTimeout(start, 1000); 
   }
}
function pontosF(){
    jogador = JSON.parse(localStorage.getItem("jogador"))
    pontos_finais.innerHTML = jogador[jogador.length-1].pontuacao
}
function ranking() {
    jogadores = jogador = JSON.parse(localStorage.getItem("jogador"))
    var tabela = document.getElementById("tabela")
      
    jogadores.sort(ordenarPorPontos);
    jogadores.reverse();

    for(var i=0; i<10; i++){
        var tr = document.createElement("tr")
        tr.setAttribute("class", "tr_1")

        var th = document.createElement("th")
        th.innerHTML = (i+1)+"ยบ"
        tr.appendChild(th);
        th.setAttribute("class", "td_1")

        var tdNome = document.createElement("td")
        tdNome.innerHTML = jogadores[i].nome
        tr.appendChild(tdNome);
        tdNome.setAttribute("class", "td_2")

        var tdPontuacao = document.createElement("td")
        tdPontuacao.innerHTML = jogadores[i].pontuacao
        tr.appendChild(tdPontuacao);
        tdPontuacao.setAttribute("class", "td_4")
        tabela.appendChild(tr)

        var tdNivel = document.createElement("td")
        tdNivel.innerHTML = jogadores[i].nivel
        tr.appendChild(tdNivel);
        tdNivel.setAttribute("class", "td_3")

        var tdTurma = document.createElement("td")
        tdTurma.innerHTML = jogadores[i].turma
        tr.appendChild(tdTurma);
        tdTurma.setAttribute("class", "td_3")
    }

    function ordenarPorPontos(a, b){
        return a.pontuacao - b.pontuacao;
    } 
    
}
function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
        document.getElementById(el).style.display = 'block';
    if(display == "block")
        document.getElementById(el).style.display = 'none';
}
function start2() {
    if (cont < 8){
       cont += 1;
    }
    if (cont == 5) {
        Mudarestado('minhaDiv')
    }
    setTimeout(start2, 1000);
}
   