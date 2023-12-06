// $(document).ready(function() {//execute after all the html doc & CSS has been loaded 

// 	// The following  condition executes once and doesn't change if resizing occurs (change occurs when we reload it again with different size windows)
// 	if ($(window).width() <= 768) {	// when the document loads everything on the current size of the browser, if the width<=768 
// 		$('.footer-links-wrapper').addClass("toggleCollapse");//add "toggleCollapse" class to the footer link wrapper
// 	} else {
// 		$('.footer-links-wrapper').removeClass("toggleCollapse"); //else if the current size of the browser >= 768 remove "toggleCollapse" class from the footer link wrapper(N.B. if we loaded everything on maximized window, there wouldn't be a "toggleCollapse" class to remove in the first place because it hasn't been added to it.)
// 	}

// // For the  following code to execute, resizing must occur at least once
// 	$(window).on('resize', function(event) {// if resizing occurs
// 		if ($(window).width() <= 768) {
// 			$('.footer-links-wrapper').addClass("toggleCollapse");
// 			// $('.footer-links-wrapper ul').hide();// hides the ul that has been expanded on mobile view and has been forgotten(the "toggleCollapse" class was removed when the "$(this).next('ul').slideToggle() was on slideDown")to be collapsed and was then maximized.(you can see the effect when you swith to mobile view again.)
// 			$(".footer-links-wrapper h3").removeClass("expanded"); // remove the "expanded"class(on the "style.css" file it adds the content collapse(x) icon)  so that the expand(+) sign will return back
// 		} else {s
// 			$('.footer-links-wrapper').removeClass("toggleCollapse");
// 			// $('.footer-links-wrapper ul').show();// shows the ul that has been expanded and then collapsed((the "toggleCollapse" class was added when the "$(this).next('ul').slideToggle() was on slideUp" )) on mobile view and has been forgotten to be expanded again and was then maximized.(you can see the effect on the maximized window )
// 		}
// 	});
// 	// Footer collapse functionality
// 	$(document).on("click", ".toggleCollapse h3", function() {
// 		$(this).next('ul').slideToggle();// slide toggle the "ul" of the clicked h3 element ("this")// next() means the sibling("ul") of "this"(the clicked "h3" element)
// 		$(this).toggleClass("expanded");//add and remove the "expanded" class on the clicked h3 element("this")

// 	});
// 	// Search bar
// 	$('.search-link').click(function (event) {
// 		event.preventDefault();
// 		$(".navbar-collapse.collapse").removeClass("show");// remove the buit in "show" class of the "collapse" bootstrap(This hides the nav-bar when we are on mobile view)
// 		$(".searchbox").slideToggle(); //slideToggle the search box element on both mobile and maximized window widths
// 	});

// });

