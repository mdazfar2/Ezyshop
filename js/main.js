(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


//displays a custom alert message
function displayAlertMessage(message) {
    let alertElement = document.getElementById('custom-alert-message');
    if (!alertElement) {
      alertElement = document.createElement('div');
      alertElement.id = 'custom-alert-message'; 
      alertElement.className = 'custom-alert hidden'; 
      document.body.appendChild(alertElement);
    }
    alertElement.textContent = message;
    alertElement.classList.add('show');
    alertElement.classList.remove('hidden');
    setTimeout(() => {
      alertElement.classList.remove('show');
      alertElement.classList.add('hidden');
    }, 2000);
  } 

//redirects to prodcuts page of a specific category
function shopNow(category) {
    if(isUserLoggedIn()){
        window.location.href = `products.html?category=${category}`;
    }
    else{
        displayAlertMessage("Please login to continue");
    }
}

function exploreShops(){
    if(isUserLoggedIn()){
        window.location.href = 'shops.html';
    }
    else{
        displayAlertMessage("Please login to continue");
    setTimeout(function () {
      window.location.href = "RegisterPages/register.html";
    }, 2000);
    }
}