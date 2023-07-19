var _toDoArray=[];
var _topPointer=-1;

// when document is ready then we are binding all the module into single unit:
$(document).ready(function (){
    allEventsBinding();
});


// function to add task in tasklist:
function addTaskTodo(todo){
    if(!todo){
        return;
    }
    _toDoArray.push(todo);
}

// empty the task from task list:
function unMounting(){
    $("#todo_list_display").empty();
}

function deleteTaskTodo(){
    _toDoArray.splice(index,1);
}

function allEventsBinding(){
    $("#add_todo_btn").on("click",function (){
       addTaskTodo($("#todo_input").val());
       renderList();
    })
}

// Rendering each element of a task:
function renderList(){
    unMounting();
    _toDoArray.forEach((todo,index)=>{
        $("#todo_list_display").append(`
            <div id="section-bar" class="section-bar">
                <div id="${todo+"_"+index}" class="todoItem">
                    ${todo}
                </div>
                <input id= "edit_input_${index}" class="todo-input-small sec-hide" />

                <div id="edit_delete_cont_${index}" >
                    <button id="editBtn" class="editBtn">Edit</button>
                    <button id="removeBtn" class="removeBtn">X</button>
                </div>
                
                <button class="add-button B1 sec-hide" id="save_edit_btn_${index}" >Save</button>
            </div>
        `);

    });
}
