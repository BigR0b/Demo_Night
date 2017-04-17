var movies = [
  {
    "title": "Moonlight",
    "poster": "../img/Moonlight.jpg"
    "discription": "A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami."
  },
  {
    "title" : "La La Land",
    "poster": "../img/lalaland.jpg"
    "discription": "The story of Mia, an aspiring actress, and Sebastian, a dedicated jazz musician, struggling to make ends meet while pursuing their dreams in a city known for destroying hopes and breaking hearts."
  },
  {
    "title" : "Arrival",
    "poster": "../img/arrival.jpg"
    "discription": "When twelve mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors."
  },
  {
    "title" : "Fences",
    "poster": "../img/fences.jpg"
    "discription": "Fences is the story of Troy Maxson, a mid-century Pittsburgh sanitation worker who once dreamed of a baseball career, but was too old when the major leagues began admitting black players. He tries to be a good husband and father, but his lost dream of glory eats at him, and causes him to make a decision that threatens to tear his family apart."
  }
];
$("m").append("<p>"movies.poster"</p>")
/*<img src="img/moonlight.jpg" class="img-responsive" alt="">
<h2>Moonlight</h2>
<p> A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami. </p>
</div>*/

var addTopage = function(obj){
  var contentId = i;
  var contantNode = $('#movie' +contentId);

  $('#movie-group').append($("<div id='" + contentId + "'></div>");
  $contentNode.append($("<img src= movies[i].poster>"));
  $contentNode.append($("<h2>").text(movies[i].title));
  $contentNode.append($("<p>").text(movies[i].discription));

};
var i = 0;
movies.forEach(function(elem) {
  // body...
});



/*
var addToPage = function( obj ){
  var contentId = 'book' + obj.id;
  var $contentNode = $('#' + contentId); // the "$" here is just a naming convention

  $('#content').append($("<div id='" + contentId + "'></div>");
  $contentNode.append($("<div class='name'>").text(obj.name));
  $contentNode.append($("<div class='author'>").text(obj.author));
  $contentNode.append($("<div class='price'>").text(obj.price));
  $contentNode.append($("<div class='cover'>").html("<img src='" + obj.picture_url + "'>"))
};
*/
