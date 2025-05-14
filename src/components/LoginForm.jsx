import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export const LoginForm = () => {
    const navigate = useNavigate();
    const [res, setRes] = useState("");
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        role: "admin"
    });

    const handleChange = (e) => {   
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, role } = userData;
        console.log(userData);
        if(username === "admin" && password === "admin" && role === "admin"){
            navigate('/admin');
        }
        else if(username === "hr" && password === "hr" && role === "hr"){
            navigate('/hr');
        }
        else {
            setRes("Invalid Credentials");
        }
    }
    return(
        <div>
            <NavLink to="/" >&#8617; Home</NavLink>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1>Login</h1>
                <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" value={userData.username} required onChange={handleChange}/>
                    <input type="password" placeholder="Password" name="password" value={userData.password} required onChange={handleChange}/>
                    <div>
                        <label>Choose Role: </label>
                        <select name="role" onChange={handleChange}>
                            <option value="admin">Admin</option>
                            <option value="hr">HR</option>
                        </select>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div style={{marginTop: '10px'}}>
                {res !== "" && <span style={{color: 'red'}}>{res}</span>}
                </div>
            </div>
        </div>
    )
}