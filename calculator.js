// an array to store all of our cars
let employee = [];

// // max garage size
// let garageSize = 2;


$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  // add click event handler that calls the addNewCar function
  $('#employee-form').on('submit', addNewEmployee);

  $('#employee').on('click', '.remove-btn', removeEmployee);
}

function addNewEmployee(evt) {
  evt.preventDefault();

  // console.log('bool?', $('#year-input'));

  // if one or more inputs is blank, don't add a new employee obj to array
  if (
    $('#firstName-input').val() === '' 
    || $('#lastName-input').val() === ''
    || $('#id-input').val() === ''
    || $('#title-input').val() === ''
    || $('#annualSalary-input').val() === ''
  ) {
    alert('Values plz!');
    return;
  }
  // console.log('working!');

  // get input values
  let newEmployee = {
    firstName: $('#firstName-input').val(),
    lastName: $('#lastName-input').val(),
    id: $('#id-input').val(),
    title: $('#title-input').val(),
    annualSalary: $('#annualSalary-input').val(),
  };

  // add to array
//   employeelist.push(newEmployee);

//   checkNumEmployees();

  // clear the inputs
  $('#firstName-input').val('');
  $('#lastName-input').val('');
  $('#id-input').val('');
  $('#title-input').val('');
  $('#annualSalary-input').val('');
  // anything else?
  // re-render fresh values!
  render();
}

// function removePerson() {
//   // console.log('bye!');

//   console.log('this is:', $(this));

//   $(this).parent().remove();

//   // to remove from the array (state), use .splice() JS array method
//   // will likely also need jQuery's .data() method to get the index
//   // we're gonna talk about .data() next week!
// }

// // check if garage is full
// function checkNumCars() {
//   if (garage.length === garageSize) {
//     $('#car-form').children().prop('disabled', true); // disable inputs
//   }
// }

function render() {
  // update the DOM
  $('#employee').empty();

  // append all car objs in garage array
  for (let person of employee) {
    $('#employee').append(`
      <li>
        ${person.firstName} ${person.lastName} ${person.id} ${person.title} ${person.annualSalary}
        <button class="remove-btn">Remove</button>
      </li>
    `);
  }
  let Employees = [
    /* no posts yet  */
];
// let darkMode = false;

function onReady() {
    // Event
    $('#messageForm').on('submit', onSubmitEmployee);

    // "The delete button ain't there yet" - Edan
    // console.log('in onReady', $('.deleteBtn'));
    // $('.deleteBtn').on('click', onDelete);

    // Listen for clicks anywhere on the table
    // but only call onDelete if it's a `.deleteBtn` element
    //
    // aka "Event Delegation"
    $('#employeesTable').on('click', '.deleteBtn', onDelete);
}   

function onDelete() {
    console.log('in onDelete. Which button did we click? $(this) one!', $(this));

    // BASE: remove the <tr> directly from the DOM
    // <button>    <td>      <tr>
    $(this).parent().parent().remove();

    // STRETCH: somehow update the posts array
    // to remove the item we clicked on
    // then call
    // render() to render that state;
}

// Event handler
function onSubmitEmployee(evt) {
    // Don't reload the page, plz
    evt.preventDefault();

    console.log('onSubmitEmployee', $(this));
    
    // Update State....
    let newEmployee = {
        firstName: $('#firstName-input').val(),
        lastName: $('#lastName-input').val(),
        ID: $('id-input').val(),
        title: $('#title-Input').val(),
        annualSalary: $('#annualSalary-Input').val()
    };
    console.log('newEmployee is', newEmployee);
    employee.push(newEmployee)  // TODO: add object to state
    console.log('employees are now', employee);

    // Render
    render(); 
}

function render() {
    // Empty the table
    $('#employeesTable').empty();

    // Then add everything back into it!
    for (let post of posts) {
        // Adding a <tr> for each post
        $('#employeesTable').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td>
                    <button class="deleteBtn">
                        ☠️
                    </button>
                </td>
            </tr>
        `);
    }

}
}