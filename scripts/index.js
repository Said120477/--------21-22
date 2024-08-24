const defuser = document.getElementById('defuser-btn');
let explodeId = 0;// идентификатор интервала взрыва


//функция обезвреживания взрыва
defuser.addEventListener('click', ()=>{
    clearInterval(explodeId);//остановка таймера(интервала) взрыва
    defuser.disabled = true;
    console.log('Бомба обезврежена!');
})
/*console.log('3...');

setTimeout(() => {
    console.log('2...');
}, 1000);

setTimeout(() =>{
    console.log('1...');
}, 2000);

const timeoutId = setTimeout(() =>{
    console.log('Boom!');
}, 3000);*/

//запуск таймера бомбы
function explosion(seconds){
    console.log(seconds + '...');
    explodeId = setInterval(() =>{
        seconds--;
        if (seconds <= 0){
            clearInterval(explodeId);//остановка таймера(интервала) взрыва
            console.log('Boom!');
            defuser.disabled = true;
            
        }
        else
            console.log(seconds + '...');
    }, 1000);
}

explosion(5);








