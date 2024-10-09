var form="<table width=60% align=center border=1>"+
        "<tr><td colspan=2 align=center>Register details"+
        "<tr><td width=20%>Firstname<td><input type='text' name='firstname' id='firstname' placeholder='Enter firstname'>"+
        "<tr><td width=20%>Lastname<td><input type='text' name='lastname' id='lastname' placeholder='Enter lastname'>"+
        "<tr><td width=20%>Username<td><input type='text' name='username' id='username' placeholder='Enter username'>"+
        "<tr><td width=20%>Password<td><input type='password' name='password' id='password' placeholder='Enter password'>"+
        "<tr><td width=20%>Country<td><input type='text' name='country' id='country' placeholder='Enter country'>"+
        "<tr><td width=20%>Email<td><input type='text' name='email' id='email' placeholder='Enter email'>"+        
        "<tr><td colspan=2 align='center'><button id='submitBtn'>Submit</button>";

$("#content").html(form);

$("#submitBtn").click(function() {
	
	var firstname = $("#firstname").val();
	var lastname = $("#lastname").val();
	var username = $("#username").val();
	var password = $("#password").val();
	var country = $("#country").val();
	var email = $("#email").val();
		
	$.post("http://192.168.1.136:8080/user/register",{
			firstname:firstname,
			lastname:lastname,
			username:username,
			password:password,
			country:country,
			email:email
		},function(response) {
			if(response === true) {
				location.replace("/register/registerSuccess.html");
			} else {
				location.replace("/register/registerFailure.html");
			}
		});	
});