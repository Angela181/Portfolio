$(function(){

	$('header .btn a').on('click',function(evt){
		evt.preventDefault();
		var targetName = $(this).attr('href');
		var targetPosY = $(targetName).offset().top;
		$('html,body').animate({scrollTop:targetPosY},1000);

		console.log(targetPosY);

	})

	$('.top_yaji a').on('click',function(evt){
		console.log(evt);
		evt.preventDefault();
	$('html,body').animate({scrollTop:0},500);
	});

	var waypointBack = $('.license').waypoint(function(direction) {
		$('.license .inner').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var waypointBack = $('.back').waypoint(function(direction) {
		$('.back .inner').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var waypointBack = $('.back_sp').waypoint(function(direction) {
		$('.back_sp h2').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var System = $('.system_pc').waypoint(function(direction) {
		$('.system_pc .system_inner').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var System = $('.system_sp').waypoint(function(direction) {
		$('.system_sp h2').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var System = $('.system_sp').waypoint(function(direction) {
		$('.system_sp .system_sp_text').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var cv = $('.cv').waypoint(function(direction) {
		$('.cv .inner').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var cv = $('.cv_sp').waypoint(function(direction) {
		$('.cv_sp h2').addClass("fade-in");
	}, {
	  offset: '80%'
	});
	var cv = $('.cv_sp').waypoint(function(direction) {
		$('.cv_sp .cv_sp_f').addClass("fade-in");
	}, {
	  offset: '80%'
	});

	var ma_title = $('.ma').waypoint(function(direction) {
		$('.ma .inner').addClass("fade-in");
	}, {
	  offset: '80%'
	});


});