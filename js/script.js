$(document).ready(function() {
    $('.accordion__header').click(function() {
        
        $(".accordion__body").not($(this).next()).slideUp(400);
        $(this).next().slideToggle(400);
        
        $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
        $(this).closest(".accordion__item").toggleClass("open-accordion");
    });
});
///
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
    
    $('#register-box').css({'display':'block'});
    $('#login-box').css({'display':'none'});
    $('.header-modal div').removeClass('tab-active');
    $('.tab-register').addClass('tab-active');

  }
  

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function() {
    $('.header-modal div').click(function() {
        $('.header-modal div').removeClass('tab-active');
        $(this).addClass('tab-active');
    });
});
$('.tab-register').click(function() {

    $('#register-box').css({'display':'block'});
    $('#login-box').css({'display':'none'});

});
$('.tab-login').click(function() {

    $('#register-box').css({'display':'none'});
    $('#login-box').css({'display':'block'});

});
///////////////// btns
