import "./sidebar.css";
import plusIcon from "./../../assets/plusicon.svg";

export default function Sidebar({onAddBtnClick,projects,onProjClick,selectedId}) {
    return (
        <>
            <aside>
                <nav>
                    <h2>Your Projects</h2>
                    <span className="add-project-btn-cont">
                        <img src={plusIcon} alt="+" />
                        <button onClick={onAddBtnClick}>Add Project</button>
                    </span>

                    <div className="task-list-container">
                    <ul className="task-list-container">
                    { projects.length > 0 ? projects.map((project)=>{
                        let activeClass;
                        if(project.id == selectedId){
                                activeClass = 'active';
                        }
                            return <li key={project.id} className={`todo-task task ${activeClass} `} onClick={()=>{onProjClick(project.id)}}>
                                {project.title}
                            </li>
                        }):<li className="todo-task task" >your tasks goes here</li>  
                    }
                        
                    </ul>
                          
                    </div>
                </nav>
            </aside>
        </>
    )

}