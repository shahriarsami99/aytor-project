
// =================HERO AREA SECTION START========================
  $(function(){
    $('.hero_area').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
        dotsClass:'hero_slider_dots',
    });
  })
// =================HERO AREA SECTION END========================

// ===============ARRIVALS SLIDER SECTION START==================
  $(function(){
    $('.arrivals_slider').slick({
      slidesToShow:4,
      slideToScroll:1,
      prevArrow:`<i class="slider_arrow fa-solid fa-chevron-left"></i>`,
      nextArrow:`<i class="slider_arrow fa-solid fa-chevron-right"></i>`,
    });
  })
// ===============ARRIVALS SLIDER SECTION END==================



// =================OFFER SLIDER SECTION START===================
$(function(){
  $('.offer_slider').slick({
    slidesToShow:2,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    dotsClass:'offer_slider_dots'
  });
})
// =================OFFER SLIDER SECTION END===================

// ================LATEST PRODUCT SECTION START=================
$(function(){
  $('.latest_new_product_slider').slick({
    slidesToShow:4,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    dotsClass:'latest_new_product_dots'
  });
  })
  // ================LATEST PRODUCT SECTION END=================
  
  // =====================DEALS COUNT-DOWN SECTION START
  $(function(){
   $('[data-countdown]').each(function() {
   var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime(''
        + '<div><h3>%D</h3> <p>days </P></div>'
        +'<span>:</span>'
        + '<div><h3>%H</h3> <p>hour</P></div> '
        +'<span>:</span>'
        + '<div><h3>%M</h3> <p>min</P></div>  '
        +'<span>:</span>'
        + '<div><h3>%S</h3> <p>sec</P></div> '));
      });
    });
  })
  // =====================DEALS COUNT-DOWN SECTION END
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

new VenoBox({
  selector: ".venobox"
});


new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});


// ========================  COUNTER UP SECTION START================
$(function(){
  $(".counter").counterUp({
    delay:10,
    time:2000,
  })
})
// ========================  COUNTER UP SECTION END================

// ========================== INSTAGRAM SLIDER SECTION START===================
$(function(){
  $('.instagram_slider').slick({
    slidesToShow:6,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    dotsClass:'instagram_slider_dots',
  });
  })
  // ========================== INSTAGRAM SLIDER SECTION END===================



  // ========================= BLOG SLIDER SECTION START======================
  $(function(){
    $('.blog_slider_img').slick({
      slidesToShow:1,
      autoplay:true,
      autoplaySpeed:5000,
      // dotsClass:'blog_slider_dots',
      prevArrow:`<i class="slider_arrow-blog fa-solid fa-arrow-left-long"></i>`,
      nextArrow:`<i class="slider_arrow-blog fa-solid fa-arrow-right-long"></i>`,
    });
  })
  // ========================= BLOG SLIDER SECTION END======================
// =================== SHOP SLIDER SECTION START ===============
$(function(){
  $('.shop_slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    dotsClass:'shop_slider_dots',
    prevArrow:`<i class="slider_arrow-shop fa-solid fa-arrow-left-long"></i> <h5 class="pre">Pre</h5>`,
    nextArrow:`<i class="slider_arrow-shop fa-solid fa-arrow-right-long"></i> <h5 class="next">Next</h5>`,
  });
})
// =================== SHOP SLIDER SECTION END ===============





//================ PRODUCT SMALL IMAGE SLIDER SECTION START================
$(function(){
  $('.product_small_img_slider').slick({
    autoplaySpeed:2000,
    autoplay:true,
    slidesToShow:5,
    arrows:false,
    slideToScroll:1,
    asNavFor:'.product_details_slider',
    centerMode:true,
    centerPadding:'0',
    focusOnSelect:true,
  });
})
//================ PRODUCT SMALL IMAGE SLIDER SECTION END==================



// =======================INCREMENT AND DECREMENT SECTION START=======================
$(function(){
  
  $('.product_count').on('click', function(event){
    let card_value = $(this).children('#card_value').val();
    let targetType = $(event.target).data("type");
    if(targetType === "inc"){
      if(card_value < 5){
        
        $(this).children('#card_value').val(++card_value );
      }
    }else if(targetType === "dec"){
      if(card_value > 1){
        $(this).children('#card_value').val(--card_value );
        
      }
    }
  })
})
// =======================INCREMENT AND DECREMENT SECTION End=======================
