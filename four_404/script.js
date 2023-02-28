$(document).ready(function(){

    var path1 = document.querySelector('.four');
    var four_len = path1.getTotalLength();
    var path2 = document.querySelector('.cube');
    var cube1 = path2.getTotalLength();
    
    $('.four').css({"stroke-dasharray":four_len,"stroke-dashoffset":four_len});
    $('.cube').css({"stroke-dasharray":cube1,"stroke-dashoffset":cube1});
setTimeout(function(){
$(".four, .cube").css({'stroke-dasharray':'none'});
$(".four, .cube").addClass('color_anim');
$(".svg-a").addClass('hang');
},5500);


});