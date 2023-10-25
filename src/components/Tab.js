import React, { useState } from 'react';

import '../App.css'
import FirstTab from './Alltabs/FirstTab';
import SecondTab from './Alltabs/SecondTab';
const Tab = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
      <li
      className={activeTab === "tab1" ? "active" : ""}
      onClick={handleTab1}
    >
    Over the Counter Medication
    </li>
    <li
      className={activeTab === "tab2" ? "active" : ""}
      onClick={handleTab2}
    >
    Prescribed Medication
    </li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  )
}

export default Tab