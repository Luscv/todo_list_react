import './App.css'
import CreateTask from './components/create-task'
import Task from './components/task'


function App() {
  
  // const tasks = [
  //   {
  //     id: 0,
  //     description: 'estudar react',
  //     finished: true,
  //   },
  //   {
  //     id: 1,
  //     description: 'estudar chines',
  //     finished: false,
  //   },
  //   {
  //     id: 2,
  //     description: 'mandar curriculo',
  //     finished: false,
  //   },
  // ]

  return (
    <>
      <h1>To-Do List</h1>
      <CreateTask/>
      <Task/>
      
    </>
  )
}

export default App


{/* <TaskList tasks={tasks}/> */}