var App = (function(){
	var elements = {
		news: $(".news"),
		tabs: $("#tabs"),
		tabNews: $("#tab-news"),
		tabEvents: $("#tab-events")
	};
	var init = function(){
		console.log("App.init()");

		elements.tabNews.click(function(event) {
			elements.tabs.find('.tab-active').removeClass('tab-active');
			$(this).addClass('tab-active');
			elements.news.css('margin-left', '0');
		});

		elements.tabEvents.click(function(event) {
			elements.tabs.find('.tab-active').removeClass('tab-active');
			$(this).addClass('tab-active');
			elements.news.css('margin-left', '-100%');
		});
	};
	return{
		init: init
	};
})();

App.init();