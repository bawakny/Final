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




 $('.expandedOption').click(function (){
	 
	 alert("aaaaaa");
	 $('.dropDownOption').html($(this).html()+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');
	  $('.expandedOption').css("display","none");
	 
});


	
	


$('.tab').click(function(){
	var $this = $(this);
	 $('.tab').removeClass('selected');
	$this.addClass('selected');
	$('.tabframe').css("display","none");
	$('.'+$this.attr('id')+'Frame').css("display","block");
	
	//alert($this.attr('id'));
	
	
});

$('.settings img').click(function(){
	
	$(this).parent().css("background-color","white");
	$('.editContainer').fadeIn(500);
	$('.editContainer').css("display","block");
	
});

$('.editContainer button').click(function(){
	
	$('.settings').css("background-color","transparent");
	$('.editContainer').fadeOut(500);
	$('.editContainer').css("display","none");
	
});
$('.SaveCancel label').click(function(){
	
	$('.settings').css("background-color","transparent");
	$('.editContainer').fadeOut(500);
	$('.editContainer').css("display","none");
	
});



var tabSites = angular.module('tabSites',[]);


tabSites.controller('tab',function($scope, $window){
	 
	 $scope.tab2clicked = function(){
	//	 $window.alert( "hover");
	// $('#frame2').attr("src","http://www.paulirish.com/"); 
	// $('#tab2 a').attr("href","http://www.paulirish.com/")
	 };
	
	
});
tabSites.controller('tab',function($scope, $window){
	
	/* 
	var tabs = {
    "tab1": [
        {
            "name": "PRIVMSG",
            "url": "^http://.*"
        },
        {
            "name": "PRIVMSG",
            "url": "^delete.*"
        },
        {
            "name": "PRIVMSG",
            "url": "^random.*"
        }
    ],
    "tab3": [
        {
            "name": "PRIVMSG",
            "url": "^http://.*"
        },
        {
            "name": "PRIVMSG",
            "url": "^delete.*"
        },
        {
            "name": "PRIVMSG",
            "url": "^random.*"
        }
    ]
};
	*/
	

$scope.hoverIn = function(event){
	
	
	$('.expandedOption').removeClass('selected');
		
	$(event.target).addClass('selected');
	
	 
	};
	
	
	var site =[{
            "name": "",
            "url": ""
        },
		"name": "",
            "url": ""
        },
		"name": "",
            "url": ""
        },
		"name": "",
            "url": ""
        }
    ];
	
	
	$scope.submitSites = function(){
		var obj;
		 		 
		 if ($scope.name1 != null)
			
			 if($scope.link1 != null){
			obj= {
			"name" : $scope.name1,
			"url"  : $scope.link1
		 };
		 site[0]=obj; 
			 
			 
		 }
		  
		 if ($scope.name2 != null)
			 if($scope.link2 != null){
			obj= {
			"name" : $scope.name2,
			"url"  : $scope.link2
		 };
		 site[1]=obj; 
		 	 
			 
		 }
		 if ($scope.name3 != null)
			if ($scope.link3 != null){
			obj= {
			"name" : $scope.name3,
			"url"  : $scope.link3
		 };
		 site[2]=obj; 
			 
			$scope.sites= site; 
		 }
		 localStorage.setItem("currentSite", toString(1));
		localStorage.setItem("tabs", JSON.stringify(site));
		 $('#frame1 , .arrow , .chooseReport , .SaveCancel label').css("display","block");
		  $('.SaveCancel ').css("display","inline");
		// $scope.chosenSite = "yyyyyyy";
		 $('.dropDownOption').html($scope.sites[0].name+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');
	};
	
	$scope.chooseSite = function(event){
		//$scope.$log =($(event.target));
		//console.log($(event.target));
		//$window.log($(event.target));
		//$('.dropDownOption').html($scope.sites[2].name+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');
		//angular.element($(event.target)).trigger( "click" );
		//$window.alert("cccc");
		//$scope.chosenSite.html("dddd");
		
		$scope.chosenSite = $scope.sites[0].name+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">';
		$('.dropDownOption').html($scope.sites[0].name+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');
		$('.expandedOption').css("display","none");
		//console.log($(event));
		//console.log($scope);
		for(var i =0; i<3; i++){
			
			if ($scope.sites[i].name == $(event.target).html()){
				var tmp = $scope.sites[0];
				$scope.sites[0]=$scope.sites[i];
				$scope.sites[i]=tmp;
				$('#frame1').attr("src",$scope.sites[0].url);
				
			}
				
				//localStorage.setItem("currentSite", toString(i));
		}
		 localStorage.setItem("tabs", JSON.stringify($scope.sites));
		$('.dropDownOption').html( $(event.target).html()+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');
	};
	
	
	var tabs = localStorage.getItem("tabs");
	
	if (tabs == null){
		
		$('.settings img').trigger( "click" );
		
		
		
	}
	else{
		//curr=  parseInt(localStorage.getItem("currentSite"));
		site = JSON.parse(tabs);
		$scope.sites= site; 
		//$window.alert(curr);
		$scope.chosenSite = $scope.sites[0].name+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">';
		$('#frame1 , .arrow , .chooseReport , .SaveCancel label').css("display","inline");
		$('.dropDownOption').html($scope.sites[0].name+'<img src="./img/icons/icon-arrow-up-b-128.png"  height="25" width="25">');
		

		
	}
});
