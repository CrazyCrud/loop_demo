var App = (function(){
	var elements = {
		news: $("#news-events"),
		tabs: $("#tabs"),
		tabNews: $("#tab-news"),
		tabEvents: $("#tab-events")
	};
	var init = function(){
		console.log("App.init()");

		elements.tabNews.click(function(event) {
			elements.tabs.find('.tab-active').removeClass('tab-active');
			$(this).addClass('tab-active');
			elements.news.attr('class', '');
			elements.news.addClass('news-active');
		});

		elements.tabEvents.click(function(event) {
			elements.tabs.find('.tab-active').removeClass('tab-active');
			$(this).addClass('tab-active');
			elements.news.attr('class', '');
			elements.news.addClass('events-active');
		});
	};
	return{
		init: init
	};
})();

App.init();