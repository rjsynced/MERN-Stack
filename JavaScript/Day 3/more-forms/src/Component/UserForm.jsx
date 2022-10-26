import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const validFirstName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 1) {
            setfirstName("First Name is required!");
        } else if(e.target.value.length < 2) {
            setfirstName("First Name must be 2 characters or longer!");
        } else {
            setfirstName("");
        }
    }
    const validLastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 1) {
            setlastName("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setlastName("Last Name must be 2 characters or longer!");
        } else {
            setlastName("");
        }
    }
    const validEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmail("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmail("Email must be 5 characters or longer!");
        } else {
            setEmail("");
        }
    }
    const validPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPassword("Password is required!");
        } else if(e.target.value.length < 8) {
            setPassword("Password must be 8 characters or longer!");
        } else {
            setPassword("");
        }
    }


    return (
        <form onSubmit={ createUser }>
            <h3>{formMessage()}</h3>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ validFirstName } />
                {setfirstName && <p style={{color:'red'}}>{ validFirstName }</p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ validLastName} />
                {
                    setlastName ?
                    <p style={{color:'red'}}>{ validLastName }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ validEmail } />
                {
                    setEmail ?
                    <p style={{color:'red'}}>{ validEmail }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ validPassword } />
                {
                    setPassword ?
                    <p style={{color:'red'}}>{ validPassword }</p> :
                    ''
                }
            </div>
            {/* <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ validPassword } />
                {
                    setPassword ?
                    <p style={{color:'red'}}>{ validPassword }</p> :
                    ''
                }
            </div> */}
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;
