$(document).ready(function (){
  var icecreams = ["chocolate chip cookie dough", "sea salt caramel", "pecan praline", "strawberry"];
  $(".container").append("<ul id='flavors'></ul>");

  icecreams.forEach(function(flavors){
    $("#flavors").append("<li>" + flavors + "</li>");
  })


});
