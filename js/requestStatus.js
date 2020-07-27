$(document).on("click","#submitRequestStatus",function(){
      $.ajax({
      type: "POST",
      url: "https://cocamzans.com:8443/v1/request",
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
      data: JSON.stringify(
{
  "requestId": 0,
  "requestMessage": $("#textMessage").html(),
  "userModelFromId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userFromId").val()
  },
  "userModelToId": {
    "actionStatusType": {
      "message": "string",
      "success": true
    },
    "addressModel": {
      "addressId": 0,
      "city": "string",
      "fullAddress": "string",
      "postalcode": 0,
      "streetName": "string",
      "streetNumber": 0,
      "suburb": "string"
    },
    "emailAddressModel": {
      "emailAddress": "string",
      "emailId": 0
    },
    "firstName": "string",
    "lastName": "string",
    "loginModel": {
      "loginId": 0,
      "password": "string",
      "username": "string"
    },
    "telephoneModel": {
      "telephoneId": 0,
      "telephoneNumber": "string"
    },
    "typeModel": {
      "typeId": 0,
      "typeName": "string"
    },
    "userId": $("#userToId").val()
  }
}),
      success: function(data){  
         console.log("Request response",data)  
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
      } else {
          $(".message").html('<div class=info>'+data.message+'</div>');
      }

      // window.location.href="https://cocamzansi.com/cocamzansi";

             // window.location.href="http://cocamzansi.com/cocamzansi";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });

  });


 $(document).ready(function () {
 $(document).on('click','#requestStatus',function(){
             var userId = $( "#userLoggedInId").html();
             var listOfCities = [];

      $.ajax({
      type: "GET",
      url: "https://cocamzans.com:8443/v1/request/"+userId,
      contentType: "application/json",
      cache: false,
            crossDomain: true,
            xhrFields: {withCredentials:true},
            success: function(data){ 
                  var providerRequestsList = data;
                  for(var i = 0 ; i < providerRequestsList.length;i++){
                  // if(providerRequestsList.userModelFromId){
                   var status = '';
                  
                  if(providerRequestsList[i].status == 0){
                   status = 'Not Actioned'
                  }

                  if(providerRequestsList[i].status == 1){
                   status = 'Accepted'
                  }

                  if(providerRequestsList[i].status == 2){
                   status = 'Waiting'
                  }

                  if(providerRequestsList[i].status == 3){
                   status = 'Rejected'
                  }

                  listOfCities.push("<div class='" +"list-request  "+providerRequestsList[i].requestMessage.toString().replace(" ","").replace(":","").replace("+","").replace("-","")+"' id='"+providerRequestsList[i].requestId+"'>"+"<br/>"+" &nbsp;" +"<b>"+status +":"+"</b>"+""+providerRequestsList[i].requestMessage+""+" &nbsp;"+""+providerRequestsList[i].createDateTime);
                // }
              }
                  $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
                  '<div id="form">'+
                    listOfCities+
                   ' <input type="text" name="firstname" hidden id="userFromId" placeholder="First Name" class="sign-up-agent"'+
                   'value='+
                    '"'+$("#userLoggedInId").html()+'"'+
                    '>'+
                   '</div>'+

                   '<div class="form-field">'+
                    '<input type="text" name="lastname" hidden id="userToId" placeholder="Last Name" '+
                    'class="sign-up-agent"'+
                    'value='+
                    '"'+$(this).parent().attr('id')+'"'+
                    '>'+
                   '</div>'+
                   ' <div class="form-field">'+
                   ' <input type="button" name="add-submit" value="Send request" '+
                   ' class="add-submit" id="submitRequestStatus">'+
                 ' </div>'+

               '</div>'+
              '</div>')
    $(".dialog-user-request > #dialogUserRequest").dialog({
        title: 'Request a provider?',
        close: function(event, ui)
        {
            $(this).dialog('destroy').remove();
        }
    });
           },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });
});
});


 $(document).ready(function() {
    //set initial state.    
    $('#carwash').change(function() {
        if($(this).is(":checked")) {
            var returnVal = confirm("Are you sure?");
            $(this).attr("checked", returnVal);
        }
    });
});


var listOfCleaningServices = [];

$(document).on("change","#carwash",function(){
if($(this).is(":checked")) {
  listOfCleaningServices.push($("#carWashId").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
} else{
const index = listOfCleaningServices.indexOf($("#carWashId").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr); 
}
});


$(document).on("change","#housecleaning",function(){
   if($(this).is(":checked")) {
    listOfCleaningServices.push($("#housecleaningId").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
} else{
  const index = listOfCleaningServices.indexOf($("#housecleaningId").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}

  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
}
});

$(document).on("change","#gardening",function(){
  if($(this).is(":checked")) {
    listOfCleaningServices.push($("#gardeningId").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
$("#textMessage").html(concStr);
} else {
const index = listOfCleaningServices.indexOf($("#gardeningId").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}

  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}

$("#textMessage").html(concStr);
}

});

function removeDuplicates(listOfCleaningServices) {
  return listOfCleaningServices.filter((a, b) => listOfCleaningServices.indexOf(a) === b)
};       