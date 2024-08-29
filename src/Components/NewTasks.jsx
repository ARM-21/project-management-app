import React, { useRef, useState } from 'react';
import "./newtask.css";
import Input from './task/Input/Input';
import Modal from "./Modal"

export default function NewTasks({ onTasksClick, addHandler, projectDetails,projectData }) {
    const ref = useRef();
    const [userValue, setUserValue] = useState("");
    const modalRef = useRef();
    let tasksContent;
    if (projectDetails.taskLists.id === null) {
        tasksContent = <p>This section doesn't has any tasks yet</p>;
    }
    else if (projectDetails.taskLists ) {
        tasksContent = projectDetails.taskLists.map((task, index) => {
            return (
                task.projectID == projectData.id ? <li key={index} id={Number.parseInt(task.id) + index} >{task.title} 
            <button onClick={() => { onTasksClick(Number.parseInt(task.id) + index) }} >X</button></li>:null
        )
        })
    }
    return (
        <>
            <Modal ref={modalRef}>
                <h1>Invalid Input</h1>
                <p>Please a provide a value for Input field</p>

            </Modal>
            <section className='tasks-container-for-project'>
                <h2>Tasks</h2>
                <div className="input-section-for-tasks">
                    <Input type="text" ref={ref} value={userValue} onInput={(e) => { setUserValue(e.target.value) }} />
                    <button onClick={(e) => {
                        // e.target.disabled = true;
                        if (userValue.trim() == "") {
                            modalRef.current.open();
                            return;
                        }
                        addHandler(userValue);
                        setUserValue("")

                    }} >Add</button>
                </div>
                <ul>
                    {tasksContent}
                </ul>


            </section>
        </>
    )
}
