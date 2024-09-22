var form="<form action='http://192.168.0.192:8080/login' method='get'>"+
        "<table width=60% align=center border=1>"+
        "<tr><td colspan=2 align=center>Login"+
        "<tr><td width=20%>Username<td><input type='text' name='username'><br>"+
        "<tr><td width=20%>Password<td><input type='password' name='password'><br>"+
        "<tr><td colspan=2 align='center'><input type='submit' value='Login'>";
$("#content").html(form);