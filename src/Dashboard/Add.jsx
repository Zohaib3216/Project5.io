import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

  const [Name, setName] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [email, setEmail] = useState('');
  const [Unit, setUnit] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, [])

  const handleAdd = e => {
    e.preventDefault();
    if (!Name || !Quantity || !email || !Unit ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      Name,
      Quantity,
      email,
      Unit,
      
    }
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${Name} ${Quantity} data has been Added.`,
      showConfirmButton: false,
      timer: 1500
    });
  }


  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Item</h1>
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          type="text"
          ref={textInput}
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
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add