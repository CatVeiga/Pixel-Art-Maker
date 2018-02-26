// variables to use 
var submitBtn = $("#submitBtn");
var clearBtn = $("#clearBtn");
var table = $("#pixel_canvas");

submitBtn.click(function(event) { // when you click on that btn
  event.preventDefault(); 
  makeGrid(); // creates the grid
});

clearBtn.click(function(event) { // when you click on the btn
  event.preventDefault();
  table.empty(); // grid clears all
});

function makeGrid() {

  var rows = $("#input_height").val(); // variable for height
  var columns = $("#input_width").val (); // variable for width

  for (var r = 0; r < rows; r++) {
    table.append("<tr></tr>"); // for esch row append value on table
  }

  for (var c = 0; c < columns; c++) {
     $("tr").each(function() {
      $(this).append("<td></td>"); // for each row append  a column
    });
  }

  // color to draw
  table.on("click", "td", function() {

    var colorChange = $("#colorPicker").val(); // variable for color picker

    $(this).css("background-color", colorChange); // when click the color change
  });

  table.on("dblclick", "td", function() {
    $(this).css("background-color", "transparent"); // when dblclick the background set transparent
  });
}
