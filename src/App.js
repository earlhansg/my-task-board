import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [task, setTask] = useState({
    todoBoard: ['Task 1', 'Task 2', 'Task 3'],
    doneBoard: []
  })
  function handleOnDrag(e: React.DragEvent, cardType) {
    console.log("handleOnDrag", cardType.id);
    e.dataTransfer.setData("widgetType", cardType.taskName.concat('#' + cardType.id.toString()));
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType");
    const droppedTaskIndex = parseInt(widgetType.split('#')[1]);
    const filteredTodo = task.todoBoard.filter((item, id) => id !== droppedTaskIndex);
    console.log("filteredTodo", filteredTodo)
    setTask((prev) => ({
      ...prev,
      todoBoard: [...filteredTodo],
      doneBoard: [...prev.doneBoard, widgetType.split('#')[0]]}))
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <Todo task={task} handleOnDrag={handleOnDrag}/>
      <div className="done" onDrop={handleOnDrop} onDragOver={handleDragOver} style={task.doneBoard?.length > 2 ? {height: "auto"} : {height: "350px"} }>
        {task.doneBoard.map((widget, index) => (
          <div className="card" key={index}>
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
