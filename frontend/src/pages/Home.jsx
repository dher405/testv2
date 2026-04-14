import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TaskList />
      <TaskForm />
    </div>
  )
}

export default Home