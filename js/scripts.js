// RANDOMIZE HEADDER

// Store & Generate Number
//images must be saved as numbers
var maxRand = 2;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = 'thumbs/1.png'; //orange
var img1 = 'thumbs/2.png'; //quadcopter

// Show Images
$('header img').attr('src', eval('img' + numRand));

// ACTIVATE GALLERY
$('figure').lightGallery();