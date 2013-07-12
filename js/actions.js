//actions
var jQT = new $.jQTouch({
               /* icon: 'jqtouch.png',
                icon4: 'jqtouch4.png',
                addGlossToIcon: false,
                startupScreen: 'jqt_startup.png',
                statusBar: 'black-translucent',*/
                themeSelectionSelector: '#jqt'/* #themes ul',
                preloadImages: []*/
            });
$(document).ready(function(e) {
  document.addEventListener("deviceready", function(){
    //acelerometro
    var ace=$('#acelerometro');
    var watchID=null;
    ace.find('.individual li').tap(function(){
      if($(this).index()==0){
var watchID = navigator.accelerometer.watchAcceleration(function (a) {
   ace.find('Posición Actual');
   ace.append('<ul class="post">'+'<li>X'+a.x+'</li>'+'<li>Y'+a.y+'</li>'+'<li>Z'+a.z+'</li>'+'</ul>');
}, function (err) {
  alert(err.code);
}, {Frecuency; 500});
      
      }
      if($(this).index()==1){
	if(watchID){
	  ace.find('h2'.text('Detenido'));
	  ace.find('.pos').remove();
	  navigator.accelerometer.clearWatch(watchID);
	  watchID=null;
	}
      }
    });
    //Brujula
    var bru=$('#brujula');
    var watchID=null;
    bru.find('.individual li').tap(function(){
      if($(this).index()==0){
var watchID = navigator.compass.watchHeading(function (h) {
   bru.find('h2').text('Posición Actual');
   bru.append('<ul class="post">'+'<li>'+h.magneticHeading+'</li>'+'</ul>');
}, function (err) {
  alert(err.code);
}, {Frecuency; 500});
      
      }
      if($(this).index()==1){
	if(watchID){
	  bru.find('h2'.text('Detenido'));
	  bru.find('.pos').remove();
	  navigator.compass.clearWatch(watchID);
	  watchID=null;
	}
      }
    });
  }, false);

});