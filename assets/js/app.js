function hideAllPages() {
	$('.appPage').hide();
}
function setActiveMenu(menuId) {
	$('.nav li').removeClass('active');
	$('#'+ menuId).parent().addClass('active');
}
$('.nav li a').click(function() {
	var menuId = this.id,
	pageName = menuId.replace("menu",""),
	pageId = pageName[0].toLowerCase() + pageName.substr(1) + 'Page';

	hideAllPages();
	$('#'+ pageId).show();
	setActiveMenu(menuId);
});

hideAllPages();
if (window.location.hash.length <= 0) {
	$('#homePage').show();
	setActiveMenu('menuHome');
} else {
	$(window.location.hash + 'Page').show();
	var menuId = window.location.hash.substr(1);
	setActiveMenu('menu'+ menuId[0].toUpperCase() + menuId.substr(1));
}