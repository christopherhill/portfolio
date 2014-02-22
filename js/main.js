$(document).ready(function() {

	try {
		if (isIE === true) {
			$("#myModal").modal();
		}
	} catch(err) {

	}

	$(".flip-container").on('mouseover mouseout', function() {
		$(this).toggleClass('hover');
	});

	$(".technologies").find("span").addClass("label label-info");
	$(".apis").find("span").addClass("label label-default");
	$(".stack").find("span").addClass("label label-inverse");

	$('a.smoothScroll').click(function(){
		$('html, body').animate({
		  scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 80
		}, 500);
		return false;
	});

	$("#tableControlButton").click(function() {
		
		var curState = $("#tableContainer").hasClass("collapsed");
		console.log(curState);

		if (curState) {
			
			$("#tableContainer").removeClass("collapsed");
			$("#tableControlButton").find("i").removeClass("icon-arrow-down").addClass("icon-arrow-up");

			$("#tableContainer").slideDown("slow", function() {
				$('html, body').animate({ scrollTop: document.height }, 1500);
			});

		} else {
			
			$("#tableContainer").slideUp("slow", function() {
				$('html, body').animate({ scrollTop: 0 }, 1500);				
			});

			$("#tableContainer").addClass("collapsed");
			$("#tableControlButton").find("i").removeClass("icon-arrow-up").addClass("icon-arrow-down");

		}

	});


	$("#tableControlButtonLinks").click(function() {
		
		var curState = $("#tableContainerLinks").hasClass("collapsed");
		console.log(curState);

		if (curState) {
			
			$("#tableContainerLinks").removeClass("collapsed");
			$("#tableControlButtonLinks").find("i").removeClass("icon-arrow-down").addClass("icon-arrow-up");

			$("#tableContainerLinks").slideDown("slow", function() {
				$('html, body').animate({ scrollTop: document.height }, 1500);
			});

		} else {
			
			$("#tableContainerLinks").slideUp("slow", function() {
				$('html, body').animate({ scrollTop: 0 }, 1500);				
			});

			$("#tableContainerLinks").addClass("collapsed");
			$("#tableControlButtonLinks").find("i").removeClass("icon-arrow-up").addClass("icon-arrow-down");

		}

	});

});