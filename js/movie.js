var movie1 =   {
    "id": 1,
    "title": "Moonlight",
    "poster": "../img/Moonlight.jpg",
    "discription": "A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami."
  };

var movie2 = {
    "id": 2,
    "title" : "La La Land",
    "poster": "../img/lalaland.jpg",
    "discription": "The story of Mia, an aspiring actress, and Sebastian, a dedicated jazz musician, struggling to make ends meet while pursuing their dreams in a city known for destroying hopes and breaking hearts."
  };

  var movie3 ={
    "id": 3,
    "title" : "Arrival",
    "poster": "../img/arrival.jpg",
    "discription": "When twelve mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors."
  };

  var movie4 = {
    "id": 4,
    "title" : "Fences",
    "poster": "../img/fences.jpg",
    "discription": "Fences is the story of Troy Maxson, a mid-century Pittsburgh sanitation worker who once dreamed of a baseball career, but was too old when the major leagues began admitting black players. He tries to be a good husband and father, but his lost dream of glory eats at him, and causes him to make a decision that threatens to tear his family apart."
  };
  var movies =[movie1, movie2, movie3, movie4];

var generateItem = function generateItem( product ){
    $( "#movie" + product.id + " img" ).attr( "src", product.poster );
    $( "#movie" + product.id + " h2" ).text( product.title );
    $( "#movie" + product.id + " p" ).text( product.discription );

};
 var i = 0;
 while(i < movies.length){
   console.log(movies[i].name);
   generateItem(movies[i]);
   i++;
 }
