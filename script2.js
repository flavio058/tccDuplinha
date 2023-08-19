console.log("index 2")
let cronos2 = ()=>{
    localStorage.setItem("time", 0)
    setInterval(()=>{
        let timeLocal = parseInt(localStorage.getItem("time")) + 1;
        localStorage.setItem("time", 0);
        localStorage.setItem("time", timeLocal);
        let timer = document.querySelector(".timer");
        timer.innerText = `${timeLocal}`;
        console.log(timeLocal, "TimeLocal")
        if(timeLocal >= 200){
            window.location.href = "./index3.html";
        };

    },50)
}



cronos2();

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

    }
}, 10);

document.addEventListener('keydown', jump)