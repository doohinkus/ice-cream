$(document).ready(function (){
 var tags = ["p", "h1", "img"];
 var names = ["paragraph", "heading", "image"];

 tags.forEach(function (tag){
   jQuery(tag).click(function() {

    alert("This is a " + tag);


  });
 });

});
