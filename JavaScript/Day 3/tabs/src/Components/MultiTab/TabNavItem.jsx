import React from "react";
const TabNavItem = ({ id, name, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            {name}
        </li>
    );
};
export default TabNavItem;