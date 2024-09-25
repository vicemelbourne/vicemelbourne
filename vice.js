function showAbout(e) {
	e.preventDefault();
	$(".about-content").show();
	$(".contact-content").hide();
	$(".updates-content").hide();
	$(".faq-content").hide();
}
function showContact(e) {
	e.preventDefault();
	$(".about-content").hide();
	$(".contact-content").show();
	$(".updates-content").hide();
	$(".faq-content").hide();
}
function showUpdates(e) {
	e.preventDefault();
	$(".about-content").hide();
	$(".contact-content").hide();
	$(".updates-content").show();
	$(".faq-content").hide();
}
function showFaq(e) {
	e.preventDefault();
	$(".about-content").hide();
	$(".contact-content").hide();
	$(".updates-content").hide();
	$(".faq-content").show();
}
function mediaQueryInit() {
const mediaQueryList = window.matchMedia("(max-width: 600px)");
	if (mediaQueryList.matches) {
		$(".logo").attr("src", "logo-mobile-min.png");
		$(".logo").attr("width", "100%");
		$("nav a").css("margin", "auto");
		$("nav a").css("font-size", "20px");
		$("nav a").css("padding", "10px");
		$("body").css("overflow-y", "auto");
		$("body").css("background-image", "mobile-min.jpg");
		$(".about").text("About");
		console.log("max width 600 or less");
	} else {
		console.log("max width over 600");
	}
}
$(document).ready(function() {
	$(".about-content").show(); // default content
	$(".contact-content").hide();
	$(".updates-content").hide();
	$(".faq-content").hide();
	mediaQueryInit();
	$("body").on("click", ".about", showAbout);
	$("body").on("click", ".contact", showContact);
	$("body").on("click", ".updates", showUpdates);
	$("body").on("click", ".faq", showFaq);
});