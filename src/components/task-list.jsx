import Task from "./task"

const TaskList = ({tasks, onDeleteTask, onCheckTask}) => {
    
    return(
    <>
        <ul>
            {tasks.map((task) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={() => onDeleteTask(task.id)} 
                    onCheck={() => onCheckTask(task.id)}
                />
            ))}
        </ul>
    </>
    )
}

export default TaskList