var App = (function(){
	var elements = {
		index: $(".index"),
		logo: $("#logo"),
		mainNav: $("#main-nav"),
		menuToggle: $("#mobile-menu-toggle"),
		news: $("#news-events"),
		tabs: $("#tabs"),
		tabNews: $("#tab-news"),
		tabEvents: $("#tab-events"),
		teamImages: $(".team-images"),
		inputName: $("#name"),
		inputEmail: $("#email"),
		inputMessage: $("#message"),
		inputSubmit: $("#contact-form-submit")
	};

	var email_regex = /^([a-zA-Z0-9_.+-]+)\@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,4})$/;

	var init = function(){
		console.log("App.init()");

		elements.logo.click(function(event) {
			event.preventDefault();
			$("html, body").animate({scrollTop:0}, '500', 'swing', function() { 

			});
		});

		elements.menuToggle.click(function(event) {
			elements.mainNav.toggleClass('toggle-nav');
		});


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


		loadNewsImages();
		loadTeamImages();
		initTeamImages();
		initValidation();
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

	var initValidation = function(){
		elements.inputSubmit.click(function(event) {
			event.preventDefault();
			validateForm();
		});
	};

	var validateForm = function(){
		var email = $.trim(elements.inputEmail.val());
		var message = $.trim(elements.inputMessage.val());
		var name = $.trim(elements.inputName.val());
		var validMail = isValidMail(email);
		var validMessage = isValidMessage(message);
		var validName = isValidName(name);

		if(validMail && validMessage && validName){
			elements.inputSubmit.addClass('form-send');
			elements.inputSubmit.html("Gesendet");
			elements.inputSubmit.attr('disabled', 'true');
			elements.inputEmail.attr('disabled', 'true');
			elements.inputMessage.attr('disabled', 'true');
			elements.inputName.attr('disabled', 'true');
		}
	};

	var isValidMail = function(email){
		var valid = email_regex.test(email);
		if(valid === true){
			elements.inputEmail.next('label').css('display', 'none');
		}else{
			elements.inputEmail.next('label').css('display', 'block');
		}
		return valid;
	};

	var isValidMessage = function(message){
		var valid = message.length > 0? true: false;
		if(valid === true){
			elements.inputMessage.next('label').css('display', 'none');
		}else{
			elements.inputMessage.next('label').css('display', 'block');
		}
		return valid;	
	};

	var isValidName = function(name){
		var valid = name.length > 0? true: false;
		if(valid === true){
			elements.inputName.next('label').css('display', 'none');
		}else{
			elements.inputName.next('label').css('display', 'block');
		}
		return valid;	
	};

	return{
		init: init
	};
})();

App.init();