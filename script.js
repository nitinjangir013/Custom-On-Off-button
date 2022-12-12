var isOn = false;
$('.button').on('click',function(){
  if(isOn==false)
   {
     $(this).css({left:'80px'});
     $(this).parent().children('.button_name').css({background: 'linear-gradient(rgba(96,220,46,1),rgba(29,175,68,1))'});
     isOn=true;
   }
  else
  {
    $(this).css({left:'0px'});
    $(this).parent().children('.button_name').css({background: 'linear-gradient(rgba(255,255,525,1),rgba(213,213,213,1))'});
    isOn=false;
  }
});