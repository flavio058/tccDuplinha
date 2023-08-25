let cronos = ()=>{
    localStorage.setItem("time", 0)
    let level = 1
    let distance = 500
    setInterval(()=>{
        let timeLocal = parseInt(localStorage.getItem("time")) + 1;
        localStorage.setItem("time", timeLocal);
        let timer = document.querySelector(".timer");
        timer.innerText = `${timeLocal}`;

        if(timeLocal >= distance){
            level = level + 1;
            if (level == 2){
                distance = 600
            }else if(level == 3){
                distance = 700;
            }
            changeLevel(level);
        };

    },50)
}

let changeLevel = (level)=>{
    localStorage.setItem("time", 0)
    if(level == 2){
        // Mudando o background do level 2
        let gameBoard = document.querySelector(".game-board");
        gameBoard.style.background = "linear-gradient(#FFC222,#F49E12)";
        gameBoard.style.borderBottom = "15px solid #B38105";
        let img = document.createElement("img");
        img.setAttribute("src", "./imagens/Imagem-Sol-Sol-Brilhando-PNG.png");
        img.setAttribute("class", "sol");
        gameBoard.appendChild(img);
        //Excluindo pipe
        let pipe = document.querySelector(".pipe");
        pipe.remove();
        //Criar o pipe
        let newPipe = document.createElement("img");
        newPipe.setAttribute("src", "./imagens/tubo.jpg");
        newPipe.setAttribute("class", "pipe");
        gameBoard.appendChild(newPipe);
        // Mudar a velocidade do level 3 
        pipe.style.animation = `pipe-animation 1.3s infinite linear`
    }else if(level == 3){
        // Mudando o background do level 3 
        let gameBoard = document.querySelector(".game-board");
        gameBoard.style.backgroundImage = "url('./imagens/tela3.jpg')";
        gameBoard.style.backgroundPosition = "center";
        gameBoard.style.backgroundRepeat = "no-repeat";
        gameBoard.style.backgroundSize = "cover";
        gameBoard.style.borderBottom = "15px solid #8080DE";

        // Colocando Lua 
        let img = document.createElement("img");
        img.setAttribute("src", "./imagens/lua2.png");
        img.setAttribute("class", "lua");
        gameBoard.appendChild(img);
        //Removendo sol e nuvens
        let sol = document.querySelector(".sol");
        sol.remove();
        let nuvem = document.querySelector(".clouds");
        nuvem.remove();
        // Mudar a velocidade do level 3 
        let pipe = document.querySelector(".pipe");
        pipe.style.animation = `pipe-animation .8s infinite linear`
        //Mudando cor do timer
        let timer = document.querySelector(".timer");
        timer.style.color = "white"
    }
    else if(level == 4){
        let gameBoard = document.querySelector(".game-board");
        gameBoard.style.display = "flex";
        gameBoard.style.justifyContent = "center";
        gameBoard.style.alignItems = "flex-end";
        let img = document.createElement("img");
        img.setAttribute("src", "./imagens/marioVencendo.gif");
        img.setAttribute("class", "marioVencendo");
        gameBoard.appendChild(img);
        let lua = document.querySelector(".lua");
        lua.style.left = "4%";
        //Criando h1 voce venceu
        let h1 = document.createElement("h1");
        h1.setAttribute("class", "msgVenceu")
        h1.innerText = "Você venceu!"
        gameBoard.appendChild(h1);
        //Limpando a tela 
        let pipe = document.querySelector(".pipe");
        pipe.remove();
        let timer = document.querySelector(".timer");
        timer.remove();
        let marioCorrendo = document.querySelector(".mario");
        marioCorrendo.remove();
    }
}
/*
            <h1 class="msgVenceu">Você venceu!!!</h1>


*/
 let stopCronos = ()=>{
    let timer = document.querySelector(".timer");
    timer.remove()
 }


cronos();

document.addEventListener("keydown", (event)=>{
    if(event.key == "Escape"){
        document.location.reload();
    }
})

const jump =  () => {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
let gameOver = ()=>{
    let gameBoard = document.querySelector(".game-board");
        let img = document.createElement("img");
        img.setAttribute("src", "./imagens/testePNG.png");
        img.setAttribute("class", "gameOver");
        gameBoard.appendChild(img);
}
const loop = setInterval(() => {

    console.log('loop')

    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    const pipePosition = pipe.offsetLeft;
    
    if(pipePosition<= 120 &&pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/mario-perdendo.gif'
        mario.style.whidth = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
        stopCronos()
        gameOver()
    }
}, 10);

document.addEventListener('keydown', jump)