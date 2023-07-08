import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
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
        name: "Shad", 
        role: "Lawyer", 
        img: "https://images.pexels.com/photos/16884796/pexels-photo-16884796/free-photo-of-close-up-of-cat-head.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Saquib", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Anas", 
        role: "Doctor", 
        img: "https://images.pexels.com/photos/16680260/pexels-photo-16680260/free-photo-of-close-up-of-white-cat.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Aisha", 
        role: "Dentist", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Ashrah", 
        role: "Doctor", 
        img: "https://images.pexels.com/photos/17417595/pexels-photo-17417595/free-photo-of-studio-portrait-of-a-young-girl-with-messy-hair.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (

      <>
      <input 
          type='text' 
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }} 
      />
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee, i) => {
            return(
            <Employee 
              key={i}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}
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
