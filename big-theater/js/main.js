document.addEventListener('DOMContentLoaded', () => {

  function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
    
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    }   else{
      document.querySelector('body').classList.add('no-webp');
    }
  })

//!<HEAD>==================================================================================================================================

//?<HEAD-CONTACTS>*************************************************************************************************************************

  const contactItem = document.querySelector('.head__contacts-item'),
        contactInstagram = document.querySelector('.head__contacts-item.instagram'),
        contactFacebook = document.querySelector('.head__contacts-item.facebook'),
        contactVkontakte = document.querySelector('.head__contacts-item.vkontakte'),
        contactYoutube = document.querySelector('.head__contacts-item.youtube')

// *BEGIN Toggle classes functions
  const addActiveStyle = (elementClass) => {
    document.querySelector(elementClass).style = `fill: #D1A954`
  }

  const removeActiveStyle = (elementClass) => {
    document.querySelector(elementClass).style = `fill: #ffffff99`
  }

  const onActiveContactItem = (element, svgName) => {
    element.addEventListener('mouseover', () => {
      addActiveStyle(svgName)
    })

    element.addEventListener('mouseout', () => {
      removeActiveStyle(svgName)
    })
  }
// *END Toggle classes functions

// *BEGIN hover actions on contacts items
  contactInstagram.addEventListener('mouseover', () => {
    document.querySelectorAll('.instagram__svg-path').forEach(item => {
      item.style.fill = '#D1A954'
    })
  })

  contactInstagram.addEventListener('mouseout', () => {
    document.querySelectorAll('.instagram__svg-path').forEach(item => {
      item.style.fill = '#ffffff99'
    })
  })

  onActiveContactItem(contactFacebook, '.facebook__svg-path')
  onActiveContactItem(contactVkontakte, '.vkontakte__svg-path')
  onActiveContactItem(contactYoutube, '.youtube__svg-path')
// *END hover actions on contacts items
  
//?</HEAD-CONTACTS>**************************************************************************************************************************
  
//?<HEAD-SLIDER>**************************************************************************************************************************

  const sliderPrevBtn = document.querySelector('.head__nav-prev'),
          sliderPrevBtnArrow = document.querySelector('.slider__arrow-prev'),
          sliderNextBtn = document.querySelector('.head__nav-next'),
          sliderNextBtnArrow = document.querySelector('.slider__arrow-next')
    
  const toggleActiveBtn = (element, target) => {
    element.addEventListener('mouseover', () => {
      target.classList.add('active-arrow')
    })
    element.addEventListener('mouseout', () => {
      target.classList.remove('active-arrow')
    })
  }

  toggleActiveBtn(sliderPrevBtn, sliderPrevBtnArrow)
  toggleActiveBtn(sliderNextBtn, sliderNextBtnArrow)

  const sliderItems = document.querySelectorAll('.head__slider-item'),
        sliderWrapper = document.querySelector('.head__slider-items'),
        sliderLine = document.querySelector('.head__slider-line'),
        width = window.getComputedStyle(sliderWrapper).width

  let offset = 0
  sliderLine.style.width = 100 * sliderItems.length + '%'
  
  sliderItems.forEach(item => {
    item.style.width = width
  })
  
  sliderNextBtn.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (sliderItems.length - 1)) {
      offset = 0
    } else {
      offset += +width.slice(0, width.length - 2)
    }

    sliderLine.style.transform = `translateX(-${offset}px)`
  })

  sliderPrevBtn.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (sliderItems.length - 1)
    } else {
      offset -= +width.slice(0, width.length - 2)
    }

    sliderLine.style.transform = `translateX(-${offset}px)`
  })

//?</HEAD-SLIDER>**********************************************************************************************************************

//!<HEAD>====================================================================================================

})

