if (document.title.indexOf("DN") != -1) {
  var checkAddblock = setInterval(function() {
   if ($('#pwOverlay').length) {
	      console.log("checkAddblock!");
	      $('#pwOverlay').remove();
	      clearInterval(checkAddblock);
	   }
	}, 100);

   var checkPaywall = setInterval(function() {
   if ($('.paywall--active').length) {
	      console.log("Remove DN!");
	      removePaywallDN();
	      clearInterval(checkPaywall);
	   }
	}, 100);
} else {
	/* var checkPaywall = setInterval(function() {
	 if ($('.serviceplusPaywallpaywall-container').length) {
	      console.log("Remove DI!");
	      removePaywallDI();
	      clearInterval(checkPaywall);
	   }
	}, 100);*/
}



function removePaywallDN() {
    jQuery('.paywall').css("display", "none");
    jQuery('.article__premium-content').css("display", "block");
	jQuery('.article__body-grid').css("position", "initial");
	jQuery('.article__lead').css("overflow", "initial");
	jQuery('.article__lead').css("position", "initial");
	jQuery('.article__lead').css("max-height", "initial");
    console.log("Paywall removed!");
}

function removePaywallDI() {
    jQuery('.paywall-content').css("height", "inherit");
	jQuery('.serviceplusPaywallpaywall-container').css("display", "none");
    console.log("Paywall removed!");
}
