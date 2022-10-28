import { useState } from 'react'
import Tab1 from './AllTabs/Tab1';
import Tab2 from './AllTabs/Tab2';
import Tab3 from './AllTabs/Tab3';

function () {
    const [toggleState, setToggleState] = useState('1');

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div>
                <button
                    className={toggleState === 1}
                    onClick={() => toggleTab(1)}
                >
                    Tab 1
                </button>
                <button
                    className={toggleState === 2}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </button>
                <button
                    className={toggleState === 3}
                    onClick={() => toggleTab(3)}
                >
                    Tab 3
                </button>
            </div>

            <div>
                <div className={toggleState === 1 ? "" : "content"}>
                    <Tab1 />
                </div>
                <div className={toggleState === 2 ? "" : "content"}>
                    <Tab2 />
                </div>
                <div className={toggleState === 3 ? "" : "content"}>
                    <Tab3 />
                </div>
            </div>
        </div>
    );
}

export default 