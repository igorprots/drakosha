$(function () {

    $('#toggle').on('click', function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    // document.getElementById('feedback-form').addEventListener('submit', function (evt) {
    //     var http = new XMLHttpRequest(), f = this;
    //     evt.preventDefault();
    //     http.open("POST", "contacts.php", true);
    //     http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //     http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
    //     http.onreadystatechange = function () {
    //         if (http.readyState == 4 && http.status == 200) {
    //             alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');
    //             f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
    //             f.messageFF.value = '';
    //         }
    //     }
    //     http.onerror = function () {
    //         alert('Извините, данные не были переданы');
    //     }
    // }, false);


    $('.dragon-slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        autoplaySpeed: 1000,
        speed: 1000,
    });


    $('.app-slider').slick({
        infinite: true,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });


    // $.fn.isOnScreen = function () {
    //     var win = $(window);
    //     var viewport = {
    //         top: win.scrollTop(),
    //         left: win.scrollLeft()
    //     };
    //     viewport.right = viewport.left + win.width();
    //     viewport.bottom = viewport.top + win.height();
    //     var bounds = this.offset();
    //     bounds.right = bounds.left + this.outerWidth();
    //     bounds.bottom = bounds.top + this.outerHeight();
    //     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    // };

    // $('.about__hero')
    // console.log($('.about__hero'));

    // $(window).scroll(function () {
    //     if ($('.about__hero-position--1').isOnScreen()) {
    //         $('.about__hero-position--1, .about__hero-position--2 ').addClass('animate__animated animate__fadeInDown')
    //     } else {
    //         $('.about__hero-position--1, .about__hero-position--2 ').removeClass('animate__animated animate__fadeInDown')
    //     }
    //     if ($('.about__hero-position--3').isOnScreen()) {
    //         $('.about__hero-position--3, .about__hero-position--4 ').addClass('animate__animated animate__fadeInUp')
    //     } else {
    //         $('.about__hero-position--3, .about__hero-position--4').removeClass('animate__animated animate__fadeInUp')
    //     }
    //     if ($('.about__buble-item').isOnScreen()) {
    //         $('.about__buble-item img').addClass('animate__pulse animate__infinite animate__slower animate__animated')
    //     } else {
    //         $('.about__buble - item img').removeClass('animate__pulse animate__infinite animate__slower animate__animated')
    //     }
    // });


    var rellax = new Rellax('.rellax', {
        center: true
    });

});