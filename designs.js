//all var that I need to use
var submitBtn, clearBtn, table, rows, columns, colorChange;

submitBtn = $("#submitBtn");
clearBtn = $("#clearBtn");
table = $("#pixel_canvas");

//submit and clear button
submitBtn.click(function(event) {
  event.preventDefault();
  makeGrid();
});

clearBtn.click(function(event) {
  event.preventDefault();
  table.empty();
});

// function makeGrid

function makeGrid() {
  var rows = $("#input_height").val();
  var columns = $("#input_width").val();

  for (var r = 0; r < rows; r++) {
    table.append("<tr></tr>");
  }
  for (var c = 0; c < columns; c++) {
    $("tr").each(function() {
      $(this).append("<td></td>");
    });
  }
  // color to draw
  table.on("click", "td", function() {
    var colorChange = $("#colorPicker").val();
    $(this).css("background-color", colorChange);
  });
  table.on("dblclick", "td", function() {
    $(this).css("background-color", "transparent");
  });
}
