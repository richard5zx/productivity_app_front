var form="<form action='http://192.168.1.136:8080/register' method='post'>"+
        "<table width=60% align=center border=1>"+
        "<tr><td colspan=2 align=center>Register details"+
        "<tr><td width=20%>Firstname<td><input type='text' name='firstname'>"+
        "<tr><td width=20%>Lastname<td><input type='text' name='lastname'><br>"+
        "<tr><td width=20%>Username<td><input type='text' name='username'><br>"+
        "<tr><td width=20%>Password<td><input type='password' name='password'><br>"+
        "<tr><td width=20%>Country<td><input type='text' name='country'><br>"+
        "<tr><td width=20%>Email<td><input type='text' name='email'><br>"+        
        "<tr><td colspan=2 align='center'><input type='submit' value='Register'>";

$("#content").html(form);

