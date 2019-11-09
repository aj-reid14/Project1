let colorVals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F"]

$(document).ready(function () {
    ConfigureButtons();
    gapi.load("client");

    function ConfigureButtons() {            

        // "Bored Ball" on-click
        $("#bored-ball").click(function() {
            let newColor = "#";
            let color_r = Math.floor(Math.random() * 256);
            let color_g = Math.floor(Math.random() * 256);
            let color_b = Math.floor(Math.random() * 256);

            // for (let i = 0; i < 6; i++) {
            //     let randomColorVal = colorVals[Math.floor(Math.random() * colorVals.length)];
            //     newColor += randomColorVal;
            // }
            $("#bored-ball").css("background-color", "rgba(" + color_r + ", " +  color_g + ", " + color_b + ", " +  0.4 + ")");
        })



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
    
            let jokeGIFapi = "5aq9ySNcbmDa3eP7R5B0OdOaJBvYihlY"
            let jokeGIFurl = "https://api.giphy.com/v1/gifs/random?api_key=" + jokeGIFapi;
    
            $.ajax({
                url: jokeGIFurl,
                method: "GET"
            }).then(function (response) {
                let newDIV = $("<div>");
                console.log(response);
                
                let newGIF = $("<img>");
                newGIF.addClass("gif");
                newGIF.attr("src", response.data.image_original_url);
                
                newDIV.append(newGIF);
                $("#jokeGIF").html(newDIV);
                
            })

        })

        // -----------------------

    $("#level2").click(function () {

        $("#start-page").hide();
        $("#media-page").show();
        
        loadClient();
    })
  
    // Level 3 Button Code
    $("#level3").click(function() {

        $("#start-page").hide();
        $("#event-page").show();

        $.ajax({
            url: "http://app.ticketmaster.com/discovery/v2/events.json?apikey=8WUUFHzUOAX0dQ43PlH9MnGXOQanNz4D&locale=*&city=Miami&size=200",    
            method: "GET"
        }).then(function(response)
        {
        
        console.log(response);

        let randomNumber = Math.floor(Math.random() * response._embedded.events.length);

        let randomEvent = response._embedded.events[randomNumber].url;
        console.log(randomEvent)
        $("#link").attr("href", randomEvent);

        let eventName = response._embedded.events[randomNumber].name;
        $("#link").text(eventName);
        console.log(eventName);
    
        let date = response._embedded.events[randomNumber].dates.start.localDate;
        $("#eventDate").text(date);
        console.log(date);

        let img = response._embedded.events[randomNumber].images[0].url;
        $("#eventIMG").attr("src", img);
        console.log(img);
        });

        $("#eventBtn").click(function(){
            $("#level3").click()
        });
    }); 
    
       

    

    $("#media-gif").click(function() {
        SearchGIF();
    })

    $("#media-video").click(function() {
        SearchVideo();
    })
    //On click back-button
    $("#go-back1").click (function () {
    $("#start-page").show(); 
    $("#joke-page").hide();
    });

    $("#go-back2").click (function () {
    $("#start-page").show(); 
    $("#media-page").hide();
    });

    $("#go-back3").click (function () {
    $("#start-page").show(); 
    $("#event-page").hide();
    });
    }
});

function loadClient() {
    let youtubeAPI = "AIzaSyBMblqCRc-6Ddlvc3mHpkgxcLUAy6HSezs";
    gapi.client.setApiKey(youtubeAPI);
    console.log(youtubeAPI);    
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(function() 
        {console.log("GAPI client loaded")},
        function(err) {console.error("GAPI client not loaded...")});
}

function SearchVideo() {
    let searchKeys = ["funny", "fail", "moments", "nature", "epic", "illusion", "bored", "cringe", "tricks", "magic", "chill"];
    let randomSearch = searchKeys[Math.floor(Math.random() * 5)];
    return gapi.client.youtube.search.list({
        "part": "snippet",
        "maxResults": 50,
        "order": "date",
        "q": randomSearch,
        "type": "video"
    }).then(function (response) {
        let randomResult = Math.floor(Math.random() * response.result.items.length);
        let videoLink = "https://www.youtube.com/embed/" + response.result.items[randomResult].id.videoId;

        let newVideo = $("<iframe frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>");
        newVideo.attr("width", screen.width * 0.3);
        newVideo.attr("height", screen.height * 0.3);
        newVideo.attr("src", videoLink);

        $("#media-appear-here").html(newVideo);

    },
        function (err) { console.log(err) })
}

function SearchGIF() {
    let giphyAPI = "ZRqA9M0EnGRDwkZNjreUefK1gHCmbCcR";
    let giphyURL = "https://api.giphy.com/v1/gifs/random?api_key=" + giphyAPI;
    
    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function(response)
    {        
        let newGIF = $("<img>");
        newGIF.addClass("gif");
        newGIF.attr("src", response.data.image_original_url);
        
        $("#media-appear-here").html(newGIF);                
    })
}
