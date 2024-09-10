import { useEffect, useState } from 'react'
import './App.css'
import CreateTask from './components/create-task'
import TaskList from './components/task-list'


function App() {
  
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, done: false}])

    // localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const checkTask = (taskId) => {
    setTasks(tasks.map((task) => taskId === task.id ? {...task, done: !task.done} : task))
  }

  return (
    <>
      <h1>To-Do List</h1>
      <CreateTask onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onCheckTask={checkTask}/>
      
    </>
  )
}

export default App


{/* <TaskList tasks={tasks}/> */}