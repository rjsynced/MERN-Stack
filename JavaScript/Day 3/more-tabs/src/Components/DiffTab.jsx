import React, { useState } from 'react'
import Tab1 from './AllTabs/Tab1'
import Tab2 from './AllTabs/Tab2'
import Tab3 from './AllTabs/Tab3'

const tabs = ['tab1','tab2','tab3']
    

const Tabs = (props) => {
    const [active, setActive] = useState(tabs[0])
    console.log(active);
    const tabElement1 = () => { active === tabs[0] ? <Tab1/> : console.log("nope"); }
    const tabElement2 = () => { active === tabs[1] ? <Tab2/> : console.log("nope") }
    const tabElement3 = () => { active === tabs[2] ? <Tab3/> : console.log("nope") }
return (
    <>
        <div>
            {tabs.map(tab => (
                <button
                key={ tab }
                name={ tab }
                onClick={() => setActive(tab)}
                > 
                { tab }
                </button>
            ))}
            
        </div>
        <div>
            { tabElement1 }
            { tabElement2 }
            { tabElement3 }
        </div>
    </>
)
}

export default Tabs