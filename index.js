var todoList = [];

$("#btn").click (function(){
    var todo = $("input").val();
    todoList.push({text : todo, active: true});
    $("input").val("");
    $("#todoList").empty();
    $("#todoTemplate").tmpl(todoList).appendTo("#todoList");
})

$("#todoList").on("click", "li", function(){

    todoList[$(this).index()].active = !todoList[$(this).index()].active;
    $("#todoList").empty();
    $("#todoTemplate").tmpl(todoList).appendTo("#todoList");
})