let menutoggle = document.querySelector('.menutoggle');
let menu = document.querySelector('.menu');

menutoggle.onclick = function(){
    menu.classList.toggle('active');
}