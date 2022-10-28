import React, { useState } from "react";
import FirstTab from "../firstTab";
import SecondTab from "../secondTab";
import ThirdTab from "../thirdTab";
import TabContent from "../../MultiTab/TabContent";
import TabNavItem from "../../MultiTab/TabNavItem";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <div className="Tabs">
            <ul className="nav">
                <TabNavItem name="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem name="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem name="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul>

            <div className="outlet">
                <TabContent name="tab1" activeTab={activeTab}>
                    <FirstTab />
                </TabContent>
                <TabContent name="tab2" activeTab={activeTab}>
                    <SecondTab />
                </TabContent>
                <TabContent name="tab3" activeTab={activeTab}>
                    <ThirdTab />
                </TabContent>
            </div>
        </div>
    );
};

export default Tabs;