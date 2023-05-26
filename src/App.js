import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import Todo from "./components/Todo";
import Done from "./components/Done";

function App() {
  const [task, setTask] = useState({
    todoBoard: ["Task 1", "Task 2", "Task 3"],
    doneBoard: [],
  });

  function handleOnDrag(e: React.DragEvent, cardType, board = "sss") {
    e.dataTransfer.setData(
      "widgetType",
      `${cardType.taskName}#${cardType.id}#${board}`
    );
  }

  function handleOnDrop(e: React.DragEvent) {
    const widgetType = e.dataTransfer.getData("widgetType");
    const droppedTaskIndex = parseInt(widgetType.split("#")[1]);
    const boardType = widgetType.split("#")[2];
    const originalLocation =
      task[Object.keys(task).find((type) => type === boardType)];
    const filteredItems = originalLocation.filter(
      (item, id) => id !== droppedTaskIndex
    );
    if (boardType === "todoBoard") {
      setTask((prev) => ({
        ...prev,
        todoBoard: [...filteredItems],
        doneBoard: [...prev.doneBoard, widgetType.split("#")[0]],
      }));
    } else {
      setTask((prev) => ({
        ...prev,
        todoBoard: [...prev.todoBoard, widgetType.split("#")[0]],
        doneBoard: [...filteredItems],
      }));
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <Todo
        task={task}
        handleOnDrag={handleOnDrag}
        handleOnDrop={handleOnDrop}
        handleDragOver={handleDragOver}
      />
      <Done
        task={task}
        handleOnDrag={handleOnDrag}
        handleOnDrop={handleOnDrop}
        handleDragOver={handleDragOver}
      />
    </div>
  );
}

export default App;
