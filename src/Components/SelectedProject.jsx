import React from 'react'
import "./selected.css";
import NewTasks from './NewTasks';
export default function SelectedProject({projectDetails,onDelete,projectDetailsForProjectTasks,addHandler,onTasksClick}) {
  console.log(projectDetails)  
  return (
    <div className='selected-project-container'>
    <header>
        <div className='selected-details' >
        {/* <div className="details-title"> */}
        <div>
            <h2>{projectDetails.title}</h2>
            </div>
            <button className='delete-button' onClick={()=>{
                onDelete(projectDetails.id)
            }}>Delete</button>
            </div>
            <p> <i>{projectDetails.dueDate}</i></p>
           
       
        <p> <i>{projectDetails.description}</i></p>
        {/* </div> */}
        <hr />
    </header>
      <NewTasks
        onTasksClick={onTasksClick}
        addHandler={addHandler}
        projectData={projectDetails}
        projectDetails={projectDetailsForProjectTasks}
      />
     
    </div>
  )
}
