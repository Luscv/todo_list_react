import styles from './styles/task.module.css'

const Task = () => {
    return(
    <>
    <div className="flex ">
        <input type="checkbox" checked={false} className={styles.checkbox}></input>
        <h3>task teste</h3>
        <button>Delete</button>
    </div> 
    </>
    )
}

export default Task