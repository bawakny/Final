
    	$.ajax({
url: "notification.json",
type: "GET",
dataType: "json",
success: function (data) {
	
    document.getElementById("notifications").innerHTML=data.text  ;
	
}
});






$('.tab').click(function(){
	var $this = $(this);
	 $('.tab').removeClass('selected');
	$this.addClass('selected');
	alert($this.attr('id'));
	
	
});

