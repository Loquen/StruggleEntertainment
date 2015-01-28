$(document).ready(function(){
		

  $("#about").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".artistbio").hide();
    $(".events").hide();
    $(".hot").hide();
    $(".gallery").hide();
    $(".aboutblurb").show();
    $("#about").addClass("hover");
    $("#artist").removeClass("hover");
    $("#event").removeClass("hover");
    $("#hot").removeClass("hover");
    $("#gallery").removeClass("hover");
  });

  $("#artist").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".aboutblurb").hide();
    $(".events").hide();
    $(".hot").hide();
    $(".gallery").hide();
    $(".artistbio").show();
    $("#artist").addClass("hover");
    $("#about").removeClass("hover");
    $("#event").removeClass("hover");
    $("#hot").removeClass("hover");
    $("#gallery").removeClass("hover");
  });

  $("#event").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".aboutblurb").hide();
    $(".artistbio").hide();
    $(".hot").hide();
    $(".gallery").hide();
    $(".events").show();
    $("#event").addClass("hover");
    $("#about").removeClass("hover");
    $("#artist").removeClass("hover");
    $("#hot").removeClass("hover");
    $("#gallery").removeClass("hover");
  });

  $("#hot").click(function(){
    //first hide all other divs
    //then display appropriate div
    $(".aboutblurb").hide();
    $(".events").hide();
    $(".artistbio").hide();
    $(".gallery").hide();
    $(".hot").show();
    $("#hot").addClass("hover");
    $("#about").removeClass("hover");
    $("#event").removeClass("hover");
    $("#artist").removeClass("hover");
    $("#gallery").removeClass("hover");
  });

  

  var galleryImages = [
    {
        image: 'images/gallery/4onthefloor.jpg',
        title: 'Four on the Floor Thursday',
    },
    {
        image: 'images/gallery/alphexbrip.jpg',
        title: 'Alphex and B-Rip',
    },
    {
        image: 'images/gallery/burningmandecomp.jpg',
        title: 'Burning Man Decompression',
    },
    {
        image: 'images/gallery/cam.jpg',
        title: 'Cameron',
    },
    {
        image: 'images/gallery/camilo.jpg',
        title: 'Camilo',
    }
  ];

  $("#gallery").click(function(){
      //first hide all other divs
      //then load galleria and run it 
      $(".aboutblurb").hide();
      $(".events").hide();
      $(".artistbio").hide();
      $(".hot").hide();
      $(".gallery").show();
      $("#gallery").addClass("hover");
      $("#about").removeClass("hover");
      $("#event").removeClass("hover");
      $("#artist").removeClass("hover");
      $("#hot").removeClass("hover");
    
      // //Load the galleria class theme and run gallery
      // Galleria.loadTheme('galleria/themse/classic/galleria.classic.min.js');
      // Galleria.run('.galleria', {
      //   dataSource:galleryImages
      // )};
    
    });

});