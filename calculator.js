// an array to store all of our cars
$(document).ready(readyNow);



let employees = [
    //noemployees yet
];

function readyNow() {
  console.log("DOM is loaded!");

  // add click event handler that calls the addNewEmployee function
  $('#employee-form').on('submit', onSubmitEmployee);

//   $('#employee').on('click', '.remove-btn', removeEmployee);
  $('#employeesTable').on('click', '.deleteBtn', onDelete);



}
function onDelete() {
    console.log('in onDelete. Which button did we click? $(this) one!', $('#deleteBtn'));

    // BASE: remove the <tr> directly from the DOM
    // <button>    <td>      <tr>
    $(this).parent().parent().remove();

}
function onSubmitEmployee(evt) {
    // Don't reload the page, plz
        evt.preventDefault()
       
    console.log('onSubmitEmployee', $('#submit'));
    
    // // // Update State....
    let newEmployee = {
    firstName: $('#firstName-input').val(),
    lastName: $('#lastName-input').val(),
    id: $('#id-input').val(),
    title: $('#title-input').val(),
    annualSalary: $('#annualSalary-input').val(),
    };
    console.log('newEmployee is', newEmployee);
    employees.push(newEmployee)  // TODO: add object to state
    console.log('employees are now', employees);

    totalMonthly();

    // Render
    render(); 
    // totalsalary = annualSalary[i]++;
    // totalmonthly = (totalsalary)/12

}
function totalMonthly(){
    let totalSalary = 0;
    $('.totalMonthlySalary').empty();
    for (let salary of employees){
      totalSalary+= Number(salary.annualSalary);
    }
    $('.totalMonthlySalary').append(`Total Monthly Salary: ${totalSalary / 12}`);
    if((totalSalary/12) >= 0){
        $('.totalMonthlySalary').css('font-color', 'black');
      }
   
  }

function render() {
    // Empty the table
    // $('#employeesTable').empty();

    // Then add everything back into it!
    for (let staff of employees) {
        // Adding a <tr> for each post
        $('#employeesTable').append(`
            <tr>
                <td>${staff.firstName}</td>
                <td>${staff.lastName}</td>
                <td>${staff.id}</td>
                <td>${staff.title}</td>
                <td>${staff.annualSalary}</td>
                
                <td>
                    <button class="deleteBtn">
        
                    </button>
                </td>
            </tr>
        `);
    }

}

// function addNewEmployee(evt) {
//   evt.preventDefault();

//   // console.log('bool?', $('#year-input'));

//   // if one or more inputs is blank, don't add a new employee obj to array
//   if (
//     $('#firstName-input').val() === '' 
//     || $('#lastName-input').val() === ''
//     || $('#id-input').val() === ''
//     || $('#title-input').val() === ''
//     || $('#annualSalary-input').val() === ''
//   ) {
//     alert('Values plz!');
//     return;
//   }
//   // console.log('working!');

  // get input values
//   let newEmployee = {
//     firstName: $('#firstName-input').val(),
//     lastName: $('#lastName-input').val(),
//     id: $('#id-input').val(),
//     title: $('#title-input').val(),
//     annualSalary: $('#annualSalary-input').val(),
//   };

  // add to array
//   employeelist.push(newEmployee);

//   checkNumEmployees();

  // clear the inputs
//   $('#firstName-input').val('');
//   $('#lastName-input').val('');
//   $('#id-input').val('');
//   $('#title-input').val('');
//   $('#annualSalary-input').val('');
//   // anything else?
//   // re-render fresh values!
//   render();
// }

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

// function render() {
//   // update the DOM
//   $('#employee').empty();

//   
//   for (let person of employee) {
//     $('#employee').append(`
//       <li>
//         ${person.firstName} ${person.lastName} ${person.id} ${person.title} ${person.annualSalary}
//         <button class="remove-btn">Remove</button>
//       </li>
//     `);
//   }
//   let Employees = [
//     /* no posts yet  */
// ];

// function onReady() {
//     // Event
//     $('#messageForm').on('submit', onSubmitEmployee);


//     // console.log('in onReady', $('.deleteBtn'));
//     // $('.deleteBtn').on('click', onDelete);

//     // Listen for clicks anywhere on the table
//     // but only call onDelete if it's a `.deleteBtn` element
//     //
//     // aka "Event Delegation"
//     $('#employeesTable').on('click', '.deleteBtn', onDelete);
// }   



// Event handler



