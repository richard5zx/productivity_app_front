var form = 
"<table width=60% align=center border=1" +
"   <tr>" +
"       <td colspan=2 align=center>Add Expense</td>" +
"   </tr>" +
"   <tr>" +
"       <td width=20%>Expense Id</td>" +
"       <td><input type='text' name='expense_id' id='expense_id' placeholder='Enter Expense Id'></td>" + 
"   </tr>" +
"   <tr>" +
"       <td colspan=2 align=center>" +
"       <button id='rmvBtn'>Remove Expense</button>"
"   </td>" +
"   </tr>";
$("#content").html(form);

$("#rmvBtn").click(function() {
    var expense_id = Number($("#expense_id").val());
    rmvUrl = "http://192.168.1.136:8080/expense/removeExpense/" + expense_id;
    $.ajax({
        type:"delete",
        url:rmvUrl,
        success:function(data) {
            console.log(data);
        },
        error:function() {
            console.log("error");
        }
    })
});

function clearField() {
    $("#expense_id").val("");
}