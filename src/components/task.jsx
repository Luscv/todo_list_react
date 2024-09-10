

const Task = ({task, onDelete}) => {
    return(
    <>
    <li key={task.id}>
        <div className="flex justify-between items-center gap-4 m-4">
            <h3>{task.text}</h3>
            <button onClick={onDelete}>Delete</button>
        </div> 
    </li>
    </>
    )
}

export default Task