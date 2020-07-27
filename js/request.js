$(document).on("click","#submitRequestRequestModal",function(){
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
      "fullAddress": $("#search_input").val(),
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
    "userId": 1
  }
}),
      success: function(data){  
         console.log("Request response",data)  
        if(data.success){
        // alert("Dear Terrence Your request #302 has been sent, a reply to your request will be attended soon.")
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

      window.location.href="https://cocamzansi.com";

             // window.location.href="http://cocamzansi.com/cocamzansi";
    },
      failure: function(errMsg) {
        alert(errMsg);
      }
    });   

  });

var userToId = ''

 $(document).ready(function () {
 $(document).on('click','.request-provider',function(){
    $("#userToId").val($(this).parent().attr("id"))

  userToId = $(this).parent().attr("id");
    $.ajax({
      type: "GET",
      url: "https://cocamzans.com:8443/v1/services",
      cache: false,
      crossDomain: true,
      xhrFields: {withCredentials:true},
      success: function(data){






        var listOfServices = [];

        if(data.length>0){
            for(var i = 0 ; i < data.length; i++){
              listOfServices.push('<input type="checkbox" name="'+data[i].serviceName+'" id="'+data[i].serviceName.replace(" ","").trim()+'" class="'+data[i].serviceName.replace(" ","").trim()+'"><span id="'+data[i].serviceName.replace(" ","").trim()+data[i].serviceId+'">'+data[i].serviceName+'</span>'+'&nbsp;&nbsp;&nbsp;R<span id='+data[i].serviceId+'>'+''+data[i].servicePrice+''+'</span>' +'<br>');
            }
          }

          $("#userFromId").val($("#userLoggedInId").html());
          $("#userToId").val(userToId);

         console.log("listOfServices",listOfServices)
             
            // $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
            //       '<div id="form">'+
                  
            //        '<div id="textMessage" hidden>'+
            //        ''+
            //        '</div>'+

            //        '<div id="priceTotal" class="request-price">'+
            //        ''+
            //        '</div>'+

                   

            //       '<div id="servicePriceTotal" class="request-price">'+
            //        ''+
            //        '</div>'+

            //        '<div id="textMessageText">'+
            //        '</div>'+
                    

            //        // '<input type="checkbox" name="carwash" id="carwash"> <span id="carWashId">Car wash</span> <br>'+
            //        // '<input type="checkbox" name="housecleaning" id="housecleaning"> <span id="housecleaningId"> House cleaning </span><br>'+
            //        // '<input type="checkbox" name="gardening" id="gardening"> <span id="gardeningId"> Gardening </span><br>'+
            //        '<div class="form-field"></input>'+
            //        '<input type="text" name="firstname" hidden id="userFromId" placeholder="First Name" class="sign-up-agent"'+
            //        'value='+
            //         '"'+$("#userLoggedInId").html()+'"'+
            //         '>'+
            //        '</div>'+

            //        '<div class="form-field">'+
            //         '<input type="text" name="lastname" hidden id="userToId" placeholder="Last Name" '+
            //         'class="sign-up-agent"'+
            //         'value='+
            //         '"'+userToId+'"'+
            //         '>'+
            //        '</div>'+
            //        '<div class="">'+
            //        '<!-- Autocomplete location search input -->'+
            //        '<div class="form-group">'+
            //        '<label>Location</label>'+
            //        '<input type="text" class="form-control" id="search_input" placeholder=" Type address.."/>'+
            //        '<input type="hidden" id="latitude_input" />'+
            //        '<input type="hidden" id="longitude_input" />'+
            //        '</div>'+

            //        '<!-- Display latitude and longitude -->'+
            //        '<div class=""latlong-view>'+
            //        '<p hidden><b>Latitude:</b> <span id="latitude_view"></span></p>'+
            //        '<p hidden><b>Longitude:</b> <span id="longitude_view"></span></p>'+
            //        '</div>'+
            //        '</div>'+
            //        ' <div class="form-field">'+
            //        ' <input type="button" name="add-submit" value="Send request" '+
            //        ' class="add-submit" id="submitRequest">'+
            //      ' </div>'+

            //    '</div>'+
            //   '</div>')
    // $(".dialog-user-request > #dialogUserRequest").dialog({
    //     title: 'Request a provider?',
    //     close: function(event, ui)
    //     {
    //         $(this).dialog('destroy').remove();
    //     }
    // });

    for(var i = 0 ; i < listOfServices.length ; i++){            
           $("#textMessageText").append(listOfServices[i]);
              
          }
var listOfCleaningServices = [];

var listOfCleaningServicesKeepStatus = [];
      }
      ,failure: function(errMsg) {
        alert(errMsg);
      }

    });
});
});


//  $(document).ready(function () {
//  $(document).on('click','.request-provider',function(){
//    alert($(this).parent().attr("id"))
//   $("#userToId").val($(this).parent().attr("id"))
// });
// })



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
var listOfCleaningServicesprices = [];


$(document).on("change","#Carwash",function(){

if($(this).is(":checked")) {
  listOfCleaningServices.push($("#Carwash1").html())
  listOfCleaningServicesprices.push($("#1").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}


  var concStrprices = 0;
  var listOfServprices = removeDuplicatesPrices(listOfCleaningServicesprices);


  for(var i = 0 ; i < listOfServprices.length ; i++){
  concStrprices += Number(listOfServprices[i]); 
}

$("#textMessage").html(concStr);
$("#priceTotal").html("<strong>Items : "+listOfServ.length+"</strong>");
$("#servicePriceTotal").html("<strong>Price : R"+concStrprices+"</strong>");

} else{
const index = listOfCleaningServices.indexOf($("#Carwash1").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}

const index1 = listOfCleaningServicesprices.indexOf($("#1").html());
if (index1 > -1) {
  listOfCleaningServicesprices.splice(index1, 1);
}



  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}

  var concStrprices = 0;
  var listOfServprices = removeDuplicatesPrices(listOfCleaningServicesprices);
  for(var i = 0 ; i < listOfServprices.length ; i++){
  concStrprices += Number(listOfServprices[i]); 
}

$("#textMessage").html(concStr); 
$("#priceTotal").html("<strong>Items : "+listOfServ.length+"</strong>");
$("#servicePriceTotal").html("<strong>Price : R"+concStrprices+"</strong>");

}
});


$(document).on("change","#Housecleaning",function(){
   if($(this).is(":checked")) {
    listOfCleaningServices.push($("#Housecleaning2").html())
    listOfCleaningServicesprices.push($("#2").html())

  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}

  var concStrprices = 0;
  var listOfServprices = removeDuplicatesPrices(listOfCleaningServicesprices);
  for(var i = 0 ; i < listOfServprices.length ; i++){
  concStrprices += Number(listOfServprices[i]); 
}


$("#textMessage").html(concStr);
$("#priceTotal").html("<strong>Items : "+listOfServ.length+"</strong>");
$("#servicePriceTotal").html("<strong>Price : R"+concStrprices+"</strong>");

// for(var i = 0 ; i < $(".service-price").length ; i++){
//  listOfCleaningServicesprices = Number(listOfCleaningServicesprices)+Number($(".service-price:eq(" + i  + ")")[i].innerHTML);
// }

// $("#servicePriceTotal").html(listOfCleaningServicesprices);
} else{
  const index = listOfCleaningServices.indexOf($("#Housecleaning2").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}

const index1 = listOfCleaningServicesprices.indexOf($("#2").html());
if (index1 > -1) {
  listOfCleaningServicesprices.splice(index1, 1);
}

  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}

  var concStrprices = 0;
  var listOfServprices = removeDuplicatesPrices(listOfCleaningServicesprices);
  for(var i = 0 ; i < listOfServprices.length ; i++){
  concStrprices += Number(listOfServprices[i]); 
}

$("#textMessage").html(concStr);
$("#priceTotal").html("<strong>Items : "+listOfServ.length+"</strong>");
$("#servicePriceTotal").html("<strong>Price : R"+concStrprices+"</strong>");

}
});

$(document).on("change","#Gardening",function(){
  if($(this).is(":checked")) {
    $("#3").addClass("service-price");
    listOfCleaningServices.push($("#Gardening3").html())
    listOfCleaningServicesprices.push($("#3").html())
  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}
  var concStrprices = 0;
  var listOfServprices = removeDuplicatesPrices(listOfCleaningServicesprices);
  for(var i = 0 ; i < listOfServprices.length ; i++){
  concStrprices +=Number(listOfServprices[i]); 
}

$("#textMessage").html(concStr);
$("#priceTotal").html("<strong>Items : "+listOfServ.length+"</strong>");

$("#servicePriceTotal").html("<strong>Price : R"+concStrprices+"</strong>");
} else {
const index = listOfCleaningServices.indexOf($("#Gardening3").html());
if (index > -1) {
  listOfCleaningServices.splice(index, 1);
}

const index1 = listOfCleaningServicesprices.indexOf($("#3").html());
if (index1 > -1) {
  listOfCleaningServicesprices.splice(index1, 1);
}

  var concStr = '';
  var listOfServ = removeDuplicates(listOfCleaningServices);
  for(var i = 0 ; i < listOfServ.length ; i++){
  concStr = concStr+listOfServ[i]+","; 
}

  var concStrprices = 0;
  var listOfServprices = removeDuplicatesPrices(listOfCleaningServicesprices);
  for(var i = 0 ; i < listOfServprices.length ; i++){
  concStrprices +=Number(listOfServprices[i]); 
}

$("#textMessage").html(concStr);
$("#priceTotal").html("<strong>Items : "+listOfServ.length+"</strong>");

$("#servicePriceTotal").html("<strong>Price : R"+concStrprices+"</strong>");
}

});

function removeDuplicates(listOfCleaningServices) {
  return listOfCleaningServices.filter((a, b) => listOfCleaningServices.indexOf(a) === b)
};


function removeDuplicatesPrices(listOfCleaningServicesprices) {
  return listOfCleaningServicesprices.filter((a, b) => listOfCleaningServicesprices.indexOf(a) === b)
};


 $(document).ready(function () {
 $(document).on('click','.waiting-request',function(){

    var requestId  = $(this).parent().attr('id');
    console.log("checked parent",$(this).parent());

    $(".userFromId").val($("#userLoggedInId").html());
    $("#userFromId").val($("#userLoggedInId").html());
    $(".requestId").val(requestId);
    $("#requestId").val(requestId);
    

    console.log($("#userLoggedInId").html());
    console.log(requestId);
    console.log("waiting-request");

    // $(".dialog-user-request").html('<div id="dialogUserRequest" title="Send request">'+
    //               '<div id="form">'+
    //                '<div id="textMessage">'+
    //                ''+
    //                '</div>'+
  

    //               '<p>Please select your response:</p>'+
    //               // '<input type="radio" id="accept" name="status" value="1">'+
    //               // '<label for="male">Accept</label><br>'+
    //               // '<input type="radio" id="wait" name="status" value="2">'+
    //               // '<label for="female">Done</label><br>'+
    //               '<input type="radio" id="cancel" name="status" value="6">'+
    //               '<label for="other">Cancel</label>'+
    //                '<div class="form-field"></input>'+
    //                ' <input type="text" name="requestId" hidden id="requestId" placeholder="requestId" class="sign-up-agent"'+
    //                'value='+
    //                 '"'+requestId+'"'+
    //                 '>'+
    //                '</div>'+
    //                ' <input type="text" name="firstname" hidden id="userFromId" placeholder="First Name" class="sign-up-agent"'+
    //                'value='+
    //                 '"'+$("#userLoggedInId").html()+'"'+
    //                 '>'+
    //                '</div>'+

    //                '<div class="form-field">'+
    //                 '<input type="text" name="lastname" hidden id="userToId" placeholder="Last Name" '+
    //                 'class="sign-up-agent"'+
    //                 'value='+
    //                 '"'+$(this).parent().attr('id')+'"'+
    //                 '>'+
    //                '</div>'+
    //                ' <div class="form-field">'+
    //                ' <input type="button" name="add-submit" value="Send request" '+
    //                ' class="add-submit" id="submitResponse">'+
    //              ' </div>'+

    //            '</div>'+
    //           '</div>')
    // $(".dialog-user-request > #dialogUserRequest").dialog({
    //     title: 'Request a provider?',
    //     close: function(event, ui)
    //     {
    //         $(this).dialog('destroy').remove();
    //     }
    // });
});
});