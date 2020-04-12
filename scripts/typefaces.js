const bwToggle = document.querySelector('div.bw-toggle')
const backIcon = document.querySelector('a.back-icon')
const nextArrow = document.querySelector('a.next')


const tfHeader = document.querySelector('header.tf-header')

bwToggle.addEventListener('click', ()=>{
  // backIcon.classList.toggle('white')
  // bwToggle.classList.toggle('white')
  // nextArrow.classList.toggle('white')

  listSelected.forEach(s=>[
    s.classList.toggle('bg-white')
  ])

  tfHeader.classList.toggle('black')

  bodyTag.classList.toggle('black')

  bodyTag.classList.toggle('white')
  tfHeader.classList.toggle('white')
  tfLeft.classList.toggle('white')
  pTags.forEach(tag=>{
    tag.classList.toggle('white')
  })
  liTags.forEach(tag=>{
    tag.classList.toggle('white')
  })


})




// Here we're going to move the active class between the slides. You can do this however you want, but for brevity I'm using JQuery.

// Get all the slides
var slides = $('.slide');

// Move the last slide before the first so the user is able to immediately go backwards
slides.first().before(slides.last());

$('.gallery-controls').on('click', function() {
  // Get all the slides again
  slides = $('.slide');
  // Register button
  var button = $(this);
  // Register active slide
  var activeSlide = $('.active');
  
  // Next function
  if (button.attr('id') == 'next') {
    // Move first slide to the end so the user can keep going forward
    slides.last().after(slides.first());
    // Move active class to the right
    activeSlide.removeClass('active').next('.slide').addClass('active');
  }
  
  // Previous function
  if (button.attr('id') == 'previous') {
    // Move the last slide before the first so the user can keep going backwards
    slides.first().before(slides.last());
    // Move active class to the left
    activeSlide.removeClass('active').prev('.slide').addClass('active');
  }
});

const prevButton = document.querySelector('div.previous')
const nextButton = document.querySelector('div.next')
const galleryCursor = document.querySelector('div.gallery-cursor')
const cursorImg = galleryCursor.querySelector('img')


nextButton.addEventListener('mousemove', (e)=>{
  galleryCursor.style.left = e.pageX
  galleryCursor.style.top = e.pageY
  galleryCursor.style.transform = 'translate(-50%,-50%) rotate(0deg)'
})
nextButton.addEventListener('mouseleave', ()=>{
  galleryCursor.style.opacity = 0
})
nextButton.addEventListener('mouseenter', ()=>{
  galleryCursor.style.opacity = 1
})


prevButton.addEventListener('mousemove', (e)=>{
  galleryCursor.style.left = e.pageX
  galleryCursor.style.top = e.pageY
  galleryCursor.style.transform = 'translate(-50%,-50%) rotate(180deg)'
})
prevButton.addEventListener('mouseleave', ()=>{
  galleryCursor.style.opacity = 0
})
prevButton.addEventListener('mouseenter', ()=>{
  galleryCursor.style.opacity = 1
})



