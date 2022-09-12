const bahrainPingBtn = document.getElementById('bahrain')
const germanPingBth = document.getElementById('euCenteral')
const euWestpingBtn = document.getElementById('euWest')
const euSouthpingBtn = document.getElementById('euSouth')
const londonpingBtn = document.getElementById('london')
const showPing = document.querySelector('p')

function bahrainPingTest(){
  setInterval(function(){
    pingTest('GET','https://dynamodb.me-south-1.amazonaws.com')
        
    },1000)
}
function germanPingTets(){
  setInterval(function(){
    pingTest('GET','https://dynamodb.eu-central-1.amazonaws.com')
        
    },1000)
}
function euWestPingTets(){
  setInterval(function(){
    pingTest('GET','https://dynamodb.eu-west-1.amazonaws.com')
        
    },1000)
}
function euSouthPingTets(){
  setInterval(function(){
    pingTest('GET','https://dynamodb.eu-south-1.amazonaws.com')
        
    },1000)
}
function londonPingTets(){
  setInterval(function(){
    pingTest('GET','https://dynamodb.eu-west-2.amazonaws.com')
        
    },1000)
}

function pingTest(method,url){
  let xhttp = new XMLHttpRequest()
  xhttp.open(method,url)
  let clickDate = new Date().getTime()
  xhttp.onload = function(){
      let responeTime = new Date().getTime()
      let pingRes = (responeTime - clickDate) - 20
      showPing.innerHTML = pingRes
  }
  xhttp.send()
}
bahrainPingBtn.addEventListener('click',bahrainPingTest)
germanPingBth.addEventListener('click',germanPingTets)    
germanPingBth.addEventListener('click',euWestPingTets)    
germanPingBth.addEventListener('click',euSouthPingTets)    
germanPingBth.addEventListener('click',londonPingTets)   
 