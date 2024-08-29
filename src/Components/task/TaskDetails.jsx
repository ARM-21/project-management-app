import React, { useEffect } from 'react'
import "./taskdetail.css";
import Input from './Input/Input.jsx';
import { useRef } from 'react';
import Modal from '../Modal.jsx';
export default function TaskDetails({ addedData,cancel }) {
  let modalRef = useRef();
  let title = useRef();
  let dueDate = useRef();
  let description = useRef();
  function saveHandle() {

    const { titleOfProject, dueDateOfProject, descriptionOfProject } = {titleOfProject: title.current.value,  dueDateOfProject:dueDate.current.value, descriptionOfProject:description.current.value };
    if(titleOfProject.trim() == "" || dueDateOfProject.trim() == "" || descriptionOfProject.trim() == "") {
      //
      modalRef.current.open();
      return;
    }
    addedData({ title: titleOfProject, dueDate: dueDateOfProject, description: descriptionOfProject });
  }


  return (
    <>
    <Modal ref={modalRef}>
      <h1>Invalid Input</h1>
      <p>Please a provide a value for each field</p>
     
    </Modal>
    <div className='details-container'>
      <ul>
        <li><button onClick={cancel}>Cancel</button></li>
        <li><button onClick={saveHandle} >Save</button></li>
      </ul>
      <div className="input-fields">
        <Input ref={title} type="text" label="title" />
        <Input ref={dueDate} type="date" label="Due Date" />
        <Input ref={description} label="Description" istextarea="true" />

      </div>

    </div>
    </>
  )
}
