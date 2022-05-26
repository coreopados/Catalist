$(document).ready(function () {

    var sectionIndex = 0;    
    var sectionNum = 11;     
    var scrollDuration = 700;    
    var scrolling = false;    
    var scrollHeight
         
    if(window.innerWidth> 767){
      $("#fullpage").bind("mousewheel", function (event) {
         
      if (scrolling) return;        
      scrolling = true;    

      if (event.originalEvent.wheelDelta < 0) {                             
        scrollUp();    
      } else {                           
        scrollDown();
      }    
      });  
    }     

    function scrollDown() {
        if (--sectionIndex < 0) {            
            sectionIndex++;            
            scrolling = false;        
        } else {
          scrollPage(); 
        }   
    }    
         
    function scrollUp() {      
        if (++sectionIndex >= sectionNum) {            
            sectionIndex--;            
            scrolling = false;        
        } else if(sectionIndex<=9) {
          scrollPage();   
        } else {
          scrollLastPage();
        }
    }
      
    function scrollPage() {         
        // var scrollHeight = $(window).height() * sectionIndex;
          scrollHeight = $(window).height() * sectionIndex;  

          $("#fullpage").css({            
            "transition-duration": scrollDuration + "ms",            
            "transform": "translate3d(0px,-" + scrollHeight + "px,0px)"        
        });  
   
        setTimeout(function () {            
            scrolling = false;        
        }, scrollDuration);    
    
      }

      function scrollLastPage() {         
        // var scrollHeight = $(window).height() * sectionIndex;
          scrollHeight = $(window).height() * (sectionIndex - 1) + $('footer').outerHeight();  

          $("#fullpage").css({            
            "transition-duration": scrollDuration + "ms",            
            "transform": "translate3d(0px,-" + scrollHeight + "px,0px)"        
        });  
   
        setTimeout(function () {            
            scrolling = false;        
        }, scrollDuration);    
    
      }

    $('.menu-button').on('click', function(){
        $(this).toggleClass('show')
        $('.menu').toggleClass('show')
    })


    $('input[name="tel"]').inputmask("+7(999)-99-99-999");

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView:2,
        spaceBetween:  80,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 768px
          576: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
            spaceBetween: 40
          },
           // when window width is >= 1200px
           1440: {
            slidesPerView: 2,
            spaceBetween: 50
          }
        }
      })

      $("a[data-link]").click(function() {

        $('.screen').removeClass('active')
        
        var linkid = $(this).attr('href');
        var section = $(''+linkid+'');
        var possection = $(''+linkid+'').position().top;

        if(window.innerWidth> 767){
          var numSection = $(''+linkid+'').attr('data-num');
          sectionIndex = numSection
          scrollHeight = $(window).height() * sectionIndex; 

          $("#fullpage").css({            
            "transition-duration": scrollDuration + "ms",            
            "transform": "translate3d(0px,-" + scrollHeight + "px,0px)"        
        });  
        }else{
      
          $("html, body").animate({ scrollTop: possection }, "slow");

              // $('html, body').animate({
              //   scrollTop: $(""+possection+"").offset().top
              // }, 2000);
        }
       

        setTimeout(function(){
          section.addClass('active');
        }, 2000)

        $('.menu-button,.menu').removeClass('show')


                
        // $('html, body').animate({
        //   scrollTop: $(""+possection+"").offset().top
        // }, 2000);
        return false;
      });

     
  $('.order-button').on('click', function(event){
    event.preventDefault();
    $('.layer, .popup').addClass('show')
  })


  $('.layer, .close-popup').on('click', function(event){
    event.preventDefault();
    $('.layer, .popup').removeClass('show')
  })



  jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $(".menu.show, .menu-button.show"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('show'); // скрываем его
        $('.menu-button').removeClass('show')
      }
    });
  });
});