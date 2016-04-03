//Below is the styling for the images as they are loaded
$('.sectionOne').on('load',function(){
    var css;
    var ratio=$(this).width() / $(this).height();
    var pratio=$(this).parent().width() / $(this).parent().height();
    if (ratio<pratio) css={width:'auto', height:'100%'};
    else css={width:'100%', height:'auto'};
    $(this).css(css);
});



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
