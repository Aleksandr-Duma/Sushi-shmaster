$(function(){

	$('.slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '10px',
		prevArrow: '<img class="slider-arrows__left" src="img/left-arrow.png" alt="arrow">',
		nextArrow: '<img class="slider-arrows__right" src="img/right-arrow.png" alt="arrow">',
		dots: true,
		fade: true
	});

	let date = new Date();
	let copy = document.querySelector('.copy-date').innerHTML = date.getFullYear();
	
});
