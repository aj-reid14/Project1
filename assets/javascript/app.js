$(document).ready(function () {
    ConfigureButtons();

    function ConfigureButtons() {
        
        // Level 1 Button Code
         $("#level1").click(function () {
            $("#start-page").hide();
            $("#joke-page").show();
                        
            let giphyURL = "https://official-joke-api.appspot.com/random_ten";
            
            $.ajax({
              url: giphyURL,
              method: "GET"
            })
            .then(function(response) {
            console.log(response)
            
            let jokeSetup = $("<div>" + response[1].setup + "</div>");
            $("#jokeSetup").html(jokeSetup);
            
            let jokeDelivery = $("<div>" + response[1].punchline + "</div>");
            $("#jokeDelivery").html(jokeDelivery);
            console.log(response[1].punchline);
            });
            // Delay punchline 
            // $("#jokeDelivery").delay("slow").fadeIn();
            
        });
            
        // -----------------------



        // Level 2 Button Code
        $("#level2").click(function () {

            $("#start-page").hide();
            $("#media-page").show();
            
            let giphyAPI = "ZRqA9M0EnGRDwkZNjreUefK1gHCmbCcR";
            let giphyURL = "https://api.giphy.com/v1/gifs/random?api_key=" + giphyAPI;
            
            $.ajax({
                url: giphyURL,
                method: "GET"
            }).then(function(response)
            {
                let newDIV = $("<div>");
                console.log(response);
                
                let newGIF = $("<img>");
                newGIF.addClass("gif");
                newGIF.attr("src", response.data.image_original_url);
                
                newDIV.append(newGIF);
                $("#media-appear-here").html(newDIV);
                
            })



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

    $("#level3").click(function () {
        $("#start-page").hide();
        $("#event-page").show();

    });

    
    
    
});
