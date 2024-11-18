let minTag=document.getElementById('min');
let secTag=document.getElementById('sec');
let msecTag=document.getElementById('msec');
let stBtn=document.getElementById('start');
let spBtn=document.getElementById('stop');
let resetBtn=document.getElementById('reset');

let minutes=15;
let seconds=60;
let milliseconds=1000;
let flag=true;

function timer(){
    milliseconds-=10;
    if (milliseconds==0){
        seconds-=1
        milliseconds=1000
        if(seconds==0){
            minutes-=1
            seconds=60
        }
    }
    minTag.textContent=concatZero(minutes);
    secTag.textContent=concatZero(seconds);
    msecTag.textContent=concatZero(milliseconds);
}


let interval=null;
stBtn.addEventListener('click',function(){
    if(flag){
       interval=setInterval(timer,10)
       flag=false
    }
})

spBtn.addEventListener('click',function(){
    if(!flag){
        clearInterval(interval)
        flag=true
    } 
})

resetBtn.addEventListener('click',function(){
    if(flag){
        clearInterval(interval)
        flag=true
        minTag.textContent='15'
        secTag.textContent='60'
        msecTag.textContent='1000'

        milliseconds=0
        seconds=0
        minutes=0
    }
})

function concatZero(time){
    if(time<=9) return '0'+time;
    else return time
}
