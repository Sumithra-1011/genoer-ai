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
let futurepara_id = document.getElementById('futurepara')
let vision_id = document.getElementById('vision')
let youtube_id = document.getElementById('youtube')
let article_id = document.getElementById('article')
let rss_id = document.getElementById('rss')
let brand_id = document.getElementById('brand')
let filechat_id = document.getElementById('filechat')
let changeimg = document.getElementById('changeimg')

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
vision_id.addEventListener('click',()=>{myCheck(vision_id)})
filechat_id.addEventListener('click',()=>{myCheck(filechat_id)})
youtube_id.addEventListener('click',()=>{myCheck(youtube_id)})
article_id.addEventListener('click',()=>{myCheck(article_id)})
rss_id.addEventListener('click',()=>{myCheck(rss_id)})
brand_id.addEventListener('click',()=>{myCheck(brand_id)})


function myCheck(button){
  if(button==vision_id){
    futureheading_id.innerHTML='Transform Images into Insightful Conversations'
    futurepara_id.innerHTML='Transform images into insightful conversations. Upload any image and receive detailed, contextual information and analyses to enhance your understanding and decision-making.'
    changeimg.src="images/Toolkit_1.png"
  }
  else if(button==filechat_id){
    futureheading_id.innerHTML='Extract Key Insights and Summarize Documents with Ease'
    futurepara_id.innerHTML='Simplify information extraction from files. Upload documents and let AI swiftly find specific details, extract key insights, or summarize the entire content for easy comprehension.'
  }
  else if(button==youtube_id){
    futureheading_id.innerHTML='Extract Key Points and Generate Concise Summaries from Video Links'
    futurepara_id.innerHTML='Provide a YouTube video link, and the AI will analyze the content, extract key points, and generate a concise text summary for your use.'
  }
  else if(button==article_id){
    futureheading_id.innerHTML='Instant SEO-Optimized Blog Content Creation'
    futurepara_id.innerHTML='Effortlessly create SEO-optimized blog content. Input your topic and watch as AI generates high-quality, tailored articles in seconds, boosting your online presence and engagement.'
  }
  else if(button==rss_id){
    futureheading_id.innerHTML='Streamline Content Updates with Real-Time, Tailored Feeds'
    futurepara_id.innerHTML='Automate your content updates with AI-powered RSS feeds. Stay informed with real-time information tailored to your interests and requirements.'
  }
  else if(button==brand_id){
    futureheading_id.innerHTML='AI Brand Voice: Ensure Consistent and Unique Branding Across All Content'
    futurepara_id.innerHTML="Maintain a consistent and unique brand voice across all your content. This AI tool helps you create content that aligns with your brand's style and tone, reinforcing your brand identity effectively."
  }

}

