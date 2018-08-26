$.ajax({
	url: '/e-auction/site/script/create-profile-script.php',
	type: 'POST',
	data: $("#frmCreateProfile").serialize(),
	success: function(response) {
		if(response) {  // data are saved in database
			$('#div-profile-photo').addClass('in');
			$('#frmProfilePhoto').removeClass('hide');
			$('#btnSaveCreateProfile').addClass('hide');
			$('#btnCompleteRegistration').removeClass('hide');
		}
		else{
			alert("Data insertion fail !");
		}
	},
	error: function(){
		alert("Error occured");
	}
});
