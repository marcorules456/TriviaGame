var counter=0;
var score=0;


function sub(){
	    counter++;
	 
	if(counter==1){
		 
		 $("#question1").animate({opacity:0.5});
	 }
	 if(counter==2){
		 
		 $("#question2").animate({opacity:0.5});
	 }
	if(counter==3){
		 
		 $("#question3").animate({opacity:0.5});
	 }
	if(counter==4){
		 
		 $("#question4").animate({opacity:0.5});
	 }
	if(counter==5){
		 
		 $("#question5").animate({opacity:0.5});
	 }
	 if(counter==6){
		 
		 $("#question6").animate({opacity:0.5});
	 }
	 if(counter==7){
		 
		 $("#question7").animate({opacity:0.5});
	 }
	 if(counter==8){
		 
		 $("#question8").animate({opacity:0.5});
	 }
	 if(counter==9){
		 
		 $("#question9").animate({opacity:0.5});
	 }
	 if(counter==10){
		 
		 $("#question10").animate({opacity:0.5});
	 }
}

	 var number = 20;

    var intervalId;

    flag=false;

	







function run() {
	
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {
       count=1;
      if(flag==false){
	  number-=count;
      $("#time").html("<h2>" + number + "</h2>");

      if (number === 0) {

        
		$("#time").text(20);
		number=20;
	$("#score").text(score);

        alert("Time Up!");
	    
      }
		
	}
}
	 var count= 0;
	
$("#start").on("click",function(){
    
   flag=false;
    run();
	decrement();
  
	});

	$("#reset").on("click",function(){
		flag=true;
		number=20;
	      $("#time").html("<h2>" + number + "</h2>");
	});
	
	
	
$(".wrong").on("click",function(){


	sub();
});

$(".right").on("click",function(){
  
	 score++;
	 sub();
});

$("#done").on("click",function(){
	
	$("#score").text(score);


	if(score==10){
		alert("you are a genius!!");
		
	}
		flag=true;
		number=20;
	      $("#time").html("<h2>" + number + "</h2>");
});
















