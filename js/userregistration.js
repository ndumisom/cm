  $(document).ready(function () {
 $(".add-submit").click(function(){
  			$.ajax({
			type: "POST",
			url: "https://cocamzans.com:8443/v1/user",
			contentType: "application/json",
			cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
			data: JSON.stringify(
			      {
				  "actionStatusType": {
				    "message": "string",
				    "success": true
				  },
				  "addressModel": {
				    "addressId": 0,
				    "postalcode": $("#postalCode").val(),
				    "streetName": $("#streetName").val(),
				    "streetNumber": $("#streetNumber").val(),
				    "suburb": $("#suburb").val(),
            "city": $("#city").val()
				  },
				  "emailAddressModel": {
				    "emailAddress": $("#emailAddress").val(),
				    "emailId": 0
				  },
				  "firstName": $("#firstName").val(),
				  "lastName": $("#lastName").val(),
				  "loginModel": {
				    "loginId": 0,
				    "password": $("#password").val(),
				    "username": $("#username").val()
				  },
				  "telephoneModel": {
				    "telephoneId": 0,
				    "telephoneNumber": $("#telephoneNumber").val()
				  },
				  "typeModel": {
				    "typeId": 0,
				    "typeName": $("#typeName").val()
				  },
				  "userId": 0
				}),
			success: function(data){  
             
             if(data.success){
             	$("#firstName").val('');
				$("#lastName").val('');
				$("#streetNumber").val('');
				$("#streetName").val('');
				$("#suburb").val('');
        $("#city").val('');
				$("#postalCode").val('');
				$('.from').val('');
			}

			window.location.href="https://cocamzansi.com/";

             // window.location.href="http://cocamzansi.com/cocamzansi";
		},
			failure: function(errMsg) {
				alert(errMsg);
			}
		});
	});


  $(".from").click(function(){
  	$.ajax({url:"https://cocamzans.com:8443/v1/usertypes", success: function(result){
      $( ".test-class" ).remove();
      for (var i = 0; i <result.length; i++) {
        $(".div1").append("<div class='test-class' id='"+result[i].typeId+"'>"+result[i].typeName+"</div>")
		  console.log(result[i].typeId)


      }
      $("#div1ScrollorMobile").addClass('div1ScrollorMobile');


      }});
     
  });


 })


  $(document).ready(function () {
 $("#signupUser").click(function(){
    $(".signup-as-provider-or-requester").html(
    	'<div id="providerOrRequester" title="Signup as Provider or Requester">'+
                  '<div id="form">'+
                   '<div class="form-field">'+
                    '<input type="button"  id="provider" placeholder="username" class="sign-up-agent provider" value="Provider">'+
                   '</div>'+

                   '<div class="form-field">'+
                    '<input type="button" id="requester" placeholder="password" class="sign-up-agent requester" value="Requester">'+
                  '</div>'+
                  '<div class="div1">'+
                  '</div>'+
                  '<div class="div2">'+
                  '</div>'+
               '</div>'+
               '</div>');
    $(".signup-as-provider-or-requester > #providerOrRequester").dialog({
        title: 'Signup as Provider or Requester',
        close: function(event, ui)
        {
            $(this).dialog('destroy').remove();
        }
    });
});
});


  $(document).ready(function () {
 $(".signup-home-button").click(function(){
    $(".signup-as-provider-or-requester").html(
    	'<div id="providerOrRequester" title="Signup as Provider or Requester">'+
                  '<div id="form">'+
                   '<div class="form-field">'+
                    '<input type="button"  id="provider" placeholder="username" class="sign-up-agent provider" value="Provider">'+
                   '</div>'+

                   '<div class="form-field">'+
                    '<input type="button" id="requester" placeholder="password" class="sign-up-agent requester" value="Requester">'+
                  '</div>'+
                  '<div class="div1">'+
                  '</div>'+
                  '<div class="div2">'+
                  '</div>'+
               '</div>'+
               '</div>');
    $(".signup-as-provider-or-requester > #providerOrRequester").dialog({
        title: 'Signup as Provider or Requester',
        close: function(event, ui)
        {
            $(this).dialog('destroy').remove();
        }
    });
});
});