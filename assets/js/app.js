function hideAllPages() {
	$('.appPage').hide();
}
$('.nav li a').click(function() {
	var menuId = this.id,
	pageName = menuId.replace("menu",""),
	pageId = pageName[0].toLowerCase() + pageName.substr(1) + 'Page';

	console.log(pageId);
	hideAllPages();
	$('#'+ pageId).show();
});

$('#menuHome').click(function(){
	hideAllPages();
	$('#homePage').show();
});
$('#menuFilms').click(function(){
	hideAllPages();
	$('#filmsPage').show();
});

hideAllPages();
if (window.location.hash.length <= 0) {
	$('#homePage').show();
} else {
	$(window.location.hash + "Page").show();
}