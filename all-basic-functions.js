//------------------------------------------------------------------------------------------
function resetSelectOptions(selectControl, optionType) {
    selectControl.empty();
    selectControl.append($('<option>', {
        value : "",
        text : "-- Select " + optionType + " --"
    }));
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
/* Show the refresh icon */
function showProgress(inputField) {
    inputField.parents(".form-group").find(".form-control-feedback").addClass("glyphicon glyphicon-refresh");
    inputField.css("border-color", "#ff8000");
    inputField.parents(".form-group").find(".alert").html("Data is loading...");
    inputField.parents(".form-group").find('.alert').css("color", "#ff8000");
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function invalidField(inputField, message) {
    inputField.parents(".form-group").find(".form-control-feedback").addClass("glyphicon glyphicon-remove");
    inputField.css("border-color", "#ea2f10");
    inputField.parents(".form-group").find(".alert").html(message);
    inputField.parents(".form-group").find('.alert').css("color", "#ea2f10");
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function validField(inputField, message) {
    inputField.parents(".form-group").find(".form-control-feedback").addClass("glyphicon glyphicon-ok");
    inputField.css("border-color", "#3c9a5f");
    inputField.parents(".form-group").find(".alert").html(message);
    inputField.parents(".form-group").find('.alert').css("color", "#3c9a5f");
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function refreshFieldFeature(inputField){
    inputField.parents(".form-group").find(".form-control-feedback").removeClass("glyphicon glyphicon-refresh");
    inputField.parents(".form-group").find(".form-control-feedback").removeClass("glyphicon glyphicon-ok");
    inputField.parents(".form-group").find(".form-control-feedback").removeClass("glyphicon glyphicon-remove");
    inputField.removeAttr('style');
    inputField.parents(".form-group").find(".alert").html('');
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function refreshField(inputField){
    refreshFieldFeature(inputField);
    inputField.val('');
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function disabledField(inputField){
    inputField.attr('disabled', true);
    refreshField(inputField);
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function enabledField(inputField){
    inputField.removeAttr('disabled');
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
