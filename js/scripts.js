// ACTIVATE GALLERY
$('figure').lightGallery();

// Intialize Masonry
$('.masonry').masonry({
	itemSelector: 'section',
	// MUST MATCH CSS
    columnWidth: 400,
	gutter: 10,
	isFitWidth: true
});