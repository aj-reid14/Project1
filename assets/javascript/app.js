$(document).ready(function () {
    ConfigureButtons();

    function ConfigureButtons() {
    

        // Level 1 Button Code

        // -----------------------



        // Level 2 Button Code
        $("#level2").click(function () {

        })
        // -----------------------



        // Level 3 Button Code

        // -----------------------
    }

    //On click button start questions appear
    $("#level1").click(function () {
        $("#start-page").hide();
        $("#joke-page").show();

    });

    $("#level2").click(function () {
        $("#start-page").hide();
        $("#media-page").show();

    });

    $("#level3").click(function () {
        $("#start-page").hide();
        $("#event-page").show();

    });

});
