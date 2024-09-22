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
$(document).ready(function() {
	$(".about-content").show(); // default content
	$(".contact-content").hide();
	$(".updates-content").hide();
	$(".faq-content").hide();
	$("body").on("click", ".about", showAbout);
	$("body").on("click", ".contact", showContact);
	$("body").on("click", ".updates", showUpdates);
	$("body").on("click", ".faq", showFaq);
});