import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert/Alert";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import "./commonResources/css/bootstrap.css";
import "./commonResources/css/styles.css";
import $ from "jquery";
import { useEffect } from "react";
import Youtube from "./Components/Youtube/Youtube";
import Applenews from "./Components/Applenews/Applenews";
import APIData from "./Components/APIfromDatabase/APIData";






function App() {
  useEffect(() => {
    $(document).ready(function() {//execute after all the html doc & CSS has been loaded 

      // The following  condition executes once and doesn't change if resizing occurs (change occurs when we reload it again with different size windows)
      if ($(window).width() <= 768) {	// when the document loads everything on the current size of the browser, if the width<=768 
        $('.footer-links-wrapper').addClass("toggleCollapse");//add "toggleCollapse" class to the footer link wrapper
      } else {
        $('.footer-links-wrapper').removeClass("toggleCollapse"); //else if the current size of the browser >= 768 remove "toggleCollapse" class from the footer link wrapper(N.B. if we loaded everything on maximized window, there wouldn't be a "toggleCollapse" class to remove in the first place because it hasn't been added to it.)
      }
    
    // For the  following code to execute, resizing must occur at least once
      $(window).on('resize', function(event) {// if resizing occurs
        if ($(window).width() <= 768) {
          $('.footer-links-wrapper').addClass("toggleCollapse");
          $('.footer-links-wrapper ul').hide();// hides the ul that has been expanded on mobile view and has been forgotten(the "toggleCollapse" class was removed when the "$(this).next('ul').slideToggle() was on slideDown")to be collapsed and was then maximized.(you can see the effect when you swith to mobile view again.)
          $(".footer-links-wrapper h3").removeClass("expanded"); // remove the "expanded"class(on the "style.css" file it adds the content collapse(x) icon)  so that the expand(+) sign will return back
        } else {
          $('.footer-links-wrapper').removeClass("toggleCollapse");
          $('.footer-links-wrapper ul').show();// shows the ul that has been expanded and then collapsed((the "toggleCollapse" class was added when the "$(this).next('ul').slideToggle() was on slideUp" )) on mobile view and has been forgotten to be expanded again and was then maximized.(you can see the effect on the maximized window )
        }
      });
      // Footer collapse functionality
      $(document).on("click", ".toggleCollapse h3", function() {
        $(this).next('ul').slideToggle();// slide toggle the "ul" of the clicked h3 element ("this")// next() means the sibling("ul") of "this"(the clicked "h3" element)
        $(this).toggleClass("expanded");//add and remove the "expanded" class on the clicked h3 element("this")
    
      });
      
    
    });
    
    
  }, []);
  return (
    <div>

      <Header />
      <Alert />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Youtube />
      <Applenews />
      <Footer />
      
    </div>
  );
}

export default App;
