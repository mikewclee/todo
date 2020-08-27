// $('#add').on('click', (e)=> {
//     e.preventDefault();
//     let userInput = $('#newtask').val();
//     console.log(userInput)
//     AddTodo(userInput);
// })

$('#add').click(addTodo);
$('#newtask').keypress((event) => {
    if (event.which == 13) {
        addTodo();
    }
})
$(document).on('click', '#delete', removeTodo);

function addTodo() {
    //append userInput to #tasks
    let userInput = $('#newtask').val();
    if (userInput == "") {
        return
    } else {
        $('#tasks').append(`<div> ${userInput} <span id="delete">X</span></div>`)

        $('#newtask').val('');
    }
}

function removeTodo() {
    $(this).closest('div').remove();
};