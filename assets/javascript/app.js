$(document).ready(function () {
    ConfigureButtons();

    function ConfigureButtons() {
    

        // Level 1 Button Code

        $("#level1").click(function () {
            $("#start-page").hide();
            $("#joke-page").show();
    
        });



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
        // Level 3 Button Code
        $("#level3").click(function () {

            $("#start-page").hide();
            $("#event-page").show();

            let giphyAPI = "8WUUFHzUOAX0dQ43PlH9MnGXOQanNz4D";
            let giphyURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + giphyAPI;

            $.ajax({
                type: "GET",
                url: giphyURL,
                async: true,
                datatype: "json",
                success: function(json) {
                    console.log(json);
                },
                });
        });
    }
});
