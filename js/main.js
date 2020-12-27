$(document).ready(function($) {
    $('.body-card-button').click(function(event) {
        var platformClick = $(this).attr('id');
        var instagram_block = $('#instagram_block').html();
        var vkontakte_block = $('#vkontakte_block').html();
        var youtube_block = $('#youtube_block').html();
        var tiktok_block = $('#tiktok_block').html();
        var telegram_block = $('#telegram_block').html();

        if (platformClick == 'instagram') { // INSTAGRAM
            $('.popup').html(instagram_block);
        } else if (platformClick == 'vkontakte') { //ВКОНТАКТЕ
            $('.popup').html(vkontakte_block);
        } else if (platformClick == 'youtube') { //YOUTUBE
            $('.popup').html(youtube_block);
        } else if (platformClick == 'tiktok') { //TIKTOK
            $('.popup').html(tiktok_block);
        } else if (platformClick == 'telegram') { //TELEGRAM
            $('.popup').html(telegram_block);
        }
        $('.popup-close').click(function() {
            $(this).parents('.popup-fade').fadeOut();
            return false;
        });
        $('.popup-fade').fadeIn();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
    $('.mobile-navbar-links').hide();
    $('.hamburger').click(function() {
        $('#hamburger-id').toggleClass('is-active');
        $('.navbar-mobile-menu').toggleClass('mobile-background-active');
        $('.mobile-navbar-links').toggle();
        if (('.navbar-mobile-menu').hasClass("mobile-background-active")) {
            return false;
        } else {
            $('.navbar-mobile-menu').addClass('mobile-background-default');
        }
    });
});