import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

  const id = selectedEmployee.id;

  const [Name, setName] = useState(selectedEmployee.Name);
  const [Quantity, setQuantity] = useState(selectedEmployee.Quantity);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [Unit, setUnit] = useState(selectedEmployee.Unit);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = e => {
    e.preventDefault();

    if (!Name || !Quantity || !email || !Unit ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    const employee = {
      id,
      Name,
      Quantity,
      email,
      Unit,
      date
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.Name} ${employee.Quantity} data has been updated.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Inventory</h1>
        <label htmlFor="Name"> Name</label>
        <input
          id="Name"
          type="text"
          name="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="Quantity">Quantity</label>
        <input
          id="Quantity"
          type="text"
          name="Quantity"
          value={Quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="Unit">Unit </label>
        <input
          id="Unit"
          type="text"
          name="Unit"
          value={Unit}
          onChange={e => setUnit(e.target.value)}
        />
       
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit