// This is an active module of the canuckistani (38) Add-on

function myListener() {
  console.log("A selection has been made.");
}
var selection = require("selection");
selection.on('select', myListener);

