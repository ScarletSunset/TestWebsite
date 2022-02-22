    // text 
let dv = document.querySelectorAll('.blok2__big2__dev');
let tx = document.querySelectorAll('.dev__txt1');

for(let i = 0; i<dv.length;i++){
dv[i].onmouseover = function(){
    tx[i].setAttribute('style','color:white;transition:0.5s;')
    }
    dv[i].onmouseout = function(){
        tx[i].setAttribute('style','color:#478AC9;transition:0.5s;')
        }
}

// scroll

let home = document.querySelector('.menu__home');
let about = document.querySelector('.menu__about');
let contact = document.querySelector('.menu__contact');

// scroll
home.onclick = function() {
    let i = 0;
  let int = setInterval(function() {
    window.scrollTo(0, i);
    i += 4;
    if (i >= 63) clearInterval(int);
  }, 20);
}

about.onclick = function() {
    let i = 0;
  let int = setInterval(function() {
    window.scrollTo(0, i);
    i += 40;
    if (i >= 2400) clearInterval(int);
  }, 20);
}
contact.onclick = function() {
    let i = 0;
  let int = setInterval(function() {
    window.scrollTo(0, i);
    i += 100;
    if (i >= 5000) clearInterval(int);
  }, 20);
}
// bigger
let nkarner = document.querySelectorAll('.blok8__img');
let diver = document.querySelectorAll('.blok8__big2__portfolio')

for(let k = 0 ; k<nkarner.length;k++){
    nkarner[k].onmouseover = function(){
        diver[k].setAttribute('style','width:35%;height:50%;transition:0.2s;')
    }
    nkarner[k].onmouseout = function () {
        diver[k].setAttribute('style','width:30%;height:45%;transition:0.4s;delay:2s;')
    }
}
