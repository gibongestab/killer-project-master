/* For the sticky navigation */
Template.home.onRendered(function() {

    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky animated slideInDown');
        } else {
            $('nav').removeClass('sticky animated slideInDown');
        }
    }, {
        offset: '90px;'
    });

    /* Animations on scroll */

    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

/* MAPS */

    var map = new GMaps({
       div: '.map',
       lat: 34.0937458,
       lng: -118.28,
       zoom: 12
   });

    map.addMarker({
        lat: 34.0937458,
        lng: -118.3614976,
        title: 'Hollywood',
        infoWindow: {
            content: '<p>Our Hollywood HQ</p>'
        }
    });

});

/* For the sticky navigation */


Template.home.events({
    'click .js-scroll-plans': function() {
        $('html, body').animate({
            scrollTop: $('.js-section-plans').offset().top}, 1000)
    },

     'click .js-nav-icon': function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i')
            nav.slideToggle(200);
            if (icon.hasClass('ion-navicon-round')) {
            	icon.addClass('ion-close-round');
            	icon.removeClass('ion-navicon-round')
            } else {
            	icon.addClass('ion-navicon-round');
            	icon.removeClass('ion-close-round')
            }
    },

    'click .js-scroll-start': function() {
        var topPosition = $('.js-section-features').offset().top;

        var obj = {
            scrollTop: topPosition
        }

        var time = 1000;

        $('html, body').animate(obj, time);
    },
    'click a[href*=#]:not([href=#])': function(e) {
        var el = e.target;
        //this -> contexto de dados
        //el -> elemento clicado;
        e.preventDefault();

        if (location.pathname.replace(/^\//, '') == el.pathname.replace(/^\//, '') && location.hostname == el.hostname) {
            var target = $(el.hash);
            target = target.length ? target : $('[name=' + el.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);

            }
        }
    },
})



