import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { EmployeeForm } from './components/EmployeeForm.jsx';
import { EmployeeList } from './components/EmployeeList.jsx';
import { AdminPanel } from './components/AdminPanel.jsx';
import { HRPanel } from './components/HRPanel.jsx';
import { LoginForm } from './components/LoginForm.jsx';
import { useEffect, useState } from 'react';
function App() {
  const [employees, setEmployees] = useState([
    {
      aadhar: "3453 1235 1242",
      address:"100-100, Nagole, Hyderabad, Telangana-500068",
      dob:"2025-02-01",
      email:"deekshithreddy351@gmail.com",
      mobile:"9063167011",
      name:"Deekshith Reddy",
      pan:"BNZAA2318J",
      status: "Pending"
    },
  ]);
  useEffect(() => {
    console.log(employees);
  }, [employees]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<EmployeeForm employees={employees} setEmployees={setEmployees} />} />
          <Route path='/employees' element={<EmployeeList employees={employees} />} />
          <Route path='/admin' element={<AdminPanel employees={employees.filter(emp => emp.status==="Pending")} setEmployees={setEmployees}/>} />
          <Route path='/hr' element={<HRPanel employees={employees.filter(emp => (emp.status==="Approved"))}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
