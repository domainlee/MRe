;(function () {
    'use strict';
    var loading = function () {
        $(window).on("load", function () {
            $('.loading').delay(666).fadeOut('slow');
            $('body').delay(666);
            animation();
        });
    }

    var nav = function () {
        var button_nav = $('.header__menu-button');
        button_nav.click(function (e) {
            $('body').toggleClass('nav-open-js');
        });

        var button_close = $('.header__menu-button-close');
        button_close.click(function (e) {
            $('body').removeClass('nav-open-js');
        });

        var header__navigation = $('.header__navigation');
        header__navigation.each(function () {
            var button = $(this).find('a');
            button.click(function () {
                setTimeout(function () {
                    $('body').removeClass('nav-open-js');
                },10);
            });
        });

        var timer;
        $(window).scroll(function(event) {
            var scrollTop = $('html').scrollTop();
            var head = $('.header');
            if(timer) {
                window.clearTimeout(timer);
            }
            timer = window.setTimeout(function() {
                if(scrollTop >= 260) {
                    head.addClass('head__fix');
                } else {
                    head.removeClass('head__fix');
                }
            }, 100);
        });
    }

    var lazy = function () {
        $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 500
        });
    };

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

    var animation = function () {
        let animContainer = document.querySelectorAll('.to-top');
        for (let element of animContainer) {
            if (isInViewport(element)) {
                setInterval(function(){
                    element.classList.add('is-on');
                }, 200);
            }
        }
        function isInViewport(el) {
            let inSight = el.getBoundingClientRect();
            let windowHeight = window.innerHeight;

            let topVisible = inSight.top > 0 && inSight.top < windowHeight;
            let bottomVisible = inSight.bottom < windowHeight && inSight.bottom > 0;
            let bothVisible = inSight.top < 0 && inSight.bottom > windowHeight;
            return topVisible || bottomVisible || bothVisible;
        }
    }

    var scrollTo = function () {
        return new bootstrap.ScrollSpy(document.body,{target:".header__menu"});
    }

    $(document).ready(function() {
        window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
        loading();
        nav();
        lazy();
        skill();
        scrollTo();
        $(document).on( 'scroll', function(){
            animation();
        });
    });
}());