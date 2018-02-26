//all var that I need to use
var rows, columns, colorChange;

var submitBtn = $("#submitBtn");
var clearBtn = $("#clearBtn");
var table = document.getElementById("#pixel_canvas");

//submit and clear button

submitBtn.click(function(event) { //when click on submit button grid appears
  event.preventDefault();
  makeGrid();
});

clearBtn.click(function(event) { //when click on a clear button grid disappear
  event.preventDefault();
  table.empty();
});

// function makeGrid

function makeGrid() {  //create a grid 
  rows = $("#input_height").val();  
  columns = $("#input_width").val(); 

  for (var r = 0; r < rows; r++) { 
    table.append("<tr></tr>"); 
  }
  for (var c = 0; c < columns; c++) {
    $("tr").each(function() {
      $(this).append("<td></td>"); //for each row, appends a column
    });
  }
  
  // color to draw
  table.on("click", "td", function() {
    colorChange = $("#colorPicker").val();
    $(this).css("background-color", colorChange);
  });
  table.on("dblclick", "td", function() {
    $(this).css("background-color", "transparent");
  });
}
