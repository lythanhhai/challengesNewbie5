//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex = 0;
// KHai bào hàm hiển thị slide
function showSlidesNext() {
    var i;
    var slides = document.getElementsByClassName("ava");
    var info = document.getElementsByClassName("infoPeople");
    // var dots = document.getElementsByClassName("dot");
   console.log(info[1]);
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < info.length; i++) {
       info[i].style.display="none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slideIndex++;
    slides[slideIndex].style.display = "block";  
    info[slideIndex].style.display = "block";  
    // dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    // slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex === slides.length - 1) {
      slideIndex = -1;    
    }     
    //tự động chuyển đổi slide sau 5s
    // setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
// showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

const buttonNext = document.getElementById("next1");
buttonNext.addEventListener("click",
showSlidesNext
);

//prev
function showSlidesPrev() {
    var i;
    var slides = document.getElementsByClassName("ava");
    var info = document.getElementsByClassName("infoPeople");
    // var dots = document.getElementsByClassName("dot");
if(slideIndex!==0)
{

  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < info.length; i++) {
    info[i].style.display = "none";  
  }
  if(slideIndex === -1)
  {
    slideIndex = slides.length-1;
  }
  
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }

  slideIndex--;
  slides[slideIndex].style.display = "block";  
  info[slideIndex].style.display = "block"; 
  // dots[slideIndex].className += " active";
  //chuyển đến slide tiếp theo
  // slideIndex++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  // if (slideIndex === 0) {
  //   slideIndex = slides.length;    
  // }     
  

  //tự động chuyển đổi slide sau 5s
  // setTimeout(showSlides, 5000);
}
}
//mặc định hiển thị slide đầu tiên 
// showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

const buttonPrev = document.getElementById("pre1");
// if(slideIndex !== 1)
// {
  buttonPrev.addEventListener("click",
  showSlidesPrev
  );
// }
