

$(document).ready(function() {

	try {
		if (isIE === true) {
			$("#myModal").modal();
		}
	} catch(err) {

	}

	/* if (typeof(isIE) != undefined && isIE === true) {
		$("#myModal").modal();
	} */

	$(".flip-container").on('mouseover mouseout', function() {
		console.log('fired');
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
	/* PDFJS.getDocument('assets/resume.pdf').then(function(pdf) {
	  // Using promise to fetch the page
	  pdf.getPage(1).then(function(page) {
	    var scale = 1.5;
	    var viewport = page.getViewport(scale);

	    //
	    // Prepare canvas using PDF page dimensions
	    //
	    var canvas = document.getElementById('the-canvas');
	    var context = canvas.getContext('2d');
	    canvas.height = viewport.height;
	    canvas.width = viewport.width;

	    //
	    // Render PDF page into canvas context
	    //
	    var renderContext = {
	      canvasContext: context,
	      viewport: viewport
	    };
	    page.render(renderContext);
	  });
	}); */

});