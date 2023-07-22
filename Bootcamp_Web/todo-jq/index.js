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
    _topPointer=_topPointer+1;
}

// empty the task from task list:
function unMounting(){
    $("#todo_list_display").empty();
}

// Delete any task

function deleteTaskTodo(index){
    _toDoArray.splice(index,1);
    _topPointer=_topPointer-1;
    unMounting();
    reRenderList();
}

// Edit and update task:

function editAndUpdate(index){
    $(`#val_${index}`).addClass("sec-hide");
    $(`#edit_input_${index}`).removeClass("sec-hide");
    $(`#edit_input_${index}`).val(_toDoArray[index]);
    $(`#edit_delete_cont_${index}`).addClass("sec-hide");
    $(`#save_edit_btn_${index}`).removeClass("sec-hide");    
          
}

// All Event Binding:

function allEventsBinding(){
    $("#add_todo_btn").on("click",function (){
       addTaskTodo($("#todo_input").val());
       $("#todo_input").val("");
       unMounting();
       reRenderList();
    });
    $("#main-header").on("focus", function () {
        $("#main-header").addClass("main-header-focus");
      });
      $("#main-header").off("focus", function () {
        $("#main-header").addClass("main-header");
      });
}

// View layer reRendering:

function reRenderList(){
// Rendering each element of a task:    
    _toDoArray.forEach((todo,index)=>{
        $("#todo_list_display").append(`
            <div id="section-bar" class="section-bar">
                <div id="val_${index}" class="todoItem">
                    ${todo}
                </div>
                <input id= "edit_input_${index}" class="todo-input-small sec-hide" />

                <div id="edit_delete_cont_${index}" >
                    <button id="editBtn${index}" class="editBtn">Edit</button>
                    <button id="removeBtn${index}" class="removeBtn">X</button>
                </div>
                
                <button class="add-button B1 sec-hide" id="save_edit_btn_${index}" >Save</button>
            </div>
            
        `);
        $(`#removeBtn${index}`).on("click",function (){
            deleteTaskTodo(index);
        });

        $(`#editBtn${index}`).on("click",function (){
            editAndUpdate(index);
        });

        $(`#save_edit_btn_${index}`).on("click",function(){
            _toDoArray[index] = $(`#edit_input_${index}`).val();
            unMounting();
            reRenderList();
        }); 
    });   
}
