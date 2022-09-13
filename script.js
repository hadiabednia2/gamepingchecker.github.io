// const bahrainPingBtn = document.getElementById('bahrain')
// const germanPingBth = document.getElementById('euCenteral')
// const euWestpingBtn = document.getElementById('euWest')
// const euSouthpingBtn = document.getElementById('euSouth')
// const londonpingBtn = document.getElementById('london')
// const showPing = document.querySelector('p')
// let intervalID ;
// function bahrainPingTest(){
//   clearInterval(intervalID)
//   intervalID = setInterval(function(){
//     pingTest('GET','https://dynamodb.me-south-1.amazonaws.com','bahrain Ping: ')
        
//     },1000)
// }
// function germanPingTets(){
//   clearInterval(intervalID)
//   intervalID = setInterval(function(){
//     pingTest('GET','https://dynamodb.eu-central-1.amazonaws.com','euCentral Ping:')
    
//   },1000)
// }
// function euWestPingTets(){
//   clearInterval(intervalID)
//   intervalID = setInterval(function(){
//     pingTest('GET','https://dynamodb.eu-west-1.amazonaws.com','euWest Ping: ')
    
//   },1000)
// }
// function euSouthPingTets(){
//   clearInterval(intervalID)
//   intervalID = setInterval(function(){
//     pingTest('GET','https://dynamodb.eu-south-1.amazonaws.com','euSouth Ping: ')
    
//   },1000)
// }
// function londonPingTets(){
//   clearInterval(intervalID)
//   intervalID = setInterval(function(){
//     pingTest('GET','https://dynamodb.eu-west-2.amazonaws.com','euWest2 Ping: ')
    
//   },1000)
// }

// function pingTest(method,url,serverName){
//   let xhttp = new XMLHttpRequest()
//   xhttp.open(method,url)
//   let clickDate = new Date().getTime()
//   xhttp.onload = function(){
//       let responeTime = new Date().getTime()
//       let pingRes = (responeTime - clickDate) - 20
//       showPing.innerHTML = `${serverName}`+pingRes
//   }
//   xhttp.send()
// }
// bahrainPingBtn.addEventListener('click',bahrainPingTest)
// germanPingBth.addEventListener('click',germanPingTets)    
// euWestpingBtn.addEventListener('click',euWestPingTets)    
// euSouthpingBtn.addEventListener('click',euSouthPingTets)    
// londonpingBtn.addEventListener('click',londonPingTets)   
window.addEventListener('resize',function(){
  console.log('resize');
})