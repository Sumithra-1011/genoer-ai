window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

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
  margin:0,
  dots: false,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})