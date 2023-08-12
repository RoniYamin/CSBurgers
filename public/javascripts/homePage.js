$(document).ready(function() {

    const btnSubmit = $('.submit-btn');

    btnSubmit.on('click', function() {
        const fnameTxt = $('#fnameTxt');
        const lnameTxt = $('#lnameTxt');
        const passwordTxt = $('#passwordTxt');
        const error = $('#error');
        
        const fnameVal = fnameTxt.val();
        const lnameVal = lnameTxt.val();
        const passwordVal = passwordTxt.val();

        if (!fnameVal && !lnameVal && !passwordVal) {
            error.html('לא הזנת את כל כל הנתונים');
            if (error.hasClass('hide')) {
                error.removeClass('hide');
            }
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
                    if (!error.hasClass('hide')) {
                        error.addClass('hide');
                    }
                    console.log("Data saved successfully:", response);
                },
                error: function(error) {
                    error.html('יש לך טעות בשם או בסיסמה אנא תקן כדי להתחבר');
                    if (error.hasClass('hide')) {
                        error.removeClass('hide');
                    }
                }
            });
        }
    });
});