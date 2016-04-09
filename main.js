



//Below is the function for the slideshow
$(function() {
  var sectionOne = $('.sectionOne');
  var backgrounds = ['url(assets/sunlightgirl.jpg)', 'url(assets/frontpagebackground.jpg)', 'url(assets/cupoffruit.jpg)', 'url(assets/yogastance.jpg)', 'url(assets/foodhealthyfruitsbreakfast.jpg)'];
var current = 0;

function nextBackground() {
  sectionOne.css(
   'background',
    backgrounds[current = ++current % backgrounds.length]
 );

 setTimeout(nextBackground, 5000);
 }
 setTimeout(nextBackground, 5000);
   sectionOne.css('background', backgrounds[0]);
 });
