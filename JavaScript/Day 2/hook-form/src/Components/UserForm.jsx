import React, { useState } from  'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First name: </label> 
                <input type="text" onChange={ (e) => setfirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setlastName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label> 
                <input type="text" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="text" onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Confirm Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                            <td>{password}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserForm;