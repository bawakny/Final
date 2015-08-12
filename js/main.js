/*
function autoResize(id){
    var newheight;
 console.log("hhhhhhhh");   
console.log(document.getElementById(id).contentWindow.document.body.scrollHeight);
     
        newheight=document.getElementById(id).contentWindow.document.body.scrollHeight;
        
    
	alert(newheight);
    document.getElementById(id).height= newheight + "px";
    
}


*/


    	$.ajax({
url: "notification.json",
type: "GET",
dataType: "json",

success: function (data) {
	
    document.getElementById("notifications").innerHTML=data.text  ;
	
	if( data.text == "")
	
		$(".notifications").css("display", "none");
		 
},
error: function(result){
	
	console.log("ffffff");
	console.log( result.status + ' ' + result.statusText);
	$(".notifications").css("display", "none");
}
});




$('.tools .arrow').click(function(){
	
	$frame= $(this).parent().parent().next().attr('class');
	$link= $('.'+$frame+' iframe').attr('src');
	
	$('#arrow1').attr("href","http://ynet.co.il/");
	
	
});

$('.dropDownOption').click(function (){
	
	var $display= $('.expandedOption').css("display");
	  
	  if ($display == "none"){
		  
		  $('.expandedOption').fadeIn(150);
		  $('.tools .arrow').href='http://ynet.co.il/';
	  }
	else
	 $('.expandedOption').fadeOut(150)
	$('.tools .arrow').attr("href","http://ynet.co.il/");
	 
});




 $('.expandedOption').click(function (){
	 
	 
	 $('.dropDownOption').html($(this).html()+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');
	  $('.expandedOption').css("display","none");
	 
});

$('.expandedOption').hover(function(){
	$(this).addClass('selected');	
	$('.expandedOption').removeClass('selected');
		
	$(this).addClass('selected');
	
});

$('.tab').click(function(){
	var $this = $(this);
	 $('.tab').removeClass('selected');
	$this.addClass('selected');
	$('.tabframe').css("display","none");
	$('.'+$this.attr('id')+'Frame').css("display","block");
	
	//alert($this.attr('id'));
	
	
});

