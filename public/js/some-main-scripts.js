// responsive menu
$(document).ready(function () {
    var menuLeft = $('#cbp-spmenu-s1'),
        showRightPush = $('.showRightPush'),
        body = $("body");

    showRightPush.on("click", function () {
        $(this).toggleClass('active');
        body.toggleClass('cbp-spmenu-push-toleft');
        menuLeft.toggleClass('cbp-spmenu-open');
    });

    $('.cbp-spmenu-right .close-btn').on("click", function () {
        $('.responsive-menu-btn.active').trigger("click");
        return false;
    });

    // Този скрипт е заради скрола при fancybox - добава class="cbp-spmenu-push" при window load
    if (window.innerWidth <= 1100 ) {
        $(body).addClass('cbp-spmenu-push');
      }
    else {$(body).removeClass('cbp-spmenu-push');}

});
// end responsive menu


// Този скрипт е заради скрола при fancybox - добава class="cbp-spmenu-push" при window resize
$(window).resize(function() {
    var body = document.body;

    if (window.innerWidth <= 1100 ) {
      $(body).addClass('cbp-spmenu-push');
    }
    else {$(body).removeClass('cbp-spmenu-push');}
     
 });


// sticky menu ---------------------------
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100){

        $('.sticky-wrap').addClass("sticky");
    }
    else{
        $('.sticky-wrap').removeClass("sticky");
    }
});
// end sticky menu ---------------------------




//login
$(document).ready(function() {
  $('.login-choice').click(function() {
      $('.login-list').slideToggle();
      return false;
  });
  $('.close-list').on("click",function(){  $( '.login-choice:first' ).trigger("click"); return false;});
});
// end login



//lang list
$(document).ready(function() {
  $('.lang-choice').click(function() {
      $('.lang-list').slideToggle();
      return false;
  });
});
// end lang list



//currency list
$(document).ready(function() {
  $('.currency-choice').click(function() {
      $('.currency-list').slideToggle();
      return false;
  });
});
// end currency list



//search
$(document).ready(function() {
    if ($(window).width() < 801){
      $('.search-link').click(function() {
          $('.search-form').fadeToggle();

          var  status = $(this).hasClass('s-close');
  
          $(this).addClass(status ? 's-search' : 's-close');
          $(this).removeClass(status ? 's-close' : 's-search');

          return false;
      });
    }
});
// search



// page top 
$(document).ready(function () {
    var currentTime = '1453190648';
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if ($(this).hasClass('fancybox')) return;
            if ($(this).hasClass('no-up')) return;

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 100);
                return false;
            }

        });
    });
}); 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 500){
        $('.page-top').addClass("page-top-show").fadeIn();
    }
    else{
        $('.page-top').removeClass("page-top-show").fadeOut();
    }
});
// end page top


// fancybox
$(document).ready(function() {
  Fancybox.bind("[data-fancybox]", {
    Thumbs : {
      type: "classic"
    }
  });
});
// end fancybox



//accordion menu
jQuery(document).ready(function(){
  var accordionsMenu = $('.cd-accordion-menu');

  if( accordionsMenu.length > 0 ) {
    
    accordionsMenu.each(function(){
      var accordion = $(this);
      //detect change in the input[type="checkbox"] value
      accordion.on('change', 'input[type="checkbox"]', function(){
        var checkbox = $(this);
        console.log(checkbox.prop('checked'));
        ( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
      });
    });
  }
});
// end accordion



//footer accordion mobile
$(document).ready(function() {

    if ($(window).width() < 801){
        $('.footer-title').addClass("foot-btn");
    }
    else{
        $('.footer-title').removeClass("foot-btn");
    }
});

$(document).ready(function(){
  var animTime = 400,
      clickPolice = false;
      var currentOpened=-1;
  
  $(document).on('touchstart click', '.foot-btn', function(){
    if(!clickPolice){
       clickPolice = true;
       
      
      var currIndex = $(this).index('.foot-btn'),
          targetHeight = $('.foot-content-inner').eq(currIndex).outerHeight();
      
      $('.foot-content').stop().animate({ height: 0 }, animTime);
      if (currentOpened==currIndex)
        {
        currentOpened=-1;
        } else
        {
         $('.foot-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);
        currentOpened=currIndex;
        }

      setTimeout(function(){ clickPolice = false; }, animTime);
    }
    
  });
  
});
// end footer accordion mobile


//responsive filters and responsive sorting
$(document).ready(function() {

  $('.responsive-filters').click(function() {
        $('.sidebar').slideToggle();
        return false;
  });
  $('.close-filter').on("click",function(){  $( '.responsive-filters:first' ).trigger("click"); return false;});


  $('.responsive-sort').click(function() {
        $('.sort-wrap-inner').slideToggle();
        return false;
  });

});
// end responsive filters and sorting



// jquary range for price
$(document).ready(function(){

  if ($('.range-slider').length){

    $('.range-slider').jRange({
        from: 0,
        to: 1500,
        step: 1,
        format: '%s лв.',
        width: 210,
        showLabels: true,
        isRange : true
    });

  }

});
// end jquary range



// tab menu
$(document).ready(function() {
    $(".tabs-container .tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current-tab");
        $(this).parent().siblings().removeClass("current-tab");
        var tab = $(this).attr("href");
        $(".tabs-container .tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

// end tab menu



// slick carousel main
$(document).ready(function(){

    $('.car-front-windows').slick({
      slidesToShow: 1,
      arrows: false,
      dots: false,
      speed: 200,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.front-windows-nav'
    });
    $('.front-windows-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.car-front-windows',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });

    $('.car-back-windows').slick({
      slidesToShow: 1,
      arrows: false,
      dots: false,
      speed: 200,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.back-windows-nav'
    });
    $('.back-windows-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.car-back-windows',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });

        $('.new-in-slider, .promo-slider, .top-seller-slider, .similar-slider, .last-seen-slider, .recommend-slider').slick({
      dots: false,
      infinite: true,
      arrows:true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1500,
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnHover:true,
      responsive: [
        {
          breakpoint: 1151,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 641,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 451,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1151,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });

});
// end slick carousel main



//top login in step 2 checkout
$(document).ready(function() {
  $('.btn-toggle').click(function() {
      $('.top-login').slideToggle();
      return false;
  });
});
// end top login



//broi products in step 2
$(document).ready(function() {
  $('.cart-pr-broi').click(function() {
      $('.cart-summary .cart-pr-wrap').slideToggle();
      return false;
  });
});
// end broi



//responsive profile avatar
$(document).ready(function() {
    if ($(window).width() < 981){
      $('.profile-avatar').click(function() {
          $('.profile-menu').slideToggle();
      });
    }
});
//end responsive profile avatar
