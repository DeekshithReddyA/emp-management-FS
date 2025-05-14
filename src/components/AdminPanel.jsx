import { NavLink } from "react-router-dom";
import { EmployeeCard } from "./EmployeeCard";

export const AdminPanel = (props) => {
    
    const handleChange = (index, newStatus) => {
        props.setEmployees(prev => prev.map((employee, i) => {
            if (i === index) {
                return { ...employee, status: newStatus };
            }
            return employee;
        }));
    }
    
    return(<div>
        <NavLink to="/" >&#8617; Home</NavLink>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px'}}>
            <h1>Admin Panel</h1>
            <h2>Employee List</h2>
            <div>
                {props.employees.length === 0 ? (<div>
                    <h2>No Employees Registered</h2>
                </div>) : (<div>
                    {props.employees.map((employee, index) => {
                        return (
                            <div key={index} style={{display: 'flex'}}>
                            <div style={{border: '1px solid black'}}>
                                <EmployeeCard employee={employee} />
                            </div>
                            <div>
                                <select 
                                    name="status" 
                                    value={employee.status} 
                                    onChange={(e) => handleChange(index, e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                            </div>
                        );
                    })}
                </div>)}
            </div>
        </div>
    </div>);
}