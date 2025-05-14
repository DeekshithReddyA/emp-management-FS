import { NavLink } from "react-router-dom";
import { EmployeeCard } from "./EmployeeCard";

export const HRPanel = (props) => {  
    return(<div>
        <NavLink to="/" >&#8617; Home</NavLink>
        <div style={{display: "flex",flexDirection: "column", alignItems: 'center'}}>
            <div>
                <h1>HR Panel</h1>
                <h2>Employee List</h2>
            </div>
            <div>
                {props.employees.length === 0 ? (<div>
                    <h3>No Employees Approved by Admin</h3>
                </div>) : (
                    <div>
                    {
                    props.employees.map((employee, index) => {
                    return(
                        <EmployeeCard key={index} employee={employee} />
                    )
                })}
                </div>
            )}
            </div>
        </div>
    </div>);
}