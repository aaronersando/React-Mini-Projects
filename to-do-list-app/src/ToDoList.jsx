import React, {useState} from "react"


function ToDoList(){

    const [tasks, setTasks] = useState([])

    const handleAddTask = () =>{
        const newTask = document.getElementById("task-input").value
        setTasks(t => [...t, newTask])
        document.getElementById("task-input").value = ""
    }

    const handleRemoveTask = (index) => {
        setTasks(t=> t.filter((_,i) => i!==index))
    }

    const handleUpTask = (index) => {
        
        if(index === 0) return;

        setTasks((prevTasks) => {
            const newTasks = [...prevTasks]
            const temp = newTasks[index]

            newTasks[index] = newTasks[index-1]
            newTasks[index-1] = temp

            return newTasks
        })
    }

    const handleDownTask = (index) => {
        
        if(index === tasks.length-1) return;

        setTasks((prevTasks) => {
            const newTasks = [...prevTasks]
            const temp = newTasks[index]

            newTasks[index] = newTasks[index+1]
            newTasks[index+1] = temp

            return newTasks
        })
    }
    
    return(
        <>
            <div className="main-con">
                <h1>To-Do-List</h1>
                <input type="text" id="task-input" placeholder="Task Input"/>
                <button onClick={handleAddTask}>Add</button>
                <ul>
                    {tasks.map((task, index) => 
                        <li key={index} className="item-list">
                            {/* <div className="item-div"> */}
                                <p className="task-name">{task}</p>
                                <div className="btn-grp">
                                    <button className="delete-btn" onClick={() => handleRemoveTask(index)}>Delete</button>
                                    <button className="up-btn" onClick={() => handleUpTask(index)}>👆</button>
                                    <button className="down-btn" onClick={() => handleDownTask(index)}>👇</button>
                                </div>
                                
                            {/* </div> */}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default ToDoList