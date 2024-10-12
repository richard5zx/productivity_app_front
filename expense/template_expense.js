var user = JSON.parse(sessionStorage.getItem('user'));
var title = "Welcome " + user.firstname;
$("#header").html(title);

var navigation =
    "<a href='expense_browse.html'>Browse</a> | " +  
    "<a href='expense_add.html'>Add</a> | " +  
    "<a href='expense_update.html'>Update</a> | " +
    "<a href='expense_remove.html'>Remove</a> | " +
    "<a href='/index.html'>Logout</a>";

$("#navigation").html(navigation);

var footer = "Expense Tracker";
$("#footer").html(footer);