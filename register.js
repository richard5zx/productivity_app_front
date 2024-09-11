var prompt1="Please enter your details below to register<br>";
var form="<form action='http://192.168.1.136:8080/register' method='post'>"+
        "firstname=<input type='text' name='firstname'><br>"+
        "lastname=<input type='text' name='lastname'><br>"+
        "username=<input type='text' name='username'><br>"+
        "password=<input type='password' name='password'><br>"+
        "country=<input type='text' name='country'><br>"+
        "email=<input type='text' name='email'><br>"+        
        "<input type='submit' value='Register'>";

$("#content").html(prompt1+form);

