/** MUZHDA EHSAN **/
/** This is an IIFE method which loads the footer image/logo and copy write message.*/ 
$(function(){
    document.getElementById("myFooter").innerHTML =
    "<div class='dc_footer row'>"
    +"<div class='col-md-6 col-sm-12 footer_img_wrap'>"
    +'<img src="../assets/img/ppl-logo.svg" class="img-fluid footer_img" alt="Durham College Part-time and Professional Learning Logo">'
    +"</div><div class='col-md-6 col-sm-12'>"
    +"<p class='dc_copyright'>© Durham College. All rights reserved.</p></div></div>";
});

$(document).ready(function(){
    // Popover trigger
    $('[data-toggle="popover"]').popover();

    // Popover fade out once it looses focus
    $('.popover-dismiss').popover({
      trigger: 'focus'
    })

    // tooltip trigger per page (there can be multiple tooltips 
    // within a page but they need to sit within a div with this ID)
    $('.tooltip-1').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    })
});

/**
*Used for tab functionality to make the tab pills active and inactive
*stringInfo taken from a attribute id
*id is in the format "name-tabID-totalNumOfTabs"
**/
$(document).on("click", ".tabButton", function() {

    var stringInfo = this.id;
    var itemsArray = stringInfo.split("-");
    
    var name = itemsArray[0];
    var tabID = itemsArray[1];
    var numberOfTABS = itemsArray[2];

    $("." + name + tabID).addClass('active');

    for(x = 1; x <= numberOfTABS; x++) {
        if(x != tabID) {
            $("." + name + x).removeClass('active');
        }
    }

});