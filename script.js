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
  gameListContainer.insertAdjacentHTML('beforeend','<div class="games"><div class="imgContainer"><a href = "ping.html?id='+game.id+'"><img src="'+game.img+'" alt="'+game.alt+'"></a></div><div class="desc"><a href ="ping.html?id='+game.id+'">See '+game.name+' ping</a></div></div>')
})
window.onload = function(){
  console.log('stie loaded!');
  viewer++
}
