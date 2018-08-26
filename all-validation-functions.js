//------------------------------------------------------------------------------------------
function isFieldNotEmpty(inputField){
    refreshFieldFeature(inputField);

    if(!inputField.val()){  // if field has no data
        invalidField(inputField, "Field is empty");
        return false;
    }
    else{   // if field has data
        validField(inputField, "");
        return true;
    }
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function emailFormateValidationCheck(inputField){
    refreshFieldFeature(inputField);

    var x = inputField.val();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        invalidField(inputField, "Invalid email formate");
        return false;
    }
    else{
        validField(inputField, "");
        return true;
    }
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function passwordFormateValidationCheck(inputField) {
    refreshFieldFeature(inputField);

    var frmt = /^\S*(?=\S{5,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[\W])\S*/;
    var resVal = frmt.test(inputField.val());
    if (resVal){
        validField(inputField, "");
        return true;
    }
    else{
        invalidField(inputField, "Incorrect password formate");
        return false;
    }
    /*
        Explaining $\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[\W])\S*$
        / = beginning of string
        \S* = any set of characters
        (?=\S{8,}) = of at least length 8
        (?=\S*[a-z]) = containing at least one lowercase letter
        (?=\S*[A-Z]) = and at least one uppercase letter
        (?=\S*[\d]) = and at least one number
        (?=\S*[\W]) = and at least a special character (non-word characters)
        / = end of the string
    */
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function passwordMatchCheck(inputField1, inputField2) {
    refreshFieldFeature(inputField2);

    if (inputField1.val() == inputField2.val()) {
        validField(inputField2, "Password matched");
        return true;
    }
    else {
        invalidField(inputField2, "Password mismatched");
        return false;
    }
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function phoneNumberValidationCheck(inputField){
    refreshFieldFeature(inputField);

    var isNonNumericCharExist = inputField.val().match(/[^\d]/);
    if (!isNonNumericCharExist) {
        if(inputField.val().length == 10){
            validField(inputField, "");
            return true;
        }
    }

    invalidField(inputField, "Incorrect phone number");
    return false;
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function faxNumberValidationCheck(inputField){
    refreshFieldFeature(inputField);

    var isNonNumericCharExist = inputField.val().match(/[^\d]/);
    if (!isNonNumericCharExist) {
        if(inputField.val().length == 10){
            validField(inputField, "");
            return true;
        }
    }

    invalidField(inputField, "Incorrect fax number");
    return false;
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
function zipValidationCheck(inputField){
    refreshFieldFeature(inputField);

    var isNonNumericCharExist = inputField.val().match(/[^\d]/);
    if (!isNonNumericCharExist) {
        if(inputField.val().length > 3 && inputField.val().length < 7){
            validField(inputField, "");
            return true;
        }
    }

    invalidField(inputField, "Incorrect zip code");
    return false;
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
