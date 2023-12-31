// This is an empty array to add items in todo list
let todoList = [
  {
    item: 'Plan some activities',
    dueDate: '4/10/2023'
  },
  {
    item: 'Complete the course',
    dueDate: '4/10/2023'
  },
  {
    item: 'Buy groceries',
    dueDate: '4/10/2023'
  }
];

displayItems();

// funtion for onclick on add button
function addTodo() { 
  let inputElement = document.querySelector('#todo-input');  // This will select the html element that is needed for add button
  let inputDate = document.querySelector('#todo-date');

  let todoItem = inputElement.value;   // This will take out the value from the selected element
  let todoDate = inputDate.value;
  todoList.push({item: todoItem, dueDate: todoDate});    // This will add every item at the end of array
  inputElement.value = '';  //This will clear the input box after clicking add button
  inputDate.value;
  displayItems();
};

// Function to display the list 
function displayItems() {
  let containerElement = document.querySelector('.todo-container'); //This will select the div element to display todo list.

  let newHTML = '';
  for (i = 0; i < todoList.length; i++) {
    let {item, dueDate} = todoList[i];
    newHTML = newHTML + ` 
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="delete-btn" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHTML;  
}