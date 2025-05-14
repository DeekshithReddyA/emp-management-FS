import { NavLink } from "react-router-dom";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeList = (props) => {
    return (
        <div>
            <NavLink to="/" >&#8617; Home</NavLink>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1>Registered Employee List</h1>
                {props.employees.length === 0 ? (<div>
                    <h2>No Employees Registered</h2>
                    <h3>Be the first one to register: <NavLink to="/register">Click here</NavLink></h3>
                </div>): (
                    props.employees.map((employee, index) => {
                        return (
                            <div key={index} style={{border: '1px solid black',padding: '3px', width: '300px'}}>
                                <EmployeeCard employee={employee} />
                                <p>Status: {employee.status === "Pending" ? <span style={{color: 'orange', fontWeight: 'bold'}}>Pending</span> :
                                (employee.status === "Approved") ? <span style={{color: "green", fontWeight: 'bold'}}>Approved</span>: <span style={{color: 'red', fontWeight: 'bold'}}>Rejected</span>}</p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}