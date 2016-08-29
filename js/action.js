$(document).ready(function(){

	$(".content2").html("");

	$('html, body').animate({
		    scrollTop: $(".header").offset().top
		 }, 1);



	$(".header .bottom .mid ul li").mouseenter(function(){
		$(this).addClass("active");
	});

	$(".header .bottom .mid ul li").mouseleave(function(){
		$(this).removeClass("active");
	});




	$(".content1 .content1top .content1topcontent .profile").mouseenter(function(){
		$(this).css("background-color", "#0076ef");
	});

	$(".content1 .content1top .content1topcontent .profile").mouseleave(function(){
		$(this).css("background-color", "#00aeef");
	});

	$(".content1 .content1top .content1topcontent .search").mouseenter(function(){
		$(this).css("background-color", "0076ef");
	});

	$(".content1 .content1top .content1topcontent .search").mouseleave(function(){
		$(this).css("background-color", "#00aeef");
	});

	$(".content1 .content1top .content1topcontent .connect").mouseenter(function(){
		$(this).css("background-color", "0076ef");
	});

	$(".content1 .content1top .content1topcontent .connect").mouseleave(function(){
		$(this).css("background-color", "#00aeef");
	});





	$(".content1 .content1bottom .content1bottomcontent .cprofile").mouseenter(function(){
		$(this).css("background-color", "#45c445");
	});

	$(".content1 .content1bottom .content1bottomcontent .cprofile").mouseleave(function(){
		$(this).css("background-color",  "#8dc63f");
	});

	$(".content1 .content1bottom .content1bottomcontent .filterlikes").mouseenter(function(){
		$(this).css("background-color", "#45c445");
	});

	$(".content1 .content1bottom .content1bottomcontent .filterlikes").mouseleave(function(){
		$(this).css("background-color", "#8dc63f");
	});

	$(".content1 .content1bottom .content1bottomcontent .connectandhire").mouseenter(function(){
		$(this).css("background-color", "#45c445");
	});

	$(".content1 .content1bottom .content1bottomcontent .connectandhire").mouseleave(function(){
		$(this).css("background-color", "#8dc63f");
	});

	$(".header2 .header2nav button.SearchButton.btn-default").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".content2").offset().top
		 }, 2000);
	});

	$(".header .bottom .mid ul li#home").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".header").offset().top
		 }, 2000);
	});

	$(".header .bottom .mid ul li#jobseekers").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".content1 .content1top").offset().top
		 }, 2000);
	});

	$(".header .bottom .mid ul li#employers").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".content1 .content1bottom").offset().top
		 }, 2000);
	});

	$(".header .bottom .mid ul li#aboutus").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".footer").offset().top
		 }, 2000);
	});

	$(".header .bottom .mid ul li#blog").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".footer").offset().top
		 }, 2000);
	});

	$(".header .bottom .mid ul li#contact").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".footer").offset().top
		 }, 2000);
	});


	$(".footer .footerright ul li#home").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".header").offset().top
		 }, 2000);
	});

	$(".footer .footerright ul li#contact").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".header").offset().top
		 }, 2000);
	});

	$(".footer .footerright ul li#aboutus").click(function() {
	    $('html, body').animate({
		    scrollTop: $(".header").offset().top
		 }, 2000);
	});







});