import React from 'react'
import empty from "./../assets/no-projects.png";
import "./initial.css";
// this is 
export default function InitialProject({onAddBtnClick}) {
  return (
    <div className='empty-project-container'>
      <img src={empty} alt="empty project"  />
      <h2>No Project Selected</h2>
      <p>Select a project or start a new project!yes</p>
      <button onClick={
        ()=>{
            onAddBtnClick()
        }
      } >Create a new project</button>
    </div>
  )
}
