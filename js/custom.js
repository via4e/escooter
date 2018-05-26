$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    $("#mainsubmit").click(
       function(){
         console.log('mainsubmit click');
         sendAjaxForm('result_form', 'hiform', 'form.php');
         return false;
       }
    );

    $("#lowsubmit").click(
      function(){
        console.log('lowsubmit click');
        sendAjaxForm('result_form', 'lowform', 'form.php');
        return false;
      }
    );

    function sendAjaxForm(result_form, ajax_form, url) {
        console.log('sendAjaxForm',result_form, ajax_form, url,  $("#"+ajax_form).serialize() )
        $.ajax({
            url:     url,
            type:     "POST",
            dataType: "html",
            data: $("#"+ajax_form).serialize(),
            success: function(response) {
                console.log('response',response)
                result = $.parseJSON(response);
                $('footer').html('Имя: '+result.name+'<br>Телефон: '+result.phone);
                console.log ('Имя: '+result.name+'<br>Телефон: '+result.phone);
            },
            error: function(response) { // Данные не отправлены
                $('footer').html('Ошибка. Данные не отправлены.');
                console.log ('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
            }
        });
    }


});