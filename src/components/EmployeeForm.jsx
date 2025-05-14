import { useState } from "react";
import { NavLink } from "react-router-dom";

export const EmployeeForm = (props) => {
    const[errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobile: "",
        dob: "",
        aadhar: "",
        pan: "",
        address: ""
    });
    const [res, setRes] = useState("");

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const validate = () => {
        const newErrors = {};
        const { name, email, mobile, dob, aadhar, pan, address } = userData;
        for (const key in userData) {
            if (userData[key] === "") {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const mobileRegex = /^\d{10}$/;
        const aadharRegex = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
        const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;

        if (!emailRegex.test(email)) {
            newErrors.email = "Invalid Email";
        }
        if (!mobileRegex.test(mobile)) {
            newErrors.mobile = "Invalid Mobile Number";
        }
        console.log(aadhar)
        if (!aadharRegex.test(aadhar)) {
            newErrors.aadhar = "Invalid Aadhar Number";
        }
        if (!panRegex.test(pan)) {
            newErrors.pan = "Invalid PAN Number";
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const ans = validate();
        console.log(ans, typeof ans)
        if (validate() === true) {
            userData['status'] = "Pending"
            props.setEmployees(prev => ([...prev, userData]));
            
            setUserData({
                name: "",
                email: "",
                mobile: "",
                dob: "",
                aadhar: "",
                pan: "",
                address: ""
            });
            setRes("Employee Registered Successfully, you can check the list of employees in the Employee List");
        }

    }
    return (
        <>
        <NavLink to="/" >&#8617; Home</NavLink>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }} onSubmit={handleSubmit}>
                <h1>Employee Registration Form</h1>
                <div>
                    <div style={{ display: 'flex' , gap: '10px'}}>
                    <label>
                        Full Name
                    </label>
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    </div>
                        <input placeholder="Enter Name here..." type="text" name="name" value={userData.name} onChange={handleChange}></input>
                </div>
                <div>
                    <div style={{display: 'flex',gap: '10px'}}>
                        <label>
                        Email
                        </label>
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    </div>
                    <input placeholder="Enter Valid Email" type="text" name="email" value={userData.email} onChange={handleChange}></input>
                </div>
                <div>
                    <div style={{display: 'flex',gap: '10px'}}>
                        <label>
                        Mobile No.
                        </label>
                        {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}
                    </div>
                        <input placeholder="Enter 10 Digit Mobile no." type="text" name="mobile" value={userData.mobile} onChange={handleChange}></input>
                </div>
                <div>
                    <div style={{display: 'flex',gap: '10px'}}>
                    <label>
                        DOB
                    </label>
                        {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
                    </div>
                        <input placeholder="" type="date" name="dob" value={userData.dob} onChange={handleChange}></input>
                </div>
                <div>

                    <div style={{display: 'flex',gap: '10px'}}>
                    <label>
                        Aadhar
                    </label>
                        {errors.aadhar && <span style={{ color: 'red' }}>{errors.aadhar}</span>}
                    </div>
                        <input placeholder="Enter Aadhar no. with spaces" type="text" name="aadhar" value={userData.aadhar} onChange={handleChange}></input>
                </div>
                <div>

                    <div style={{display: 'flex',gap: '10px'}}>
                    <label>
                        PAN
                    </label>
                        {errors.pan && <span style={{ color: 'red' }}>{errors.pan}</span>}
                    </div>
                        <input placeholder="Enter Valid PAN No." type="text" name="pan" value={userData.pan} onChange={handleChange}></input>
                </div>
                <div>

                    <div style={{display: 'flex',gap: '10px'}}>
                    <label>
                        Address
                    </label>
                        {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                    </div>
                        <input placeholder="Enter Valid Address" type="address" name="address" value={userData.address} onChange={handleChange}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div style={{marginTop: '10px'}}>

                {res && <span style={{ color: 'green' }}>{res} : <NavLink to="/employees" >Click here</NavLink></span>}
                </div>
            </form>
        </div>
        </>
    );
}