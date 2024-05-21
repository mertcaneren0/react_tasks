import { useState } from "react";
import TaskCreate from "./TaskCreate";


function TaskShow({task, onDelete,onUpdate}) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick =() =>{
        onDelete(task.id)
    }


    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
        setShowEdit(false);
        onUpdate(id,updatedTitle,updatedTaskDesc);
    }


    console.log(task);

    return(
        <div className="task-show">

                {showEdit ? ( <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}/> ) : ( <div>
            <h3 className="task-title">Your Tasks</h3>
            <p>{task.title}</p>
            <h3 className="task-title">Things to do</h3>
            <p>{task.taskDesc}</p>
            <div>
                <button className="task-delete" onClick={handleDeleteClick}>Delete</button>
                <button className="task-edit" onClick={handleEditClick}>Edit</button>
            </div>
            </div>)}

            
        </div>
    );
}

export default TaskShow;