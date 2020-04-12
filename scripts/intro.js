// hoverGlyph.style['font-variation-settings'] = `"wght" 200, "slnt" 1`

let el = `"wght" 200, "slnt" 0`
let l = `"wght" 300, "slnt" 0`
let r = `"wght" 400, "slnt" 0`
let m = `"wght" 500, "slnt" 0`
let sb = `"wght" 600, "slnt" 0`
let b = `"wght" 700, "slnt" 0`
let bl = `"wght" 800, "slnt" 0`
let eli = `"wght" 200, "slnt" 1`
let li = `"wght" 300, "slnt" 1`
let ri = `"wght" 400, "slnt" 1`
let mi = `"wght" 500, "slnt" 1`
let sbi = `"wght" 600, "slnt" 1`
let bi = `"wght" 700, "slnt" 1`
let bli = `"wght" 800, "slnt" 1`



const sectionsList = document.querySelector('div.sections-list')
const sectionsLinks = document.querySelectorAll('div.sections-link')
const activeSection = document.querySelector('div.active-section')

const content = document.querySelector('section.content')
const contentSections = document.querySelectorAll('section.main')


const gallerySection = document.querySelector('section.gallery')
const stylesSection = document.querySelector('section.styles')
const samplesSection = document.querySelector('section.samples')
const glyphsSection = document.querySelector('section.glyphs')
const testerSection = document.querySelector('section.tester')
const infoSection = document.querySelector('section.info')
const buySection = document.querySelector('section.buy')


const galleryLink = document.querySelector('div.gallery-link')
let glWidth = galleryLink.offsetWidth
activeSection.style.width = glWidth
gallerySection.classList.add('open')


sectionsLinks.forEach(li=>{



  let link = li.querySelector('a')

  let liName = link.className

  
    
  li.addEventListener('click', ()=>{

    window.scrollTo(0, 0)

    let left = li.getBoundingClientRect().left 
    let width = li.offsetWidth 

    for(var i=0; i<sectionsLinks.length; i++ ){
      contentSections[i].classList.remove('open')
    }

    console.log(width, left)
    activeSection.style.left = left + 'px'
    activeSection.style.width = width
    
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





// SAMPLES SECTION
const samples = samplesSection.querySelectorAll('div.sample')

samples.forEach(sample=>{
  const sampleSelect = sample.querySelector('select')
  const weightTag = sample.querySelector('input[name="weight"]')
  const weightOutput = sample.querySelector('span.weight-output')
  const slantTag = sample.querySelector('input[name="slant"]')
  const slantOutput = sample.querySelector('span.slant-output')
  const sizeTag = sample.querySelector('input[name="typesize"]')
  const sizeOutput = sample.querySelector('span.size-output')
  const text = sample.querySelector('p')

  if(sizeTag){
    sizeTag.addEventListener('input', function(){
      text.style.fontSize = this.value + 'px'
      sizeOutput.innerHTML = this.value + 'px'
    })
  }
    
  if(slantTag){
    slantTag.addEventListener('input', function(){
      let weight = weightTag.value
      let slant = slantTag.value
      text.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
      slantOutput.innerHTML = slant
    })
  }
  
  if(weightTag){
    weightTag.addEventListener('input', function(){
      let weight = weightTag.value
      let slant = slantTag.value
      text.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
      weightOutput.innerHTML = weight
    })
   
  }

  sampleSelect.addEventListener('change', ()=>{
    const typeValue = sampleSelect.value
    if(typeValue=="Extra-Light"){
      text.style['font-variation-settings'] = el
      weightTag.value = 100
      weightOutput.innerHTML = '100'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Extra-Light Italic"){
      text.style['font-variation-settings'] = eli
      weightTag.value = 100
      weightOutput.innerHTML = '100'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Light"){
      text.style['font-variation-settings'] = l
      weightTag.value = 200
      weightOutput.innerHTML = '200'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Light Italic"){
      text.style['font-variation-settings'] = li
      weightTag.value = 200
      weightOutput.innerHTML = '200'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Regular"){
      text.style['font-variation-settings'] = r
      weightTag.value = 400
      weightOutput.innerHTML = '400'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Regular Italic"){
      text.style['font-variation-settings'] = ri
      weightTag.value = 400
      weightOutput.innerHTML = '400'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Medium"){
      text.style['font-variation-settings'] = m
      weightTag.value = 500
      weightOutput.innerHTML = '500'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Medium Italic"){
      text.style['font-variation-settings'] = mi
      weightTag.value = 500
      weightOutput.innerHTML = '500'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Semi-Bold"){
      text.style['font-variation-settings'] = sb
      weightTag.value = 600
      weightOutput.innerHTML = '600'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Semi-Bold Italic"){
      text.style['font-variation-settings'] = sbi
      weightTag.value = 600
      weightOutput.innerHTML = '600'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Bold"){
      text.style['font-variation-settings'] = b
      weightTag.value = 700
      weightOutput.innerHTML = '700'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Bold Italic"){
      text.style['font-variation-settings'] = bi
      weightTag.value = 700
      weightOutput.innerHTML = '700'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }else if(typeValue=="Black"){
      text.style['font-variation-settings'] = bl
      weightTag.value = 800
      weightOutput.innerHTML = '800'
      slantTag.value = 0
      slantOutput.innerHTML = '0'
    }else if(typeValue=="Black Italic"){
      text.style['font-variation-settings'] = bli
      weightTag.value = 800
      weightOutput.innerHTML = '800'
      slantTag.value = 1
      slantOutput.innerHTML = '1'
    }
  
  })




})


















  // GLYPHS SECTION =================================================
const glyphContainerOuter = document.querySelector('div.tf-three-right')
const glyphsContainerInner = document.querySelector('div.glyphs-container')
const activeGlyphContainer = document.querySelector('div.active-glyph-container p')

const glyphsCategoryContainer = document.querySelectorAll('div.glyphs-category')
const glyphsDivs= document.querySelectorAll('section.glyphs-category div')

const glyphsDetailsOne = document.querySelector('div.glyph-details-one')
const glyphsDetailsTwo = document.querySelector('div.glyph-details-two')
const glyphsDetailsThree = document.querySelector('div.glyph-details-three xmp')

glyphsDivs.forEach(div=>{
  div.addEventListener('mousemove', ()=>{
    const hoveredGlyph = div.innerHTML



    activeGlyphContainer.innerHTML = hoveredGlyph


    const glyphName = div.getAttribute('data-name')
    glyphsDetailsOne.innerHTML = glyphName
        

        var hex = hoveredGlyph.codePointAt(0).toString(16);
        var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
        var unicode = result.substr(1);
        var formattedUnicode = 'U+' + unicode.slice(1, 5)

        glyphsDetailsTwo.innerHTML = formattedUnicode


    var htmlEntity = hoveredGlyph.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
          return '&#'+i.charCodeAt(0)+';';
       });

       glyphsDetailsThree.innerHTML = `${htmlEntity}`
  })

})






  const glyphsStyleList = document.querySelector('ul.glyphs-style-list')
  const styleListItems = glyphsStyleList.querySelectorAll('li')

  styleListItems.forEach(style=>{

    
    style.addEventListener('click', ()=>{

      for(var i = 0; i < styleListItems.length; i++){
       styleListItems[i].classList.remove('active')
      }
    
      style.classList.add('active')

      let styleUpdate = style.innerHTML
      
      if(styleUpdate=="Extra-Light"){
        activeGlyphContainer.style['font-variation-settings'] = el
      } else if(styleUpdate=="Light"){
        activeGlyphContainer.style['font-variation-settings'] = l
      } else if(styleUpdate=="Regular"){
        activeGlyphContainer.style['font-variation-settings'] = r
      } else if(styleUpdate=="Medium"){
        activeGlyphContainer.style['font-variation-settings'] = m
      } else if(styleUpdate=="Semi-Bold"){
        activeGlyphContainer.style['font-variation-settings'] = sb
      } else if(styleUpdate=="Bold"){
        activeGlyphContainer.style['font-variation-settings'] = b
      } else if(styleUpdate=="Black"){
        activeGlyphContainer.style['font-variation-settings'] = bl
      } else if(styleUpdate=="Extra-Light Italic"){
        activeGlyphContainer.style['font-variation-settings'] = eli
      } else if(styleUpdate=="Light Italic"){
        activeGlyphContainer.style['font-variation-settings'] = li
      } else if(styleUpdate=="Regular Italic"){
        activeGlyphContainer.style['font-variation-settings'] = ri
      } else if(styleUpdate=="Medium Italic"){
        activeGlyphContainer.style['font-variation-settings'] = mi
      } else if(styleUpdate=="Semi-Bold Italic"){
        activeGlyphContainer.style['font-variation-settings'] = sbi
      } else if(styleUpdate=="Bold Italic"){
        activeGlyphContainer.style['font-variation-settings'] = bi
      } else if(styleUpdate=="Black Italic"){
        activeGlyphContainer.style['font-variation-settings'] = bli
      }



    })
  })









const testerSampleSelect = testerSection.querySelector('select')
const testerOptions = testerSection.querySelector('div.tester-options')
const testerSizeTag = testerOptions.querySelector('input[name="typesize"]')
const testerSizeOutput = testerOptions.querySelector('span.size-output')
const testerWeightTag = testerOptions.querySelector('input[name="weight"]')
const testerWeightOutput = testerOptions.querySelector('span.weight-output')
const testerSlantTag = testerOptions.querySelector('input[name="slant"]')
const testerSlantOutput = testerOptions.querySelector('span.slant-output')
const testerLineHeightTag = testerOptions.querySelector('input[name="line-height"]')
const testerLineHeightOutput = testerOptions.querySelector('span.line-height-output')
const testerLetterSpacingTag = testerOptions.querySelector('input[name="letter-spacing"]')
const testerLetterSpacingOutput = testerOptions.querySelector('span.letter-spacing-output')
const testerText = document.querySelector('div.tester-type')



if(testerSizeTag){
  testerSizeTag.addEventListener('input', function(){
    testerText.style.fontSize = this.value + 'px'
    testerSizeOutput.innerHTML = this.value + 'px'
  })
}

  
if(testerWeightTag){
  testerWeightTag.addEventListener('input', function(){
    let weight = testerWeightTag.value
    let slant = testerSlantTag.value
    testerText.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
    testerSlantOutput.innerHTML = slant
  })
}

if(testerSlantTag){
  testerSlantTag.addEventListener('input', function(){
    let weight = testerWeightTag.value
    let slant = testerSlantTag.value
    testerText.style['font-variation-settings'] = `"wght" ${weight}, "slnt" ${slant}`
    testerWeightOutput.innerHTML = weight
  })
 
}

if(testerLineHeightTag){
  testerLineHeightTag.addEventListener('input', function(){
    testerText.style.lineHeight = this.value 
    testerLineHeightOutput.innerHTML = this.value + 'px'
  })
}

if(testerLetterSpacingTag){
  testerLetterSpacingTag.addEventListener('input', function(){
    testerText.style.letterSpacing = this.value + 'em'
    testerLetterSpacingOutput.innerHTML = this.value + 'em'
  })
}


testerSampleSelect.addEventListener('change', ()=>{
  const typeValue = testerSampleSelect.value
  if(typeValue=="Extra-Light"){
    testerText.style['font-variation-settings'] = el
    testerWeightTag.value = 100
    testerWeightOutput.innerHTML = '100'
    testerSlantTag.value = 0
    testerSlantOutput.innerHTML = '0'
  }else if(typeValue=="Extra-Light Italic"){
    testerText.style['font-variation-settings'] = eli
    testerWeightTag.value = 100
    testerWeightOutput.innerHTML = '100'
    testerSlantTag.value = 1
    testerSlantOutput.innerHTML = '1'
  }else if(typeValue=="Light"){
    testerText.style['font-variation-settings'] = l
    testerWeightTag.value = 200
    testerWeightOutput.innerHTML = '200'
    testerSlantTag.value = 0
    testerSlantOutput.innerHTML = '0'
  }else if(typeValue=="Light Italic"){
    testerText.style['font-variation-settings'] = li
    testerWeightTag.value = 200
    testerWeightOutput.innerHTML = '200'
    testerSlantTag.value = 1
    testerSlantOutput.innerHTML = '1'
  }else if(typeValue=="Regular"){
    testerText.style['font-variation-settings'] = r
    testerWeightTag.value = 400
    testerWeightOutput.innerHTML = '400'
    testerSlantTag.value = 0
    testerSlantOutput.innerHTML = '0'
  }else if(typeValue=="Regular Italic"){
    testerText.style['font-variation-settings'] = ri
    testerWeightTag.value = 400
    testerWeightOutput.innerHTML = '400'
    testerSlantTag.value = 1
    testerSlantOutput.innerHTML = '1'
  }else if(typeValue=="Medium"){
    testerText.style['font-variation-settings'] = m
    testerWeightTag.value = 500
    testerWeightOutput.innerHTML = '500'
    testerSlantTag.value = 0
    testerSlantOutput.innerHTML = '0'
  }else if(typeValue=="Medium Italic"){
    testerText.style['font-variation-settings'] = mi
    testerWeightTag.value = 500
    testerWeightOutput.innerHTML = '500'
    testerSlantTag.value = 1
    testerSlantOutput.innerHTML = '1'
  }else if(typeValue=="Semi-Bold"){
    testerText.style['font-variation-settings'] = sb
    testerWeightTag.value = 600
    testerWeightOutput.innerHTML = '600'
    testerSlantTag.value = 0
    testerSlantOutput.innerHTML = '0'
  }else if(typeValue=="Semi-Bold Italic"){
    testerText.style['font-variation-settings'] = sbi
    testerWeightTag.value = 600
    testerWeightOutput.innerHTML = '600'
    testerSlantTag.value = 1
    testerSlantOutput.innerHTML = '1'
  }else if(typeValue=="Bold"){
    testerText.style['font-variation-settings'] = b
    testerWeightTag.value = 700
    testerWeightOutput.innerHTML = '700'
    testerSlantTag.value = 0
    testerSlantOutput.innerHTML = '0'
  }else if(typeValue=="Bold Italic"){
    testerText.style['font-variation-settings'] = bi
    testerWeightTag.value = 700
    testerWeightOutput.innerHTML = '700'
    testerSlantTag.value = 1
    testerSlantOutput.innerHTML = '1'
  }else if(typeValue=="Black"){
    testerText.style['font-variation-settings'] = bl
    testerWeightTag.value = 800
    testerWeightOutput.innerHTML = '800'
    testerSlantTag.value = 0
    testerSlantOutput.innerHTML = '0'
  }else if(typeValue=="Black Italic"){
    testerText.style['font-variation-settings'] = bli
    testerWeightTag.value = 800
    testerWeightOutput.innerHTML = '800'
    testerSlantTag.value = 1
    testerSlantOutput.innerHTML = '1'
  }

})
