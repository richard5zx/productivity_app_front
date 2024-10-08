$(document).ready(function() {
    $.ajax({
        type:'get',
        url:'http://192.168.1.136:8080/expense/showAllExpenses',
        success:function(data) {
            var table_start =
            "<table width=100% align='center' border=1> " +
            "   <tr>" +
            "       <td>Expense_id</td>" + 
            "       <td>Category</td>" +
            "       <td>Description</td>" +
            "       <td>Expense</td>" +
            "   </tr>";
            var table_end = "</table>";

            var table_content = "";
            for (var i = 0; i < data.length; i++) {
                table_content +=
                "<tr>" +
                "   <td>" + data[i].expense_id + "</td>" +
                "   <td>" + data[i].category + "</td>" +
                "   <td>" + data[i].description + "</td>" +
                "   <td>" + data[i].expense + " " + data[i].currency + "</td>" +
                "</tr>";
            }
            $("#content").html(table_start + table_content + table_end);
        },
        error:function() {
            console.log(error);
        }
    });
});