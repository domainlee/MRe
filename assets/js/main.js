;(function () {
    'use strict';
    var loading = function () {
        $(window).on("load", function () {
            $('.loading').delay(666).fadeOut('slow');
            $('body').delay(666);
        });
    }

    var nav = function () {
        var button_nav = $('.toggle-menu');
        button_nav.click(function (e) {
            $('body').toggleClass('nav-open-js');
        });

        var toggle_search = $('.toggle-search');
        toggle_search.click(function (e) {
            $('body').toggleClass('search-open-js');
        });

        $("html").click(function(e) {
            if ($(e.target).closest('.search-mobile').length == 0)
                $('body').removeClass('search-open-js');
        });

        $('.nav__mobile > ul > li a').each(function(){
            var t = $(this);
            var checkElement = t.next();
            if(checkElement.is('ul')) {
                t.after('<span class="more">+</span>');
                t.next().click(function(e){
                    e.preventDefault();
                    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                        checkElement.slideUp('normal');
                    }
                    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                        checkElement.slideDown('normal');
                    }
                    $(this).toggleClass('active');
                });
            }

        });
    }

    var lazy = function () {
        $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 500
        });
    };

    var owlCarousel = function() {
        // SINGLE PAGE - Gallery //
        $('.single-post__gallery--js').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: true,
            lazyLoad: true,
            autoplay: true,
            items: 1,
            navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        });
    };

    var masonry = function () {
        $('.grid-js').masonry({
            itemSelector: '.post-type-two__item',
            columnWidth: '.grid-size',
        });
    };

    var searchDesktop = function () {
        $('.head__button-search').click(function(){
            $('body').toggleClass('search-js-open');
        });
    };

    var sidebarScroll = function() {
        $('.sidebar-fixed').theiaStickySidebar({
            additionalMarginTop: 20
        });
    }

    var skill = function () {
        var skill_item = $('.my-resume__skill--item');
        skill_item.each(function (k, v) {
            var count = $(this).find('div');
            var span = count.find('span');
            var precent = count.attr('data-precent');
            span.each(function (kk, vv) {
                if(kk < precent) {
                    $(this).addClass('active');
                }
            });
        });
    }

    $(document).ready(function() {
        loading();
        nav();
        lazy();
        owlCarousel();
        // masonry();
        searchDesktop();
        sidebarScroll();
        skill();
    });
}());