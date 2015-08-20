$('#frame1 , .arrow , .chooseReport , .SaveCancel label').css("display","none");


 
 
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


	checkHashtab();

function checkHashtab() {
	var hash = location.hash;

	$('.tabframe').css("display","none");
	if (hash == "#My-Folders") $("#tab2 a").addClass("selected");
	
	else if (hash == "#My-Team-Folders") $("#tab3 a").addClass("selected");
	else if (hash == "#Public-Reports") $("#tab4 a").addClass("selected");
	else $("#tab1 a").addClass("selected");
	
}


$('.optionSelect li').click(function(){
	
	
	
	 
	window.open("http://netcraft.co.il", '_blank');
	
});
$.ajaxSetup({ cache: false });

    	$.ajax({
url: "notification.json",
type: "GET",
dataType: "json",
async: false,
success: function (data) {
	
    document.getElementById("notifications").innerHTML=data.text  ;
	
	if( data.text == "")
	
		$(".notifications").css("display", "none");
		 
},
error: function(result){
	
	 
	 
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







	
	


$('.tab1Frame .settings img').click(function(){
	
	$(this).parent().css("background-color","white");
	$('.tab1Frame .editContainer').fadeIn(500);
	$('.tab1Frame .editContainer').css("display","block");
	
});
$('.tab3Frame .settings img').click(function(){
	
	$(this).parent().css("background-color","white");
	$('.tab3Frame .editContainer').fadeIn(500);
	$('.tab3Frame .editContainer').css("display","block");
	
});

$('.SaveCancel label').click(function(){
	
	$('.settings').css("background-color","transparent");
	$('.editContainer').fadeOut(500);
	$('.editContainer').css("display","none");
	
});





var tabSites = angular.module('tabSites',[]);





 

tabSites.controller('tab',function($scope, $window){
	
	
	var tabs;
	var site =[{
            "name": "",
            "url": ""
        } 
    ];
		
		 
	function updateSite(i) {
		if (i==1)
		$('#frame1').attr("src",$scope.sites[0].url);
		if (i==3)
			$('#frame3').attr("src",$scope.sites[0].url);
    $('.dropDownOption').html($scope.sites[0].name+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');  
		
	$scope.linkVar=$scope.sites[0].url;
}

	
	function tabSelected(tabId) {
		var $url;
	 $('.tab  a').removeClass("selected");
		
		$('.tab div').css("background-color","#646464");
		$('.tab > a').css("color","white");
		
		$("#"+ tabId + " a").css("color","black");
		$("#"+ tabId + " a").addClass("selected");
		
		$("#"+ tabId + " div").css("background-color","#EBEBEB ");
		
		$('.tabframe').css("display","none");
		$('.'+tabId+'Frame').css("display","block");	
		if ($('#tab2 a').attr("class") == "selected") {
			$url = "http://www.paulirish.com/";
			$('#frame2').attr("src",$url); 
			
		}
		else if ($('#tab4 a').attr("class") == "selected") {
			$url = "http://addyosmani.com/blog/";
			$('#frame4').attr("src",$url); 
			
		}
		else if ($('#tab1 a').attr("class") == "selected") {
			tabs = localStorage.getItem(tabId);
			
			
			if (tabs == null)	$(".tab1Frame .settings img" ).trigger( "click" );
			else{
				site = JSON.parse(tabs);
				$scope.sites= site; 
				$('#frame1 ,.tab1Frame .arrow ,.tab1Frame .chooseReport ,.tab1Frame .SaveCancel label').css("display","inline");
				updateSite(1);
		}
		 
		}
		else if ($('#tab3 a').attr("class") == "selected") {
			
			tabs = localStorage.getItem(tabId);
			
			
			
			if (tabs == null)	$(".tab3Frame .settings img" ).trigger( "click" );
			else{
				site = JSON.parse(tabs);
				$scope.sites= site; 
				$('#frame3 ,.tab3Frame  .arrow ,.tab3Frame  .chooseReport , .tab3Frame .SaveCancel label').css("display","inline");
				updateSite(3);
		}
		}
	
}

	
	checkHash();

function checkHash() {
	var hash = location.hash;

	
	if (hash == "#My-Folders") tabSelected("tab2");
	
	else if (hash == "#My-Team-Folders") tabSelected("tab3");
	else if (hash == "#Public-Reports") tabSelected("tab4");
	else tabSelected("tab1");
	
}

		// $window.alert($('#tab2 a').attr("class"));
		
	//if ($('#tab2 a').attr("class") == selected)	 $window.alert( "hover");
		
		
		$scope.tabButton = function(event){
		
		
		var $tabId = 	$(event.target).parent().parent().attr('id');
		
		tabSelected($tabId);
		
		
		
		
		
		
	};
	
	

$scope.expand4= function(){
	
	$url = "http://addyosmani.com/blog/";
	$scope.link4= $url;
	
};

$scope.expand2= function(){
	
	$url = "http://www.paulirish.com/";
	$scope.link2= $url;
	
};



	
	
	
		
		
		
		
		$scope.submitSites = function(){
		var obj;
		var $name,$link; 		 
		 var j=0;
		 
		 
			 
		
		 for(var i=0; i<3; i++){
			
			 switch(i) {
				case 0:
					$name= $scope.name1;
					$link= $scope.link1;
					break;
				case 1:
					$name= $scope.name2;
					$link= $scope.link2;
					break;
				case 2:
					$name= $scope.name3;
					$link= $scope.link3;
					break;
			} 
		
		
			
		
			$scope.sites[i]=obj;
				if ($name != null){
					if($link != null){
						obj= {
							"name" : $name,
							"url"  : $link
						};
						
						continue;
				 
					}else  return;
				}
				
				else if ($link == null)
				{
					$scope.sites.splice(i,1);
					continue;
				}else return;			 
							 
		 }
		 
		
		localStorage.setItem("tab1", JSON.stringify($scope.sites));
		 
		$('.tab1Frame .settings').css("background-color","transparent");
		$('.tab1Frame .editContainer').fadeOut(500);
		$('.tab1Frame .editContainer').css("display","none");
		$('#frame1 ,.tab1Frame .arrow ,.tab1Frame .chooseReport ').css("display","block");
		$('.tab1Frame .SaveCancel ').css("display","inline");
		updateSite(1);
		
		
	};
	
	$scope.submitSites3 = function(){
		var obj;
		var $name,$link; 		 
		var j=0;	 
		
		 for(var i=0; i<3; i++){
			
			 switch(i) {
				case 0:
					$name= $scope.name3_1;
					$link= $scope.link3_1;
					break;
				case 1:
					$name= $scope.name3_2;
					$link= $scope.link3_2;
					break;
				case 2:
					$name= $scope.name3_3;
					$link= $scope.link3_3;
					break;
			} 
		 
				$scope.sites[i]=obj;
				if ($name != null){
					if($link != null){
						obj= {
							"name" : $name,
							"url"  : $link
						};
						
						continue;
				 
					}else  return;
				}
				
				else if ($link == null)
				{
					$scope.sites.splice(i,1);
					continue;
				}else return;			 
							 
		 }
		 
		
		localStorage.setItem("tab3", JSON.stringify($scope.sites));
		 
		$('.tab3Frame .settings').css("background-color","transparent");
		$('.tab3Frame .editContainer').fadeOut(500);
		$('.tab3Frame .editContainer').css("display","none");
		$('#frame3 ,.tab3Frame  .arrow ,.tab3Frame  .chooseReport ').css("display","block");
		$('.tab3Frame .SaveCancel ').css("display","inline");
		updateSite(3);
		
		
	};
	
	
	
	$scope.chooseSite = function(event){
		
		$('.tab1Frame  .expandedOption').css("display","none");
		
		for(var i =0; i<3; i++){
			
			if ($scope.sites[i].name == $(event.target).html()){
				var tmp = $scope.sites[0];
				$scope.sites[0]=$scope.sites[i];
				$scope.sites[i]=tmp;
				updateSite(1);
				
				
			}
				
				
		}
		 localStorage.setItem("tab1", JSON.stringify($scope.sites));
		
	};
	
	$scope.chooseSite3 = function(event){
		
		$('.tab3Frame  .expandedOption').css("display","none");
		
		for(var i =0; i<3; i++){
			
			if ($scope.sites[i].name == $(event.target).html()){
				var tmp = $scope.sites[0];
				$scope.sites[0]=$scope.sites[i];
				$scope.sites[i]=tmp;
				updateSite(1);
				
				
			}
				
				
		}
		 localStorage.setItem("tab3", JSON.stringify($scope.sites));
		
	};
		
   

	

	
});
