var user_id = sessionStorage.getItem("user").user_id;
console.log(user_id);

var form = 
"<table width=60% align=center border=1" +
"   <tr>" +
"       <td colspan=2 align=center>Add Expense</td>" +
"   </tr>" +
"   <tr>" +
"       <td width=20%>Category</td>" +
"       <td><input type='text' name='category' id='category' placeholder='Enter category'></td>" + 
"   </tr>" +
"   <tr>" +
"       <td width=20%>Description</td>" +
"       <td><input type='text' name='description' id='description' placeholder='Enter description'></td>" +
"   </tr>" +
"   <tr>" +
"       <td width=20%>Expense</td>" +
"       <td><input type='text' name='expense' id='expense' placeholder='Enter expense'></td>" + 
"   </tr>" +
"   <tr>" +
"       <td width=20%>Currency</td>" +
"       <td><input type='text' name='currency' id='currency' placeholder='Enter currency'></td>" +
"   </tr>" +
"   <tr>" +
"       <td colspan=2 align=center>" +
"       <button id='addBtn'>Add Expense</button>"
"   </td>" +
"   </tr>";
$("#content").html(form);

$("#addBtn").click(function() {
    var user_id = sessionStorage.getItem("user").user_id;
    var category = $("#category").val();
    var description = $("#description").val();
    var expense = $("#expense");
    var currency = $("#currency");
    $.get("http://192.168.1.136:8080/expense/addExpense", {
        user_id:user_id,
        category:category,
        description:description,
        expense:expense,
        currency:currency
    }),
    function(response) {
    }
});

/*

$("#submitBtn").click(function() {
	var username = $("#username").val();
	var password = $("#password").val();
	$.get("http://192.168.1.136:8080/login", {
		username:username,
		password:password
	}, function(response) {
		if(!$.trim(response)) {
			location.replace("/login/loginFailure.html");
		} else {
			sessionStorage.setItem('user', response);
			console.log(sessionStorage.getItem('user').val);
			location.replace("/expense/expense_browse.html");
		}
	})
});

*/