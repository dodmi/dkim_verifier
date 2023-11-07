Components.utils.import("resource://gre/modules/Services.jsm");

function onLoad(paneID) {
	var fadeInEffect = Services.prefs.
		getBoolPref("browser.preferences.animateFadeIn");
	if (!fadeInEffect) {
		// @ts-expect-error
		window.sizeToContent();
	} else {
		var currentPane = document.getElementById(paneID);
		// @ts-expect-error
		var changeWidthBy = currentPane._content.scrollWidth - currentPane._content.clientWidth;
		window.resizeBy(changeWidthBy, 0);
	}
}

var gDKIMonpaneload = this.onLoad;
