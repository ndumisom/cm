  $(document).ready(function () {
  			$.ajax({
			type: "GET",
			url: "https://cocamzans.com:8443/v1/users",
			success: function(data){  
				$("#firstName").val(data[0].firstName);
             	$("#firstName").val(data[0].firstName);
				$("#lastName").val(data[0].lastName);
				$("#streetNumber").val(data[0].addressModel.streetNumber);
				$("#streetName").val(data[0].addressModel.streetName);
				$("#suburb").val(data[0].addressModel.suburb);
				$("#postalCode").val(data[0].addressModel.postalcode);
				$('#from').val(data[0].typeModel.typeName);
			
		},
			failure: function(errMsg) {
				alert(errMsg);
			}
		});

 })