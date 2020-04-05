const bwToggle = document.querySelector('div.bw-toggle')
const backIcon = document.querySelector('a.back-icon')
const nextArrow = document.querySelector('a.next')

const tfLeft = document.querySelector('section.tf-left')
const tfHeader = document.querySelector('header.tf-header')

bwToggle.addEventListener('click', ()=>{
  backIcon.classList.toggle('white')
  bwToggle.classList.toggle('white')
  nextArrow.classList.toggle('white')

  listSelected.forEach(s=>[
    s.classList.toggle('bg-white')
  ])

  tfHeader.classList.toggle('black')
  tfLeft.classList.toggle('black')
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