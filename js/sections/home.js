var App = (function(){
	var elements = {
		index: $(".index"),
		mainNav: $("#main-nav"),
		menuToggle: $("#mobile-menu-toggle"),
		news: $("#news-events"),
		tabs: $("#tabs"),
		tabNews: $("#tab-news"),
		tabEvents: $("#tab-events"),
		teamImages: $(".team-images")
	};
	var init = function(){
		console.log("App.init()");

		//var height = $(".news-container").height();
		//elements.news.css('height', height + 'px');

		elements.menuToggle.click(function(event) {
			elements.mainNav.toggleClass('toggle-nav');
		});


		elements.tabNews.click(function(event) {
			elements.tabs.find('.tab-active').removeClass('tab-active');
			$(this).addClass('tab-active');
			elements.news.attr('class', '');
			elements.news.addClass('news-active');
			//var height = $(".news-container").height();
			//elements.news.css('height', height + 'px');
		});

		elements.tabEvents.click(function(event) {
			elements.tabs.find('.tab-active').removeClass('tab-active');
			$(this).addClass('tab-active');
			elements.news.attr('class', '');
			elements.news.addClass('events-active');
			//var height = $(".events-container").height();
			//elements.news.css('height', height + 'px');
		});


		loadNewsImages();
		loadTeamImages();
		initTeamImages();
	};

	var loadNewsImages = function(){
		elements.news.find('div[data-image-link]').each(function(index, el) {
			var imgLink = $(this).attr('data-image-link');
			$(this).css('background-image', 'url(' + imgLink + ')');
			$(this).css('background-size', 'cover');
		});
	};

	var loadTeamImages = function(){
		elements.teamImages.children('.team-image').each(function(index, el) {
			var imgLink = $(this).attr('data-image-link');
			$(this).css('background-image', 'url(' + imgLink + ')');
		});
	};

	var initTeamImages = function(){
		elements.teamImages.children('.team-image').hover(function() {
			$(this).addClass('team-member-active');
			if(($(this).offset().left + $(this).width()) > ($(window).width() - $(this).width())){
				$(this).addClass('fade-left');
			}else{
				$(this).addClass('fade-right');
			}		
		}, function() {
			$(this).removeClass('team-member-active');
			if($(this).hasClass('fade-right')){
				$(this).removeClass('fade-right');
			}else{
				$(this).removeClass('fade-left');
			}
		});
	};
	return{
		init: init
	};
})();

App.init();