
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

const tabList = document.querySelectorAll('.tab_menu .list li');
for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('mouseover', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}