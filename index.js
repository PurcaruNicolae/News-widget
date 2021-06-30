let body = document.querySelector('.body');

 fetch('http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8')
 .then(response => response.json())
 .then(data => {
   console.log(data.news);
   for(var i=0; i<=4;i++){
     body.innerHTML += `
     <h3>  ${data.news[i].title}</h3>
     <p>  ${data.news[i].details}</p>
     <br>`
   }
 });

 let dot1 = document.querySelector('.dot1');
 let firstPage = function(){
   fetch('http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8')
   .then(response => response.json())
   .then(data => {
     console.log(data.news);
       body.innerHTML = ``
     for(var i=0; i<=4;i++){
       body.innerHTML += `
       <h3>  ${data.news[i].title}</h3>
       <p>  ${data.news[i].details}</p>
       <br>`
     }
   });
 }
 dot1.addEventListener('click',firstPage);


let dot2 = document.querySelector('.dot2');
let secondPage = function(){
  fetch('http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8')
  .then(response => response.json())
  .then(data => {
    console.log(data.news);
      body.innerHTML = ``
    for(var i=5; i<=9;i++){
      body.innerHTML += `
      <h3>  ${data.news[i].title}</h3>
      <p>  ${data.news[i].details}</p>
      <br>`
    }
  });
}
dot2.addEventListener('click',secondPage);


let dot3 = document.querySelector('.dot3');
let thirdPage = function(){
  fetch('http://www.mocky.io/v2/58fda6ce0f0000c40908b8c8')
  .then(response => response.json())
  .then(data => {
    console.log(data.news);
      body.innerHTML = ``
    for(var i=10; i<=14;i++){
      body.innerHTML += `
      <h3>  ${data.news[i].title}</h3>
      <p>  ${data.news[i].details}</p>
      <br>`
    }
  });
}
dot3.addEventListener('click',thirdPage);


window.setTimeout(setInterval(secondPage, 15000), 45000);
window.setTimeout(setInterval(thirdPage, 30000), 45000);
window.setTimeout(setInterval(firstPage, 45000), 45000);

// setInterval(window.location.reload(), 2000);
// window.location.reload()
setTimeout(function(){
    location = ''
  },180000)
