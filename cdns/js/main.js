// content 1 style margin top the size of navbox height
(()=>{
    let navHeight = document.querySelector('.navBox').clientHeight;
    document.querySelector('.content1').style.cssText = `margin-top: ${navHeight}px`;
})();




// Js Events
(()=>{

// Magenetic Button
let mgBtn = document.getElementsByClassName('mgBtn');
for(let i=0; i<mgBtn.length; i++){
    mgBtn[i].style.cssText = 'transition: transform 0.2s;';
    mgBtn[i].addEventListener('mousemove',function(e){
        mgBtn[i].style.cssText += 'z-index:1; position: relative';
        let y = e.offsetY;
        let x = e.offsetX;
        let btnWidth = mgBtn[i].clientWidth;
        let btnHeight = mgBtn[i].clientHeight;
        var transY = (y - btnHeight/2);
        var transX = (x - btnWidth/2);
        mgBtn[i].style.transform = `translateX(${transX}px) translateY(${transY}px)`; 
    });
    mgBtn[i].addEventListener('mouseout',function(){
        mgBtn[i].style.transform = "";
        mgBtn[i].style.cssText = 'transition: transform 0.2s;';
    })
};



// Projects Urls
let webCoSite = document.getElementById('webCoSite');
let snakeSite = document.getElementById('snakeSite');
let youtubeSite = document.getElementById('youtubeSite');
let glassSite = document.getElementById('glassSite');

webCoSite.addEventListener('click',function(){
    let webcoUrl = "https://dakshdev.github.io/Webco/";
    window.open(webcoUrl)
});
snakeSite.addEventListener('click',function(){
    let snakeUrl = "https://dakshdev.github.io/SnakeGame/";
    window.open(snakeUrl)
});
youtubeSite.addEventListener('click',function(){
    let watchUrl = "https://dakshdev.github.io/YT-Watchtime/";
    window.open(watchUrl)
});
glassSite.addEventListener('click',function(){
    let glassUrl = "https://dakshdev.github.io/Custom-Glass-Maker/";
    window.open(glassUrl)
});



// Mobile Nav
let barBtn = document.getElementById('mobileNavBtn');
let mobileNav = document.querySelector('.mobileNav');

barBtn.addEventListener('click',function(e){
    e.stopPropagation();
    let top = 100;
    let height = "250px";
    mobileNav.style.overflow = 'hidden';
    if(mobileNav.style.height == height && mobileNav.style.top == top+'px'){
        mobileNav.style.height = '0px';
        setTimeout(() => {
            mobileNav.style.top = '-100%';
        }, 150);
    }else{
        mobileNav.style.top = top+'px';
        setTimeout(() => {
            mobileNav.style.height = '250px';
        }, 150);
        document.body.addEventListener('click',function bodyFun(){
            mobileNav.style.height = '0px';
            setTimeout(() => {
                mobileNav.style.top = '-100%';
            }, 150);
        });
        mobileNav.addEventListener('click',function mobileNavFun(g){
            g.stopPropagation();
        });
    }
});



// Hire me
let hireMe = document.getElementsByClassName('hireMe');
for(let h=0; h<hireMe.length; h++){
    hireMe[h].addEventListener('click',function(){
        window.open('https://forms.gle/xKjx7ScbbNhftXaJA','_blank');
    });
}

})();



// Form
(()=>{
// form 
const nameInp = document.getElementById('name');
const emailInp = document.getElementById('email');
const messageInp = document.getElementById('message');
const submitInp = document.getElementById('submit');
submitInp.addEventListener('click',function(e){
    if(nameInp.value.length==0){
        nameInp.previousElementSibling.style.color = '#e74c3c';
        e.preventDefault();
    }
    else if(emailInp.value.length==0){
        emailInp.previousElementSibling.style.color = '#e74c3c';
        e.preventDefault();
    }
    else if(messageInp.value.length==0){
        messageInp.previousElementSibling.style.color = '#e74c3c';
        e.preventDefault();
    }
});
})();




// Styling
(()=>{
// Loader
let loadBox = document.getElementById('loaderBox');
window.addEventListener('DOMContentLoaded',function(){
    gsapFun();
    loadBox.style.display = 'none';
});



// Change img when mobile size
let img1 = document.querySelector('.aboutMe > div:nth-child(1) > img');
if(window.innerWidth <= 768){
    if(img1.getAttribute('src') == 'cdns/img/pic.webp'){
        img1.src = 'cdns/img/pic2.webp';
    }
}else{
    if(img1.getAttribute('src') == 'cdns/img/pic2.webp'){
        img1.src = 'cdns/img/pic.webp';
    }
}

window.addEventListener('resize',()=>{
    if(window.innerWidth <= 768){
        if(img1.getAttribute('src') == 'cdns/img/pic.webp'){
            img1.src = 'cdns/img/pic2.webp';
        }
    }else{
        if(img1.getAttribute('src') == 'cdns/img/pic2.webp'){
            img1.src = 'cdns/img/pic.webp';
        }
    }
});



// Top Bar
let topBox = document.getElementById('top');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset >= 50) {
     topBox.style.bottom = '10px';
     topBox.style.opacity = '1';
    }else{
     topBox.style.bottom = '-100px';
     topBox.style.opacity = '0';
    }
});


})();



// SKills Box
(()=>{

    var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function(skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";
  
  var animatedValue = 0; 
  var startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
    
    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }
  
  requestAnimationFrame(animate);
});


})()