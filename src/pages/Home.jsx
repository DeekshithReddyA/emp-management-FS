import { NavLink } from "react-router-dom";
export const Home = () => {

    return(<div style={{display: 'flex' , flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Welcome to Employement Management Dashboard</h1>
        <div>
            <h3>
                Employee Registrations:
                <NavLink to="/register">Click here</NavLink>
            </h3>
        </div>
        <div>
            <h3>
                Employee List:
                <NavLink to="/employees">Click here</NavLink>
            </h3>
        </div>
        <div>
            <h3>
                For Admins and HRs Login Page: 
                <NavLink to="/login">Click here</NavLink>
            </h3>
        </div>
    </div>);
}