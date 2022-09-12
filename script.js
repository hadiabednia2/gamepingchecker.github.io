const pingBtn = document.querySelector('button')
  const showPing = document.querySelector('p')
    setInterval(function(){
      let xhttp = new XMLHttpRequest()
      xhttp.open('GET','https://dynamodb.me-south-1.amazonaws.com')
      let clickDate = new Date().getTime()
      xhttp.onload = function(){
          let responeTime = new Date().getTime()
          let pingRes = (responeTime - clickDate) - 20
          showPing.innerHTML = pingRes
          console.log(pingRes);
      }
      xhttp.send()
          
      },1000)
