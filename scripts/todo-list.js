const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="name-todolist">${name}</div>
      <div class="date-todolist">${dueDate}</div>
      <button class = "delete-button js-delete-button">
        Delete
      </button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addItem();
});

function addItem() {
  let inputName = document.querySelector('.js-input-name');

  let inputDate = document.querySelector('.js-input-date');

  todoList.push({ name: inputName.value, dueDate: inputDate.value });
  renderTodoList();
  inputName.value = '';
  inputDate.value = '';
}