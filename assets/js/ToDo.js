//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("span").click(function(event) {
   $(this).parent().fadeOut(800, function() {
      $(this).remove(); 
   }); 
    event.stopPropagation();
});

//Adding li from input text
$("input[type='text']").keypress(function(event) {
   if(event.which == 13) {
       //grabbing new todo text from input
       var toDoText = $(this).val();
       $(this).val("");
       //create new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
   } 
});

$(".fa-minus-circle").click(function() {
   $("input[type='text']").fadeToggle(); 
});




