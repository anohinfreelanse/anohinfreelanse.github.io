$(function() {
	$('.sl').slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: false,
        arrows: false,
        vertical: false,
        focusOnSelect: false,
        infinite: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
	
	});
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $(document).ready(function(){
    $(".mail-call").click(function(){
        document.body.getElementsByClassName('sent-message-right')[0].style.display="block"; return false;
    });
});

    
    $(document).ready(function(){
    $(".exit").click(function(){
        document.body.getElementsByClassName('sent-message-right')[0].style.display="none"; return false;
    });
});
    $(document).ready(function(){
    $(".submit1").click(function(){
        document.body.getElementsByClassName('sent-message-right')[0].style.display="none"; return false;
    });
});




});



