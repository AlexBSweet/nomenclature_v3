
const sectionsList = document.querySelector('ul.sections-list')
const sectionsLi = document.querySelectorAll('ul.sections-list li')
const selectDiv = document.querySelectorAll('div.select')

const content = document.querySelector('section.content')
const contentSections = content.querySelectorAll('section')

const gallerySection = document.querySelector('section.gallery')
const stylesSection = document.querySelector('section.styles')
const samplesSection = document.querySelector('section.samples')
const glyphsSection = document.querySelector('section.glyphs')
const testerSection = document.querySelector('section.tester')
const infoSection = document.querySelector('section.info')
const buySection = document.querySelector('section.buy')


sectionsLi.forEach(li=>{
  let liName = li.className
  let liDivSelect = li.querySelector('div.select')
 
  li.addEventListener('click', ()=>{
    selectDiv.forEach(div=>{
      div.classList.remove('open')
    })
    
    liDivSelect.classList.add('open')


    for(var i=0; i<contentSections.length; i++ ){
      contentSections[i].classList.remove('open')
    }
    
    if(liName=="gallery"){
      gallerySection.classList.add('open')
    } else if(liName=="styles"){
      stylesSection.classList.add('open')
    }else if(liName=="samples"){
      samplesSection.classList.add('open')
    }else if(liName=="glyphs"){
      glyphsSection.classList.add('open')
    }else if(liName=="tester"){
      testerSection.classList.add('open')
    }else if(liName=="info"){
      infoSection.classList.add('open')
    }else if(liName=="buy"){
      buySection.classList.add('open')
    }
     
      
  })
})
