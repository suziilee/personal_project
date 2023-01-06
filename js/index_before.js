// 분리된 header 불러오기
// $(document).ready(function(){

//   document.getElementById("header").innerHTML='<object type="text/html" data="../html/header.html"></object>';

// })


// about HEADER - Motion When header on scroll

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0 10px";
    document.getElementById("header").style.display = "flex";
    document.getElementById("header").style.justifyContent = "center"
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("header").style.display = "";
    document.getElementById("header").style.justifyContent = ""
    document.getElementById("logo").style.fontSize = "35px";
  }
}



// about MAINBANNER - Exchange IMG, When hover the title

let pics=document.getElementsByClassName('pic');
// let originImg=document.querySelector('#originImg');
let container=document.querySelector('#container');


for(i=0; i<pics.length; i++){
    pics[i].addEventListener('onclick',changeImg)
}

function changeImg(){
    let bigImg = this.getAttribute('data-src');
    // originImg.setAttribute('src',bigImg);
    container.style.backgroundImage=`url(${bigImg})`;
}









// var isOvered = false; 
// function mouseOver( changeImgPath ) 
// { 
//    isOvered = true; 
//    document.getElementById("changeImg").src = changeImgPath; 
// } 
// function mouseOver( changeImgPath ) 
// { 
//    if( isOvered == false ) 
//    { document.getElementById("changeImg").src = changeImgPath; } 
// } 



// $("main #bannerImg li a").mouseover(function(){
//   var imgsrc=$(this).find("img").attr("src");
//   imgsrc=imgsrc.replace("");
//   $(this).find("img").attr("src",imgsrc);
// });
// $("main #bannerImg").hover(function(){
//   $(this).attr("src", $(this).attr("src").replace(""), function(){
//     document.getElementById("bannerImg").style.background = "url(../img/211123_thumb.jpg)"
//   });
// }, function(){
//   $(this).attr("src", $(this).attr("src").replace(""));
// });