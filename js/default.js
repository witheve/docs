$(document).ready(function() {

  $("#download").click(function() {
    $("#download").toggle();
  });

  $(".download").click(function(e) {
    $("#download").toggle();
    e.preventDefault();
  });

});
