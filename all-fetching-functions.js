//------------------------------------------------------------------------------------------
// fetching salutation data
function salutationFetch(salutationField){
    showProgress(salutationField);

    $.ajax({
        url: '/e-auction/site/script/fetching-script.php',
        type: 'POST',
        data: {
            table               : "SALUTATION_MASTER",
            attribute           : "*",
            selectedAttribute   : "SALUTATION_ID",
            conditionalOperator : ">",
            selectedData        : "0"
        },
        success:function(response){
            //alert(response)
            var sal_arr = $.parseJSON(response);

            resetSelectOptions(salutationField, "salutation");
            for (var x in sal_arr) {
                salutationField.append($('<option>', {
                    value: sal_arr[x].SALUTATION_ID,
                    text:  sal_arr[x].SALUTATION_NAME
                }));
            }
            refreshFieldFeature(salutationField);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
    		alert("Status: " + textStatus+" Error: " + errorThrown)
    	}
    });
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// fetching country data
function countryFetch(countryField){
    showProgress(countryField);

    $.ajax({
        url: '/e-auction/site/script/fetching-script.php',
        type: 'POST',
        data: {
            table               : "COUNTRY_MASTER",
            attribute           : "*",
            selectedAttribute   : "COUNTRY_ID",
            conditionalOperator : ">",
            selectedData        : "0"
        },
        success:function(response){
            //alert(response)
            var con_arr = $.parseJSON(response);

            resetSelectOptions(countryField, "country");
            for (var x in con_arr) {
                countryField.append($('<option>', {
                    value: con_arr[x].COUNTRY_ID,
                    text:  con_arr[x].COUNTRY_NAME
                }));
            }
            refreshFieldFeature(countryField);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
    		alert("Status: " + textStatus+" Error: " + errorThrown)
    	}
    });
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// fetching state data
function stateFetch(countryField, stateField){
    showProgress(stateField);

    $.ajax({
        url: '/e-auction/site/script/fetching-script.php',
        type: 'POST',
        data: {
            table               : "STATE_MASTER",
            attribute           : "*",
            selectedAttribute   : "COUNTRY_ID",
            conditionalOperator : "=",
            selectedData        : countryField.val()
        },
        success:function(response){
            var stat_arr = $.parseJSON(response);
            //alert(response)
            resetSelectOptions(stateField, "state");
            for (var x in stat_arr) {
                stateField.append($('<option>', {
                    value: stat_arr[x].STATE_ID,
                    text:  stat_arr[x].STATE_NAME
                }));
            }
            refreshFieldFeature(stateField);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus+" Error: " + errorThrown)
        }
    });
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// fetching city data
function cityFetch(stateField, cityField){
    showProgress(cityField);

    $.ajax({
        url: '/e-auction/site/script/fetching-script.php',
        type: 'POST',
        data: {
            table               : "CITY_MASTER",
            attribute           : "*",
            selectedAttribute   : "STATE_ID",
            conditionalOperator : "=",
            selectedData        : stateField.val()
        },
        success:function(response){
            var city_arr = $.parseJSON(response);
            //alert(response)
            resetSelectOptions(cityField, "city");
            for (var x in city_arr) {
                cityField.append($('<option>', {
                    value: city_arr[x].CITY_ID,
                    text:  city_arr[x].CITY_NAME
                }));
            }
            refreshFieldFeature(cityField);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus+" Error: " + errorThrown)
        }
    });
}
//------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
// fetching Security Question data
function securityQuestionFetch(securityQuestionField){
    showProgress(securityQuestionField);

    $.ajax({
        url: '/e-auction/site/script/fetching-script.php',
        type: 'POST',
        data: {
            table               : "SECURITY_QUESTION_MASTER",
            attribute           : "*",
            selectedAttribute   : "SECURITY_QUESTION_ID",
            conditionalOperator : ">",
            selectedData        : "0"
        },
        success:function(response){
            var ques_arr = $.parseJSON(response);
            //alert(response)
            resetSelectOptions(securityQuestionField, "question");
            for (var x in ques_arr) {
                securityQuestionField.append($('<option>', {
                    value: ques_arr[x].SECURITY_QUESTION_ID,
                    text:  ques_arr[x].SECURITY_QUESTION_DETAILS
                }));
            }
            refreshFieldFeature(securityQuestionField);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus+" Error: " + errorThrown);
        }
    });
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
