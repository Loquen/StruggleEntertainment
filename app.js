$(document).ready(function(){
	var userId;
	//initialize soundcloud API with client ID
	SC.initialize({
		client_id: "2fb00e038d2c0bf801c77c8ed77588c5",
   		//redirect_uri: "http://example.com/callback.html",
	});	

    var userUrl = 'https://soundcloud.com/alphexandb-ripmusic';
	$.get('http://api.soundcloud.com/resolve.json?url=' + userUrl + '&client_id=2fb00e038d2c0bf801c77c8ed77588c5', 
  		function (result) {
    		//after we resolve the username, we grab all the tacks of the user and display the first 3
    		userId = result.id;
    		console.log(userId);
    		SC.get("/users/" + userId + "/tracks" , {limit:3}, function(tracks){
    			var track = tracks[0];
    			SC.oEmbed(track.uri,{maxheight: 100}, document.getElementById("displayMusic"));
			});
  		}
  	);	

  $("#about").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".artistbio").hide();
    $(".events").hide();
    $(".hot").hide();
    // $(".gallery").hide();
    $(".aboutblurb").show();
    $("#about").addClass("hover");
    $("#artist").removeClass("hover");
    $("#event").removeClass("hover");
    $("#hot").removeClass("hover");
    // $("#gallery").removeClass("hover");
  });

  $("#artist").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".aboutblurb").hide();
    $(".events").hide();
    $(".hot").hide();
    // $(".gallery").hide();
    $(".artistbio").show();
    $("#artist").addClass("hover");
    $("#about").removeClass("hover");
    $("#event").removeClass("hover");
    $("#hot").removeClass("hover");
    // $("#gallery").removeClass("hover");
  });

  $("#event").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".aboutblurb").hide();
    $(".artistbio").hide();
    $(".hot").hide();
    // $(".gallery").hide();
    $(".events").show();
    $("#event").addClass("hover");
    $("#about").removeClass("hover");
    $("#artist").removeClass("hover");
    $("#hot").removeClass("hover");
    // $("#gallery").removeClass("hover");
  });

  $("#hot").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".aboutblurb").hide();
    $(".events").hide();
    $(".artistbio").hide();
    // $(".gallery").hide();
    $(".hot").show();
    $("#hot").addClass("hover");
    $("#about").removeClass("hover");
    $("#event").removeClass("hover");
    $("#artist").removeClass("hover");
    // $("#gallery").removeClass("hover");
  });

  // $("#gallery").click(function(){
  //   //first hide all other divs
  //   //then load galleria and run it 
  //   $(".aboutblurb").hide();
  //   $(".events").hide();
  //   $(".artistbio").hide();
  //   $(".hot").hide();
  //   $(".gallery").show();
  //   $("#gallery").addClass("hover");
  //   $("#about").removeClass("hover");
  //   $("#event").removeClass("hover");
  //   $("#artist").removeClass("hover");
  //   $("#hot").removeClass("hover");
    
  //   //Load the galleria class theme 
  //   Galleria.loadTheme('galleria/themse/classic/galleria.classic.min.js');
  //   Galleria.run('.galleria');
  // });
});