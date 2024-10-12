var form="<table width=60% align=center border=1>"+
"<tr><td colspan=2 align=center>Login"+
"<tr><td width=20%>Username<td><input type='text' name='username' id='username' placeholder='Enter username'>"+
"<tr><td width=20%>Password<td><input type='password' name='password' id='password' placeholder='Enter password'>"+
"<tr><td colspan=2 align='center'><button id='submitBtn'>Submit</button>";

$("#content").html(form);

$("#submitBtn").click(function() {
	var username = $("#username").val();
	var password = $("#password").val();
	$.get("http://192.168.1.136:8080/user/login", {
		username:username,
		password:password
	}, function(response) {
		if(!$.trim(response)) {
			location.replace("/login/loginFailure.html");
		} else {
			sessionStorage.setItem("user", JSON.stringify(response)); // Session only stores strings. So we need to make the object a string. Retrieve using "JSON.parse(sessionStorage.getItem('xyzObject'));"
			location.replace("/expense/expense_browse.html");
		}
	})
});

