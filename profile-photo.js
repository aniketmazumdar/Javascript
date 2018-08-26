// profilephoto upload
$("#frmProfilePhoto").on('submit',(function(e) {
	e.preventDefault();
	if(isFieldNotEmpty($('#filPhoto'))){
		$.ajax({
			url: "/e-auction/site/script/photo-uploading-script.php",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
			cache: false,
			processData: false,
			success: function(response) {
				if(response){
					invalidField($('#filPhoto'), response);
				}
				else {
					validField($('#filPhoto'), "Photo uploaded successfully");
					$('#btnUploadPhoto').addClass('hide');
				}
				profilePhotoFetch();
			},
			error: function(){
				alert("Error occured");
			}
		});
	}
}));