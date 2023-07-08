import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Kamran", 
        role: "Developer", 
        img: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: "Shadman", 
        role: "Data Analyst", 
        img: "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 2,
        name: "Shad", 
        role: "Lawyer", 
        img: "https://images.pexels.com/photos/16884796/pexels-photo-16884796/free-photo-of-close-up-of-cat-head.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 3,
        name: "Saquib", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 4,
        name: "Anas", 
        role: "Doctor", 
        img: "https://images.pexels.com/photos/16680260/pexels-photo-16680260/free-photo-of-close-up-of-white-cat.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 5,
        name: "Aisha", 
        role: "Dentist", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 6,
        name: "Ashrah", 
        role: "Doctor", 
        img: "https://images.pexels.com/photos/17417595/pexels-photo-17417595/free-photo-of-studio-portrait-of-a-young-girl-with-messy-hair.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      
    ]
  );

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        //return new
        //...employee,(spreading) expand out any of the attribute the employee
        return{...employee,name: newName, role: newRole };
      }
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (

      <>
      <input 
          type='text' 
          onChange={(e) => {
            // console.log(e.target.value);
            setRole(e.target.value);
        }} 
      />
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            return(
            <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}
              updateEmployee={updateEmployee}
            />
            );
          })}
        </div>
      </>
      ) : (
        <p>You cannot see the employees</p>
        )}
    </div>
  );
}

export default App;
