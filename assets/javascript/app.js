$(document).ready(function () {
    ConfigureButtons();
    gapi.load("client");

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

function loadClient() {
    let youtubeAPI = "AIzaSyBMblqCRc-6Ddlvc3mHpkgxcLUAy6HSezs";
    gapi.client.setApiKey(youtubeAPI);
    console.log(youtubeAPI);    
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(function() 
        {console.log("GAPI client loaded")},
        function(err) {console.error("GAPI client not loaded...")});
}

function SearchVideo() {
    let searchKeys = ["funny", "epic moments", "illusions", "try not to laugh", "bored"];
    let randomSearch = searchKeys[Math.floor(Math.random() * 5)];
    return gapi.client.youtube.search.list({
        "part": "snippet",
        "maxResults": 1,
        "order": "date",
        "q": randomSearch
    }).then(function(response) {console.log(response);}, 
            function(err) {console.log(err)})
}

function ConfigureButtons() {

    $("#go-back1").click(function() {
        SearchVideo();
    })

    $("#level2").click(function () {

        $("#start-page").hide();
        $("#media-page").show();
        
        let giphyAPI = "ZRqA9M0EnGRDwkZNjreUefK1gHCmbCcR";
        let giphyURL = "https://api.giphy.com/v1/gifs/random?api_key=" + giphyAPI;
        
        loadClient();
        // $.ajax({
        //     url: giphyURL,
        //     method: "GET"
        // }).then(function(response)
        // {
        //     let newDIV = $("<div>");
        //     console.log(response);
            
        //     let newGIF = $("<img>");
        //     newGIF.addClass("gif");
        //     newGIF.attr("src", response.data.image_original_url);
            
        //     newDIV.append(newGIF);
        //     $("#media-appear-here").html(newDIV);                
        // })



    })
}