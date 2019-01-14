//Add Jquery
((function(){if(typeof(jQuery)=="undefined"){window.jQuery="loading";var a=document.createElement("script");a.type="text/javascript";a.src="//cdn.fnkr.net/jquery/jquery-2.0.3.js";a.onload=function(){console.log("jQuery "+jQuery.fn.jquery+" loaded successfully.")};a.onerror=function(){delete jQuery;alert("Error while loading jQuery!")};document.getElementsByTagName("head")[0].appendChild(a)}else{if(typeof(jQuery)=="function"){alert("jQuery ("+jQuery.fn.jquery+") is already loaded!")}else{alert("jQuery is already loading...")}}})())


// add jquery to page
var places = [];

var target = document.querySelector(".section-listbox .section-listbox");
// create an observer instance
var observer = new MutationObserver(function(mutations) {
  var results = $(".section-result-text-content");

  $(results).each(function(i, item) {
    places.indexOf(item) === -1 ? places.push({
          title: $(item).find(".section-result-title").text().trim(),
          address: $(item).find(".section-result-location").text().trim()
        })
      : null;
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
// pass in the target node, as well as the observer options
observer.observe(target, config);

