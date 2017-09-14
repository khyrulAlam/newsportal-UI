//Moment Bangla date


var day =  moment().format('dddd');
var date =  moment().format('Do MMMM YYYY');
document.getElementById('date').innerHTML = date;
document.getElementById('day').innerHTML = day;


//Section Hide Show
$(function(){
  $('#hbutton').click(function(){
    $(this).text($(this).text() == 'প্রদর্শন' ? 'লুকান' : 'প্রদর্শন');
    $('.hs').toggle('slow');
  });
  $('#hbutton2').click(function(){
    $(this).text($(this).text() == 'প্রদর্শন' ? 'লুকান' : 'প্রদর্শন');
    $('.hs2').toggle('slow');
  });
  $('#hbutton3').click(function(){
    $(this).text($(this).text() == 'প্রদর্শন' ? 'লুকান' : 'প্রদর্শন');
    $('.hs3').toggle('slow');
  });
  $('#hbutton4').click(function(){
    $(this).text($(this).text() == 'প্রদর্শন' ? 'লুকান' : 'প্রদর্শন');
    $('.hs4').toggle('slow');
  });
})
