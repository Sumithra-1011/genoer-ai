window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
// video scrolling
function videoScroll() {

  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}
// owl carousel
$('.owl-carousel').owlCarousel({
  autoplay: true,
  loop:true,
  margin:50,
  smartSpeed: 1000,
  center: true,
  dots:true,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      992:{
          items:1
      },
      1000:{
          items:3,
      },
  }
})
// change the dollar month and year
let btn_month = document.getElementById('month')
let btn_year = document.getElementById('year')
let my_dollarOne = document.getElementById('dollarOne')
let my_dollarTwo = document.getElementById('dollarTwo')
let my_dollarThree = document.getElementById('dollarThree')
let futureheading_id = document.getElementById('futureheading')
let vision_id = document.getElementById('vision')
let futurepara_id = document.getElementById('futurepara')
let filechat_id = document.getElementById('filechat')
let visi = vision_id.innerText
let file = filechat_id.innerText
console.log(file)

btn_year.addEventListener("click",myFunctionyear)
btn_month.addEventListener("click",myFunctionmonth)
// vision_id.addEventListener("click",functionHeating)
// filechat_id.addEventListener("click",functionHeating)

function myFunctionyear(){
  my_dollarOne.innerHTML = '$10'
  my_dollarTwo.innerHTML = '$12'
  my_dollarThree.innerHTML = '$15'
}
function myFunctionmonth(){
  my_dollarOne.innerHTML = '$8'
  my_dollarTwo.innerHTML = '$10'
  my_dollarThree.innerHTML = '$13'
}
let hi='good win'
let hii='win'
function Hello(){
  if(hi='good wi'){
    console.log('goo')
  }
  else{
    console.log('not good')
  }
}
Hello()
// function functionHeating(){
//   if( visi='AI Vision'){
//     futureheading_id.innerHTML='Transform Images into Insightful Conversations'
//     futurepara_id.innerHTML= 'Transform images into insightful conversations. Upload any image and receive detailed, contextual information and analyses to enhance your understanding and decision-making.'
//     console.log('hi')
//   }
//   else if (file='AI File Chat') {
//     futureheading_id.innerHTML='Transform Images into Insightful Conversationsssss'
//     futurepara_id.innerHTML= 'Transform images into insightful conversations. Upload any image and receive detailed, contextual information and analyses to enhance your understanding and decision-making......'
//     console.log('hihih')

    
//   } else {
//     futureheading_id.innerHTML='notfount'
//     futurepara_id.innerHTML= 'Transform images into insightful conversations. Upload any image and receive detailed, contextual information and analyses to enhance your understanding and decision-making.'
    
//   }
// }