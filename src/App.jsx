import { useRef, useState } from "react";
import InitialProject from "./Components/InitialProject.jsx";
import Sidebar from "./Components/sidebar/Sidebar.jsx";
import TaskDetails from "./Components/task/TaskDetails.jsx";
import Modal from "./Components/Modal.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";
function App() {
  // let ref = useRef();
  const [isTaskAdd, setTaskAdd] = useState({
    isAdded: undefined,
    tasks: [],
    tasksForProject: { id: null, isTaskAdded: null, taskLists: [] },
  });

  function onTasksClick(id) {
    let filteredData = isTaskAdd.tasksForProject.taskLists.filter(task => {
      return task.id != id
    });
    setTaskAdd(prev => {

      return ({
        ...prev,
        tasksForProject: {
          ...prev.tasksForProject,
          taskLists: filteredData,
        }
      }
      )
    })
  }
  function addHandler(userValue) {
    setTaskAdd(prev => {

      return ({
        ...prev,
        tasksForProject: {
          ...prev.tasksForProject,
          isTaskAdded: "added",
          taskLists: [...prev.tasksForProject.taskLists,
          { title: userValue, id: Date.now() ,projectID:prev.isAdded}],
          id:Date.now(),
        },
        isTaskAdded: "added",
      }
      )
    })
  }
  function jpt(a,b)
  {
    return a+b;
  }
  function handleAddProject() {
    setTaskAdd((prev) => {
      return {
        ...prev,
        isAdded: null,
      }

    })
  }

  function handleSelectProject(id) {
    setTaskAdd((prev) => {
      return {
        ...prev,
        isAdded: id,
      }

    })
  }
  function handleUserAddProject(projectData) {
    const newProject = {
      ...projectData
      , id: Math.random() * 100,
    };
    setTaskAdd(prev => {

      return {
        ...prev,
        tasks: [...isTaskAdd.tasks, newProject]
      }
    })
    setTaskAdd((prev) => {
      return {
        ...prev,
        isAdded: undefined,
      }

    })
  }
  function cancelAddProject() {
    setTaskAdd((prev) => {
      return {
        ...prev,
        isAdded: undefined,
      }

    })
  }
  function deleteHandler(id) {
    let filteredData = isTaskAdd.tasks.filter((project) => {
      return project.id != id;
    })
    setTaskAdd((prev) => {
      return {
        ...prev,
        isAdded: undefined,
        tasks: filteredData

      }

    })
  }
  let selectedProject = isTaskAdd.tasks.find((project) => {
    return project.id === isTaskAdd.isAdded;
  })
  let renderedContent = <SelectedProject
    projectDetails={selectedProject}
    onDelete={deleteHandler}
    onTasksClick={onTasksClick}
    addHandler={addHandler}
    projectDetailsForProjectTasks={isTaskAdd.tasksForProject}
  />;
  if (isTaskAdd.isAdded === undefined) {
    renderedContent = <InitialProject onAddBtnClick={handleAddProject} />;
  }
  else if (isTaskAdd.isAdded === null) {
    renderedContent = <TaskDetails addedData={handleUserAddProject} cancel={cancelAddProject} />;
  }

  return (
    <>

      <main className="main-section">
        <Sidebar onProjClick={handleSelectProject} onAddBtnClick={handleAddProject} projects={isTaskAdd.tasks} selectedId={isTaskAdd.isAdded} />
        {renderedContent}
      </main>
    </>
  );
}

export default App;
