$(function() {

	// Fixed Header =================

	let header = $("#header"); //объявление переменной
	let intro = $("#intro");
	let introH = intro.innerHeight(); //находит высоту элемента с пэдингом
	let scrollPos = $(window).scrollTop(); //находит позицию скролла от верха в пикселях
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {  //следит за скролом и при изменении размера окна
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH) {
			header.addClass("fixed"); //придание класса переменной
		} else {
			header.removeClass("fixed"); //придание класса переменной
		}
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function(event) { //задаем событие для клика
		event.preventDefault(); // отменяет стандартное поведение ссылки при клики

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top; //вбивает в переменную сколько пикселей от блока до верха

		nav.removeClass("show");

		$("html, body").animate({ //делает анимацию скрола до блока при нажатии на ссылку
			scrollTop: elementOffset - 70
		}, 700); //цифра - это время анимации в милисекундах
	});


	// NavToggle ================
	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show"); //при нажатии показывать меню, убирать

	});


	// Reviews https://kenwheeler.github.io/slick/
	let slider = $("#reviewsSlider");
	slider.slick({
		infinite: true, // бесконечно слайдится, закончилось - началось заново
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true, // один исчезал, другой появлялся на его месте
		arrows: false, // убирает кнопки
		dots: true
	});




});