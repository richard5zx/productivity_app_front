var user = JSON.parse(sessionStorage.getItem('user'));
var title = "Welcome " + user.firstname;
$("#header").html(title);

var navigation =
    "<a href='expense_browse.html'>Browse</a> | " +  
    "<a href='expense_add.html'>Add</a> | " +  
    "<a href='expense_update.html'>Update</a> | " +
<<<<<<< HEAD
    "<a href='expense_remove.html'>Remove</a> | " +
    "<a href='/index.html'>Logout</a>";

=======
    "<a href='expense_remove.html'>Remove</a> | "+
    "<a href='/index.html'>Logout</a>";
>>>>>>> 6616db2b078a7674c95bf0d1407b5ad939c36e60
$("#navigation").html(navigation);

var footer = "Expense Tracker";
$("#footer").html(footer);