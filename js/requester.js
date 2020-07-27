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
				    "streetNumber": $("#streetNumber").val().replace(/\D/g,''),
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
        $(".message").html('<div class=success>'+data.message+'</div>');
        // $( "#foo" ).trigger( "click" );
        setInterval(function () {   }, 3000);
        $(".ui-dialog-titlebar-close").trigger("click")
        $("#firstName").val('');
        $("#lastName").val('');
        $("#streetNumber").val('');
        $("#streetName").val('');
        $("#suburb").val('');
        $("#city").val('');
        $("#postalCode").val('');
        $("#telephoneNumber").val('');
        $("#emailAddress").val('');
        $("#passwordSignUp").val('');
        $("#usernameSignUp").val('');
        window.location.href="https://cocamzansi.com/Login.html";
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }


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
 $(document).on('click','.requester',function(){
    $(".dialog-for-user-signup").html('<div id="dialogUserSignUp" title="User Signup">'+
                  '<div id="form">'+
                  '<div class="message">'+
                   ''+
                   '</div>'+

                   '<div class="form-field">'+
                   ' <input type="text" name="firstname" id="firstName" placeholder="First Name" class="sign-up-agent">'+
                   '</div>'+

                   '<div class="form-field">'+
                    '<input type="text" name="lastname" id="lastName" placeholder="Last Name" '+
                    'class="sign-up-agent">'+
                   '</div>'+

                   '<div class="form-field">'+
                    '<input type="text" name="telephoneNumber" id="telephoneNumber" placeholder="Phone" '+
                    'class="sign-up-agent">'+
                   '</div>'+

                   '<div class="form-field">'+
                    '<input type="text" name="emailAddress" id="emailAddress" placeholder="Email Address" class="sign-up-agent">'+
                   '</div>'+

                   '<div class="form-field">'+
                   ' <input type="postal" name="streetNumber" id="streetNumber" placeholder="Street Number" class="sign-up-agent">'+
                   '</div>'+

                   '<div class="form-field">'+
                   ' <input type="text" name="streetName" id="streetName" placeholder="Street Name" class="sign-up-agent">'+
                   '</div>'+

                   '<div class="form-field">'+
                    '  <input type="text" name="suburb" id="suburb" placeholder="Suburb" '+
                     ' class="sign-up-agent">'+
                  ' </div>'+

                  '<div class="form-field">'+
                  '  <input type="text" name="postalCode" id="postalCode"placeholder="Postal Code" class="sign-up-agent">'+
                  '</div>'+
                  '<div class="form-field">'+
                  '<input type="text" name="typeName" id="typeName"placeholder="Requester" class="sign-up-agent validate" data-validate="required" value="Requester">'+
                  '</div>'+

                  ' <div class="form-field">'+
                  '  <input type="text" name="username-signup" id="usernameSignUp"placeholder="username" class="sign-up-agent">'+
                 ' </div>'+


                 ' <div class="form-field">'+
                  '  <input type="password" name="password-signup" id="passwordSignUp"placeholder="password" class="sign-up-agent">'+
                 ' </div>'+

                 ' <div class="form-field">'+
                   ' <input type="button" name="add-submit" value="Sign Up" '+
                   ' class="add-submit" id="addSubmit">'+
                 ' </div>'+

               '</div>'+
              '</div>')
    $(".dialog-for-user-signup > #dialogUserSignUp").dialog({
        title: 'User Signup',
        close: function(event, ui)
        {
            $(this).dialog('destroy').remove();
        }
    });
});
});