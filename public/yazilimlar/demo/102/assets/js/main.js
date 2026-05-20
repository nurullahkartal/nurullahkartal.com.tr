(function ($) {
	"use strict";

	// preloader js start
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();
	// preloader js end

	// mobile menu start
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	$('.side-toggle').on('click', function () {
		$('.side-mobile-menu').addClass('info-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay').on('click', function () {
		$('.side-mobile-menu').removeClass('info-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})
	// mobile menu end

	// data background js start
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-bg-color]").each(function () {

		$(this).css("background-color", $(this).attr("data-bg-color"));

	});
	// data background js end

	// toggle search bar start
	$('.header-search > a').on('click', function (event) {
		event.preventDefault();
		$('.search-area').addClass('active');
	});

	$('.search-close').on('click', function (event) {
		event.preventDefault();
		$('.search-area').removeClass('active');
	});
	// toggle search bar end

	// sticky start
	var wind = $(window);
	var sticky = $('#sticky_header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 200) {
			sticky.removeClass('sticky_header');
		} else {
			sticky.addClass('sticky_header');
		}
	});
	// sticky end

	// odometer counter start
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});
	// odometer counter end

	// slider start
	var menu = [];
	jQuery('.swiper-slide').each(function (index) {
		menu.push(jQuery(this).find('.slide_inner').attr("data-text"));
	});
	var interleaveOffset = 0.5;
	var swiperOptions = {
		loop: true,
		speed: 1000,
		parallax: true,
		autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		},
		watchSlidesProgress: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		on: {
			progress: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * interleaveOffset;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".slide_inner").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},

			touchStart: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},

			setTransition: function (speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide_inner").style.transition =
						speed + "ms";
				}
			}
		}
	};

	var swiper = new Swiper(".swiper-container", swiperOptions);
	// slider end


	// testimonial start
	$('.tm_details_carousel').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		asNavFor: '.tm_details_carousel_nav'
	  });
	  $('.tm_details_carousel_nav').slick({
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		verticalSwiping: true,
		asNavFor: '.tm_details_carousel',
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
		responsive: [
		{
		  breakpoint: 1370,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 580,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 380,
		  settings: {
			slidesToShow: 2,
		  }
		}
		]
	  });

	//  testimonial two
	$('.tm_carousel').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
	});
	// testimonial end

	// brand slide start
	$('.brand_slide').slick({
		dots: false,
		arrows: false,
		slidesToShow: 5,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 5,
			}
		},
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 2,
			}
		}
		]
	});
	// brand slide end

	// services slide start
	$('.dl_items-carousel').slick({
		dots: false,
		arrows: true,
		slidesToShow: 4,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
		responsive: [
		{
			breakpoint: 1201,
			settings: {
			slidesToShow: 3,
			}
		},
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			}
		},
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
			}
		}
		]
	});
	// services slide end

	// gallery active start
	$('.gallery_post-active').slick({
		dots: false,
		arrows: true,
		slidesToShow: 1,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
	});
	// gallery active end

	//  magnificPopup start
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
	//  magnificPopup end

	// Accordion Box start
	if ($(".accordion-box").length) {
		$(".accordion-box").on("click", ".acc-btn", function () {
		var outerBox = $(this).parents(".accordion-box");
		var target = $(this).parents(".accordion");

		if ($(this).next(".acc-content").is(":visible")) {
			$(this).removeClass("active");
			$(this).next(".acc-content").slideUp(300);
			$(outerBox).children(".accordion").removeClass("active-block");
		} else {
			$(outerBox).find(".accordion .acc-btn").removeClass("active");
			$(this).addClass("active");
			$(outerBox).children(".accordion").removeClass("active-block");
			$(outerBox).find(".accordion").children(".acc-content").slideUp(300);
			target.addClass("active-block");
			$(this).next(".acc-content").slideDown(300);
		}
		});
	}
	// Accordion Box end

	// range slider activation start
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 100,
		values: [0, 70],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});

	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
	" - $" + $("#slider-range").slider("values", 1));
	// range slider activation start

	// shop details carousel start
	$('.details_image_carousel').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.details_image_carousel_nav'
	  });
	  $('.details_image_carousel_nav').slick({
		dots: false,
		arrows: false,
		vertical: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		verticalSwiping: true,
		asNavFor: '.details_image_carousel',
		responsive: [
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 580,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 380,
		  settings: {
			slidesToShow: 5,
		  }
		}
		]
	  });
	// shop details carousel start

	
	// shop cart start
	var CartPlusMinus = $('.cart-plus-minus');
	CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
	CartPlusMinus.append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() === "+") {
		var newVal = parseFloat(oldValue) + 1;
		} else {
		// Don't allow decrementing below zero
		if (oldValue > 1) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 1;
		}
		}
		$button.parent().find("input").val(newVal);
	});
	// shop cart end

	// toggle search bar start
	$('.header-search > a').on('click', function (event) {
		event.preventDefault();
		$('.search-area').addClass('active');
	});

	$('.search-close').on('click', function (event) {
		event.preventDefault();
		$('.search-area').removeClass('active');
	});
	// toggle search bar end






})(jQuery);