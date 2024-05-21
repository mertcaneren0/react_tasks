import { useState } from "react";

function TaskCreate({onCreate, task,taskformUpdate,onUpdate}){
    const [title, setTitle] = useState(task ?  task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTaskChange = (event) =>{
        setTaskDesc(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(taskformUpdate){
            onUpdate(task.id,title,taskDesc)
        }else{
            onCreate(title,taskDesc);
        }
        
        setTitle('');
        setTaskDesc('');
    };

    

    return(
        <div> {taskformUpdate ? <div className="task-update">

            <h3>Please Edit Task</h3>

            <form className="task-form" >

                <label className="task-label">Edit The Title</label>

                <input 
                value={title} 
                onChange={handleChange} 
                className="task-input" />

                <label className="task-label">Edit The Task</label>

                <textarea 
                className="task-input" 
                rows={5} value={taskDesc} 
                onChange={handleTaskChange}/>

                <button className="task-button update-button" onClick={handleSubmit}>Edit</button>

            </form>
    
        </div> : <div className="task-create">

            <h3>Please Add Task</h3>

            <form className="task-form" >

                <label className="task-label">Title</label>

                <input 
                value={title} 
                onChange={handleChange} 
                className="task-input" />

                <label className="task-label">Enter Task</label>

                <textarea 
                className="task-input" 
                rows={5} value={taskDesc} 
                onChange={handleTaskChange}/>

                <button className="task-button" onClick={handleSubmit}>Create</button>

            </form>
        </div> }    </div>
        

    );
}

export default TaskCreate;