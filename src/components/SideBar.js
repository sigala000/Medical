import React from 'react'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SideBar = () => {
  return (
    <div>
    <Sidebar className='side'>
            <Menu>
            <MenuItem>All Medication</MenuItem>
            <MenuItem>Allergy and Sinuses</MenuItem>
            <MenuItem>Cough, Cold and Flu</MenuItem>
            <MenuItem>Diabetes Care</MenuItem>
            <MenuItem>Digestive Health</MenuItem>
            <MenuItem>First Aid</MenuItem>
            <MenuItem>Pain Relief</MenuItem>
            <MenuItem>Quit Smoking</MenuItem>
            <MenuItem>Sleep Aids</MenuItem>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default SideBar