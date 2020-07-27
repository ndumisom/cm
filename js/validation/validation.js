$(document).ready(function(){

  $("#firstName").mouseenter(function(){
    $("#firstName").css("background-color", "yellow");
  });
  $("#firstName").mouseleave(function(){
  	if($("#firstName").val() == ""){
      $("#firstName").css("background-color", "#FFB2B2");
      $("#firstName").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#firstName").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });


  $("#lastName").mouseenter(function(){
    $("#lastName").css("background-color", "yellow");
  });
  $("#lastName").mouseleave(function(){
  	if($("#lastName").val() == ""){
      $("#lastName").css("background-color", "#FFB2B2");
      $("#lastName").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#lastName").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

    $("#telephoneNumber").mouseenter(function(){
    $("#telephoneNumber").css("background-color", "yellow");
  });
  $("#telephoneNumber").mouseleave(function(){
  	if($("#telephoneNumber").val() == ""){
      $("#telephoneNumber").css("background-color", "#FFB2B2");
      $("#telephoneNumber").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#telephoneNumber").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

    $("#emailAddress").mouseenter(function(){
    $("#emailAddress").css("background-color", "yellow");
  });
  $("#emailAddress").mouseleave(function(){
  	if($("#emailAddress").val() == ""){
      $("#emailAddress").css("background-color", "#FFB2B2");
      $("#emailAddress").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#emailAddress").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

  $("#streetNumber").mouseenter(function(){
    $("#streetNumber").css("background-color", "yellow");
  });
  $("#streetNumber").mouseleave(function(){
  	if($("#streetNumber").val() == ""){
      $("#streetNumber").css("background-color", "#FFB2B2");
      $("#streetNumber").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#streetNumber").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

  $("#streetName").mouseenter(function(){
    $("#streetName").css("background-color", "yellow");
  });
  $("#streetName").mouseleave(function(){
  	if($("#streetName").val() == ""){
      $("#streetName").css("background-color", "#FFB2B2");
      $("#streetName").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#streetName").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

  $("#suburb").mouseenter(function(){
    $("#suburb").css("background-color", "yellow");
  });
    $("#city").mouseenter(function(){
    $("#city").css("background-color", "yellow");
  });
  $("#suburb").mouseleave(function(){
  	if($("#suburb").val() == ""){
      $("#suburb").css("background-color", "#FFB2B2");
      $("#suburb").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#suburb").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

    $("#city").mouseleave(function(){
    if($("#city").val() == ""){
      $("#city").css("background-color", "#FFB2B2");
      $("#city").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#city").css("background-color", "lightgray");  
       $("#addSubmit").attr("disabled", false);
      }
  });

  $("#postalCode").mouseenter(function(){
    $("#postalCode").css("background-color", "yellow");
  });
  $("#postalCode").mouseleave(function(){
  	if($("#postalCode").val() == ""){
      $("#postalCode").css("background-color", "#FFB2B2");
      $("#postalCode").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#postalCode").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

  $("#typeName").mouseenter(function(){
    $("#typeName").css("background-color", "yellow");
  });
  $("#typeName").mouseleave(function(){
  	if($("#typeName").val() == ""){
      $("#typeName").css("background-color", "#FFB2B2");
      $("#typeName").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#typeName").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

  $("#username").mouseenter(function(){
    $("#username").css("background-color", "yellow");
  });
  $("#username").mouseleave(function(){
  	if($("#username").val() == ""){
      $("#username").css("background-color", "#FFB2B2");
      $("#username").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#username").css("background-color", "lightgray");	
      $("#addSubmit").attr("disabled", false);
      }
  });

  $("#password").mouseenter(function(){
    $("#password").css("background-color", "yellow");
  });
  $("#password").mouseleave(function(){
  	if($("#password").val() == ""){
      $("#password").css("background-color", "#FFB2B2");
      $("#password").focus()
      $("#addSubmit").attr("disabled", true);
      } else {
      $("#password").css("background-color", "lightgray");	
       $("#addSubmit").attr("disabled", false);
      }
  });

});