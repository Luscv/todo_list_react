import { useState } from 'react'
import './App.css'
import CreateTask from './components/create-task'
import TaskList from './components/task-list'


function App() {
  
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, done: false}])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <>
      <h1>To-Do List</h1>
      <CreateTask onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
      
    </>
  )
}

export default App


{/* <TaskList tasks={tasks}/> */}