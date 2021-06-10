import Tasks from './components/Tasks'
import Header from "./components/Header"
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  //fetch task
  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    return data
  }
  //delete task
  const deleteTask = async (id) => {

    setTasks(tasks.filter(task => task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="container">
      <Header onClickAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "There is no task"}
    </div>
  );
}

export default App;
