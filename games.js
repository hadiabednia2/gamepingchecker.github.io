const gaugeElement = document.querySelector(".gauge");
const startPingBtn = document.getElementById('startPingBtn')
const pingNum = document.querySelector(".gauge__cover")
const pingBar = document.querySelector('.gauge__fill')
const choseServerBtn= document.querySelector('#choseServer')
const serverListModal = document.querySelector('.ServerListModal')
const serverBtnContainer = document.querySelector('ul')
 function setGaugeValue(gauge, value){
    if(value>200){
        gauge.querySelector('.gauge__fill').style.background = '#C60634'
        gauge.querySelector(".gauge__fill").style.transform = `rotate(${Math.floor(value / 2.77)}deg)`;
        gauge.querySelector(".gauge__cover").style.color = '#C60634'
    }else if(value<200 && value > 150){
        gauge.querySelector('.gauge__fill').style.background = '#e55039'
        gauge.querySelector(".gauge__fill").style.transform = `rotate(${Math.floor(value / 2.77)}deg)`;
        gauge.querySelector(".gauge__cover").style.color = '#e55039'
    }else if(value <150 && value >100){
        gauge.querySelector('.gauge__fill').style.background = '#A3CB38'
        gauge.querySelector(".gauge__fill").style.transform = `rotate(${Math.floor(value / 2.77)}deg)`;
        gauge.querySelector(".gauge__cover").style.color = '#A3CB38'
    }else if(value < 100 && value > 80 ){
        gauge.querySelector('.gauge__fill').style.background = '#1B9946'
        gauge.querySelector(".gauge__fill").style.transform = `rotate(${Math.floor(value / 2.77)}deg)`;
        gauge.querySelector(".gauge__cover").style.color = '#1B9946'
    }else if( value < 80){
        gauge.querySelector('.gauge__fill').style.background = '#016422'
        gauge.querySelector(".gauge__fill").style.transform = `rotate(${Math.floor(value / 2.77)}deg)`;
        gauge.querySelector(".gauge__cover").style.color = '#016422'
    }
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value
    )}`;
}
let IsPinging = false
let pingId ;
let IsServerSelected = false
function startPing(){
   if(!IsPinging){
    pingId = setInterval(function(){
        let ping  = Math.floor(Math.random()*500)
        setGaugeValue(gaugeElement,ping);
    },2000)
    IsPinging = true
   }else{
    clearInterval(pingId)
    IsPinging = false
    pingBar.style.transform = `rotate(0)`;
    pingNum.style.color = '#fff'
    pingNum.textContent = ''
   }
}
function showServerLists(){
    if(!IsServerSelected){
        serverListModal.style.height = '75%'
        serverBtnContainer.style.display = 'flex'
        IsServerSelected = true
    }else{
        serverListModal.style.height = '0'
        serverBtnContainer.style.display = 'none'
        IsServerSelected = false
    }

}
choseServerBtn.addEventListener('click',showServerLists)
startPingBtn.addEventListener('click',startPing)
