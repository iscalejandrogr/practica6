// JavaScript Document

var jQT = new $.jQTouch({
                themeSelectionSelector: '#jqt'
            });
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		//Acelerometro
		var ace=$('#acelerometro');
		var watchID	=null;
		ace.find('.individual li').tap(function(){
			if($(this).index()==0)
			{
				
var watchID = navigator.accelerometer.watchAcceleration(function(a){
	ace.find('h2').text('Posicion Actual');
	ace.append('<ul class="plastic pos">'+
	'<li>X: '+a.x+'</li>'+
	'<li>Y: '+a.y+'</li>'+
	'<li>Y: '+a.z+'</li>'+
	'</ul>');
	}, function(err){
		alert(err.code);
		}, {frequency: 500});
				
				}
				
		if($(this).index()==1)
		{
			
			if(watchID !== null)
			{
				ace.find('h2').text('Detenido');
				ace.find('.pos').remove();
				navigator.accelerometer.clearWatch(watchID);
				watchID=null;
				}
			}
			
			})	
			
		//Brujula
		var bru=$('#brujula');
		var watchID	=null;
		bru.find('.individual li').tap(function(){
			if($(this).index()==0)
			{
				
var watchID = navigator.compass.watchHeading(function(h){
	bru.find('h2').text('Posicion Actual');
	bru.append('<ul class="plastic pos">'+
	'<li>X: '+h.magneticHeading+'</li>'+
	'</ul>');
	}, function(err){
		alert(err.code);
		}, {frequency: 500});
				
				}
				
		if($(this).index()==1)
		{
			
			if(watchID !== null)
			{
				bru.find('h2').text('Detenido');
				bru.find('.pos').remove();
				navigator.compass.clearWatch(watchID);
				watchID=null;
				}
			}
			
			})
		},false);
		});