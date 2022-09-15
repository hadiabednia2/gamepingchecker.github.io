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

const navbarBox = document.querySelector('.items')
const opnMenuBtn = document.querySelector('.fa-bars')
const closeMenuBtn = document.querySelector('.fa-xmark')
const gameListContainer = document.querySelector('.gameLists')
let gameListArray = [{
  id:1,name:'league of legends',img:'./gameimg/leagueOfLegends.jpg',alt:'leagueOfLenegds'},
  {id:2,name:'valorant',img:'./gameimg/valorant.jpg',alt:'valorant'},
  {id:3,name:'dota2',img:'./gameimg/dota2.jpg',alt:'dota2'},
  {id:4,name:'csgo',img:'./gameimg/csgo.jpg',alt:'csgo'},
  {id:5,name:'pubg mobile',img:'./gameimg/pubgmobile.jpg',alt:'pubgmobile'},
  {id:6,name:'warzone',img:'./gameimg/warzone.jpg',alt:'warzone'},
  {id:7,name:'apex legends',img:'./gameimg/apexlegends.jpg',alt:'apexlegends'},
  {id:8,name:'fortnite',img:'./gameimg/fortnite.jpg',alt:'fortnite'},
  {id:9,name:'world of warcraft',img:'./gameimg/wow.jpg',alt:'world of craft'},
  {id:10,name:'pubg',img:'./gameimg/pubg.jpg',alt:'pubg'},
  {id:11,name:'apex Legends Mobile',img:'./gameimg/apexMobile.jpg',alt:'apex Legends Mobile'},
  {id:12,name:'overwatch',img:'./gameimg/overwatch.jpg',alt:'overwatch'},
  {id:13,name:'rainbow six',img:'./gameimg/rainbow.jpg',alt:'rainbow'},
  {id:14,name:'clash Royal',img:'./gameimg/clashRoyal.jpeg',alt:'clashRoyal'},
  {id:15,name:'call of mobile',img:'./gameimg/callofmobile.jpg',alt:'call of mobile'},
  {id:16,name:'mobile legends',img:'./gameimg/mobilelegends.png',alt:'mobile legends'},]
console.log(opnMenuBtn);
function openMenu(){
  console.log('hello');
  navbarBox.style.display = 'block'
}
function closeMenu(){

  navbarBox.style.display = 'none'
}
opnMenuBtn.addEventListener('click',openMenu)
closeMenuBtn.addEventListener('click',closeMenu)
window.addEventListener('resize',function(){
  if(window.innerWidth > 408){
    navbarBox.style.display = 'none'
  }
})
gameListArray.forEach(function(game){
  gameListContainer.insertAdjacentHTML('beforeend','<div class="games"><div class="imgContainer"><img src="'+game.img+'" alt="'+game.alt+'"></div><div class="desc"><p>See '+game.name+' ping</p></div></div>')
})

