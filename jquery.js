$(document).ready(function() {
    $("#panel1").click(function() {
        $("#panel2").slideToggle("slow");
        $("#panel1").css('background', '#3933FF');
    });

});

$(document).ready(function() {

    $("#panel2").click(function() {
        $("#panel3").slideToggle("slow");

    });

});