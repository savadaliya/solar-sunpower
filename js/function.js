(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		setHeaderHeight();
		$(".preloader").fadeOut(600);
	});
	
	/* Sticky Header */
	$window.on('resize', function(){
		setHeaderHeight();
	});

	function setHeaderHeight(){
		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
	}	
	
	$(window).on("scroll", function() {
		var fromTop = $(window).scrollTop();
		setHeaderHeight();
		var headerHeight = $('header .header-sticky').outerHeight()
		$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 300));
		$("header .header-sticky").toggleClass("active", (fromTop > 600));
	});

	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});
	
	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}

	/* Hero Slider Layout 1 JS */
	const hero_slider_layout1 = new Swiper('.hero-slider-layout1 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 6000,
		},
		navigation: {
			nextEl: '.hero-button-next',
			prevEl: '.hero-button-prev',
		},
	});

	/* Hero Slider Layout 2 JS */
	const hero_slider_layout2 = new Swiper('.hero-slider-layout2 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 6000,
		},
		navigation: {
			nextEl: '.hero-button-next',
			prevEl: '.hero-button-prev',
		},
	});

	/* Hero Slider Layout 3 JS */
	const hero_slider_layout3 = new Swiper('.hero-slider-layout3 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 6000,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	/* Project Layout 2 Slider JS */
	const project_layout2_slider = new Swiper('.project-layout2-slider .swiper', {
		slidesPerView : 1,
		speed: 2500,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 0,
		},
		allowTouchMove: false,
  		disableOnInteraction: true,
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 5,
			}
		}
	});

	/* Project Layout 3 JS */
	const project_layout3_carousel = new Swiper('.project-layout3-slider .swiper', {
		slidesPerView : 1,
		speed: 4500,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 0,
		},
		allowTouchMove: false,
  		disableOnInteraction: true,
		  breakpoints: {
			768: {
			  slidesPerView: 2,
			}
		}
	});


	/* Testimonial 2 Carousel JS */
	const testimonial_carousel2 = new Swiper('.testimonial-slider2 .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 8000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,

			},
			991: {
			  slidesPerView: 3,
			}
		}
	});

	/* Testimonial 3 Carousel JS */
	const testimonial_carousel3 = new Swiper('.testimoinal-layout3-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 8000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			991: {
			  slidesPerView: 2,
			}
		}
	});

	/* Testimonial Carousel JS */
	const testimonial_carousel = new Swiper('.testimonial-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 500000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,

			},
			991: {
			  slidesPerView: 3,
			}
		}
	});

	/* Services Carousel JS */
	const service_carousel = new Swiper('.services-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3
			}
		}
	});

	/* Services Layout 2 JS */
	const service_layout2_carousel = new Swiper('.services-layout2-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3
			}
		}
	});

	/* Services Layout 3 JS */
	const service_layout3_carousel = new Swiper('.services-layout3-slider .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
			  slidesPerView: 2,
			},
			991: {
			  slidesPerView: 3
			}
		}
	});

	/* Zoom screenshot */
	$('.project-gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Popup Video */
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	/* Animated skills Bars */
	$('.our-skills').waypoint(function() {
		$('.skillbar').each(function() {
			$(this).find('.count-bar').animate({
			  width:$(this).attr('data-percent')
			},2000);
		});
	},{
		offset: '50%'
	});

	/* Init Counter */
	$('.counter').counterUp({ delay: 5, time: 2000 });

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime').length) {
		const animatedElements = document.querySelectorAll(".text-anime");

		animatedElements.forEach((element) => {
		let staggerAmount = 0.05;
		let translateXValue = 20;
		let translateYValue = false;
		let onScrollValue = 1;
		let delayValue = 0.5;
		let easeType = "power2.out";

		if (element.getAttribute("data-stagger")) {
			staggerAmount = element.getAttribute("data-stagger");
		}

		if (element.getAttribute("data-translateX")) {
			translateXValue = element.getAttribute("data-translateX");
		}

		if (element.getAttribute("data-translateY")) {
			translateYValue = element.getAttribute("data-translateY");
		}

		if (element.getAttribute("data-on-scroll")) {
			onScrollValue = element.getAttribute("data-on-scroll");
		}

		if (element.getAttribute("data-delay")) {
			delayValue = element.getAttribute("data-delay");
		}

		if (element.getAttribute("data-ease")) {
			easeType = element.getAttribute("data-ease");
		}

		if (onScrollValue == 1) {
			if (translateXValue > 0 && !translateYValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
			}

			if (translateYValue > 0 && !translateXValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
			gsap.from(splitText.chars, {
				duration: 1,
				delay: delayValue,
				y: translateYValue,
				autoAlpha: 0,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
			}

			if (translateXValue && translateYValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
			gsap.from(splitText.chars, {
				duration: 3,
				delay: delayValue,
				y: translateYValue,
				x: translateXValue,
				autoAlpha: 0,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
			}

			if (!translateXValue && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: 50,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			}
			} else {
				if (translateXValue > 0 && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					ease: easeType,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}

				if (translateYValue > 0 && !translateXValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					y: translateYValue,
					autoAlpha: 0,
					ease: easeType,
					stagger: staggerAmount,
				});
				}

				if (translateXValue && translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					y: translateYValue,
					x: translateXValue,
					ease: easeType,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}

				if (!translateXValue && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					ease: easeType,
					x: 50,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}
			}
		});
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* About Carousel JS */
	const about_carousel = new Swiper('.about-carousel .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.about-button-next',
			prevEl: '.about-button-prev',
		},
	});

	/* Contact form validation */
	var $contactform=$("#contactForm");
	if($contactform.length){
		$contactform.validator({focus: false}).on("submit", function (event) {
			if (!event.isDefaultPrevented()) {
				event.preventDefault();
				submitForm();
			}
		});

		function submitForm(){
			/* Initiate Variables With Form Content*/
			var name = $("#name").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var subject = $("#subject").val();
			var message = $("#msg").val();

			$.ajax({
				type: "POST",
				url: "form-process.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&subject=" + subject + "&message=" + message,
				success : function(text){
					if (text == "success"){
						formSuccess();
					} else {
						submitMSG(false,text);
					}
				}
			});
		}

		function formSuccess(){
			$contactform[0].reset();
			submitMSG(true, "Message Sent Successfully!")
		}

		function submitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-success";
			} else {
				var msgClasses = "h3 text-danger";
			}
			$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
	}
	/* Contact form validation end */


	/* Solar form validation */
	var $solarform=$("#solarForm");

	if($solarform.length){
		$solarform.validator({focus: false}).on("submit", function (event) {
			if (!event.isDefaultPrevented()) {
				event.preventDefault();
				solarsubmitForm();
			}
		});

		function solarsubmitForm(){
			/* Initiate Variables With Form Content*/
			var name = $("#name").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var bill = $("#bill").val();
			var capacity = $("#capacity").val();

			$.ajax({
				type: "POST",
				url: "solar-form-process.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&bill=" + bill + "&capacity=" + capacity,
				success : function(text){
					if (text == "success"){
						solarformSuccess();
					} else {
						solarsubmitMSG(false,text);
					}
				}
			});
		}

		function solarformSuccess(){
			$solarform[0].reset();
			solarsubmitMSG(true, "Message Sent Successfully!")
		}

		function solarsubmitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-success";
			} else {
				var msgClasses = "h3 text-danger";
			}
			$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
	}
	/* Solar form validation end */

	/* Animated Wow Js */	
	new WOW().init();
})(jQuery);