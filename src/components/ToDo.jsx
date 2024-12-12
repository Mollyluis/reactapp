import {useState} from "react"

function ToDo() {

    const [ newTaskName,setNewTaskName ] = useState()
    
    return (
        <div className='container-fluid banner-image d-flex flex-column justify-content-center align-items-center text-center gap-3'>
            <h2 className="text-secondary">Daily Task Tracker</h2>
            <p className="fw-lighter">"Stay on top of your daily activities with our intuitive task management app. Easily create and organize your daily tasks, track your progress. Designed to help you increase your productivity and achieve your goals.</p>
            <input 
            type="text" 
            placeholder="Enter a new task" 
            onChange = {(e) => setNewTaskName(e.target.value)}/>

            <button onClick={() => alert("Creating new Task")}>Create Task</button>

        </div>
    );
}

export default ToDo;