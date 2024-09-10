


const Task = ({task, onDelete, onCheck}) => {
    

    return(
    <>
    <li key={task.id}>
        <div className="flex justify-between items-center gap-4 m-4">
            <input type="checkbox" onClick={onCheck} checked={task.done}/>
            <h3 className={`${task.done ? 'line-through' : ''}`}>{task.text}</h3>
            <button onClick={onDelete}>Delete</button>
        </div> 
    </li>
    </>
    )
}

export default Task