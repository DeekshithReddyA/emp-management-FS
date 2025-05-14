export const EmployeeCard = (props) => {
    return(
    <div style={{border: '1px solid black', padding : '3px'}}>
        <h4>{props.employee.name}</h4>
        <p>Email: {props.employee.email}</p>
        <p>Mobile No.: {props.employee.mobile}</p>
        <p>DOB: {props.employee.dob}</p>
        <p>Aadhar No.: {props.employee.aadhar}</p>
        <p>PAN No.: {props.employee.pan}</p>
        <p>Address: {props.employee.address}</p>
    </div>
    );
}