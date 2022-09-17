const gaugeElement = document.querySelector(".gauge");
const startPingBtn = document.getElementById('startPingBtn')
const pingNum = document.querySelector(".gauge__cover")
const pingBar = document.querySelector('.gauge__fill')
const choseServerBtn= document.querySelector('#choseServer')
const serverListModal = document.querySelector('.ServerListModal')
const serverBtnContainer = document.querySelector('ul')
const gameName  = document.getElementById('gameName')
const gameBackground = document.querySelector('.wrapper')
const minPingElem = document.getElementById('MinPing')
const maxPingElem = document.getElementById('MaxPing')
const serverBtns = document.querySelectorAll('.serversBtns')
const serverNameElem = document.getElementById('serverName')
let curentServer ;
let IsPinging = false
let pingId ;
let IsServerSelected = false
let gameListArray = [{
    id:1,name:'league of legends',img:'./gameimg/leagueOfLegends.jpg',alt:'leagueOfLenegds'},
    {id:2,name:'valorant',img:'./gameimg/valorant.jpg',alt:'valorant'},
    {id:3,name:'dota2',img:'./gameimg/dota2.jpg',alt:'dota2'},
    {id:4,name:'csgo',img:'./gameimg/csgo.jpg',alt:'csgo'},
    {id:5,name:'pubg mobile',img:'./gameimg/pubgmobile.jpg',alt:'pubgmobile'},
    {id:6,name:'Call of duty warzone',img:'./gameimg/warzone.jpg',alt:'warzone'},
    {id:7,name:'apex legends',img:'./gameimg/apexlegends.jpg',alt:'apexlegends'},
    {id:8,name:'fortnite',img:'./gameimg/fortnite.jpg',alt:'fortnite'},
    {id:9,name:'world of warcraft',img:'./gameimg/wow.jpg',alt:'world of craft'},
    {id:10,name:'Player unknown battlegrounds',img:'./gameimg/pubg.jpg',alt:'pubg'},
    {id:11,name:'apex Legends Mobile',img:'./gameimg/apexMobile.jpg',alt:'apex Legends Mobile'},
    {id:12,name:'overwatch',img:'./gameimg/overwatch.jpg',alt:'overwatch'},
    {id:13,name:'rainbow six',img:'./gameimg/rainbow.jpg',alt:'rainbow'},
    {id:14,name:'clash Royal',img:'./gameimg/clashRoyal.jpeg',alt:'clashRoyal'},
    {id:15,name:'call of mobile',img:'./gameimg/callofmobile.jpg',alt:'call of mobile'},
    {id:16,name:'mobile legends',img:'./gameimg/mobilelegends.png',alt:'mobile legends'},]
let serverData = []
let averagePing = []
let searchLocation = location.search
let searchParam = new URLSearchParams(searchLocation)
let gameIdParam = searchParam.get('id')
let game = gameListArray.filter(function(game){
    return game.id == gameIdParam
})
game.forEach(function(game){
    gameName.innerHTML = game.name
    gameBackground.style.background = 'url('+game.img+') center/cover';
    gameBackground.style.backgroundColor = '#436293';
    gameBackground.style.backgroundBlendMode = 'multiply';

})

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
    gauge.querySelector(".gauge__cover").textContent = `${value}`;
}
function startPing(){
   if(!IsPinging){
    pingNum.innerHTML = 'starting...'
    pingNum.style.color = '#b4c0be'
    let curentServerData =  serverData.find(function(server){
        return server.id == curentServer
    })
    if(!curentServerData){
        choseServerBtn.innerHTML = 'select server!'
        choseServerBtn.style.color = 'red'
    }
    let curentServerMethod = curentServerData.method
    let curentServerUrl = curentServerData.url
   let ping = 0;
   let start = 0
    pingId = setInterval(function(){

        let xhttp = new XMLHttpRequest()
        xhttp.open(curentServerMethod,curentServerUrl)
        let clickDate = new Date().getTime()
        xhttp.onload = function(){
            let responeTime = new Date().getTime()
            let pingRes = (responeTime - clickDate) - 20
            ping = pingRes
            start++
            if(start > 2){
                averagePing.push(pingRes)
                if(pingRes>500){
                    setGaugeValue(gaugeElement,ping);
                    pingBar.style.transform ='rotate('+(180)+'deg)'
                    pingNum.innerHTML =pingRes
                }else{
                    setGaugeValue(gaugeElement,ping);
                    pingBar.style.transform ='rotate('+(Math.floor(pingRes / 2.77))+'deg)'
                }
            }
        }
        xhttp.send()

    },1500)
    startPingBtn.innerHTML = 'Stop'
    maxPingElem.innerHTML = '0'
    minPingElem.innerHTML = '0'
    IsPinging = true
   }else{
    clearInterval(pingId)
    IsPinging = false
    pingBar.style.transform = `rotate(0)`;
    pingNum.style.color = '#fff'
    pingNum.textContent = ''
    let minPing = Math.min(...averagePing);
    let maxPing =  Math.max(...averagePing);
    checkPing(minPing,maxPing)
    minPingElem.innerHTML = minPing;
    maxPingElem.innerHTML = maxPing;
    startPingBtn.innerHTML = 'Start Test'
   }
}
function checkPing(minPing,maxPing){
    if(minPing<50){
        minPingElem.style.color = '#016422'
    }if(maxPing<50){
        maxPingElem.style.color = '#016422'
    }if(minPing>50 && minPing<100){
        minPingElem.style.color = '#1B9946'
    }if(maxPing>50 && maxPing<100){
        maxPingElem.style.color = '#1B9946'
    }if(maxPing>200){
        maxPingElem.style.color = '#C60634'
    }if(minPing > 200){
        minPingElem.style.color = '#C60634'
    }if(minPing>100 && minPing<150){
        minPingElem.style.color = '#A3CB38'
    }if(maxPing>100 && maxPing<150){
        maxPingElem.style.color = '#A3CB38'
    }if(maxPing<200 && maxPing > 150){
        maxPingElem.style.color = '#e55039'
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
serverBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
        serverNameElem.innerHTML = btn.firstChild.innerHTML
        serverListModal.style.height = '0'
        serverBtnContainer.style.display = 'none'
        choseServerBtn.innerHTML = btn.firstChild.innerHTML
        choseServerBtn.style = '#fff'
        IsServerSelected = false
        curentServer = btn.dataset.id
        let server ={
            id:curentServer,
            name:btn.firstChild.innerHTML,
            method:'',
            url:''
        }
        if (curentServer == 1){
            server.url = 'https://dynamodb.us-east-1.amazonaws.com'
            serverData.push(server)
            server.method = 'GET'
        }
        else if (curentServer == 2){
            server.url = 'https://dynamodb.us-west-1.amazonaws.com'
            serverData.push(server)
            server.method = 'GET'
        }
        else if (curentServer == 3){
            server.url = 'https://dynamodb.eu-west-1.amazonaws.com'
            serverData.push(server)
            server.method = 'GET'
        }
        else if (curentServer == 4){
            server.url = 'https://dynamodb.eu-central-1.amazonaws.com'
            serverData.push(server)
            server.method = 'GET'

        }
        else if(curentServer == 5){
            server.method = 'GET'
            server.url = 'https://dynamodb.me-south-1.amazonaws.com'
            serverData.push(server)
        }
    })
})
choseServerBtn.addEventListener('click',showServerLists)
startPingBtn.addEventListener('click',startPing)

