import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"



function App() {


  return (
    <div className=" flex justify-center items-center p-10 bg-gray-900 ">
      <div className="w-[600px] h-[705.5px] bg-gray-500 flex flex-col rounded-3xl items-center ">
     <AddTodo/>
     <Todos/>
     </div>
     </div>
  )
}

export default App
