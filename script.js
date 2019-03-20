$("button").click(function(){
 var Q1 = parseInt($(".youth").val());     
var Q2  = $(".fear").val();
 var Q3 = $(".dessert").val();
 
 var userinput = $("input").val();
 var userinput = parseInt($("input").val());
 
 var sum = 2050 - 2019 + Q1;

 
 $(".results").append("Open your ears child, to my fortune of great importance " + "" + Q1 + ""+ " is the years thy soul has wondered this earth, " + "" +  Q2  + " makes your blood boil and your hairs stand up, " + Q3 + "" + " makes your mouth water with delight " + "" + "now i will tell you your age, in the glorious year 2050 you will be" + " " + sum );


 

    
});