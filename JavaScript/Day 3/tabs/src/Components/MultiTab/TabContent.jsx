import React from "react";

const TabContent = ({ name, activeTab, children }) => {
    return (
        activeTab === name ? <div className="TabContent">
            {children}
        </div>
            : null
    );
};

export default TabContent;