// this component should wrap the navbar and the form wrapper (no props)
import React, { useState } from "react";

import UserContext from "./contexts/UserContext";

const Wrapper = ({ children }) => {
    const [name, setName] = useState("Bob Smith");

    return (
        <UserContext.Provider
            value={{
                name,
                setName
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default Wrapper;