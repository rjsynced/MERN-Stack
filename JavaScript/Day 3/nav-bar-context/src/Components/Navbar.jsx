// this component should be your navbar which contains the greeting
import React, { useContext } from "react";

import UserContext from "./contexts/UserContext";

const style = {
    background: "purple",
    display: "flex",
    padding: "20px",
    alignItems: "center",
    justifyContent: "flex-end",
    color: "white",
    fontWeight: "bold"
};

const Navbar = () => {
    const { name } = useContext(UserContext);

    return <div style={style}>Hi {name}!</div>;
};

export default Navbar;