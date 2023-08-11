$(document).ready(function() {

    const btnSubmit = $('.submit-btn');

    btnSubmit.on('click', function() {
        const fnameTxt = $('#fnameTxt');
        const lnameTxt = $('#lnameTxt');
        const passwordTxt = $('#passwordTxt');
        
        const fnameVal = fnameTxt.val();
        const lnameVal = lnameTxt.val();
        const passwordVal = passwordTxt.val();

        if (!fnameVal && !lnameVal && !passwordVal) {
            return; 
        } else {
            $.ajax({
                url:"/api/user",
                method: "GET",
                dataType: "json",
                contentType: 'application/json',
                data: {
                    fname: fnameVal,
                    lname: lnameVal,
                    password: passwordVal,
                    flag: false
                },
                success: function(response) {
                    console.log("Data saved successfully:", response);
                },
                error: function(error) {
                    console.error("Error saving data:", error);
                }
            });
        }
    });
});