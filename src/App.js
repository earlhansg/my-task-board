import { useState, useCallback } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Todo from "./components/Todo";
import Done from "./components/Done";

function App() {
  const [task, setTask] = useState({
    todoBoard: [
      {
        id: 1,
        title: "Math",
        description: "need to finish activities",
        created: "Tue May 23 2023 01:16:30 GMT+0800 (Taipei Standard Time)",
        finished: null,
      },
      {
        id: 2,
        title: "P.E",
        description: "online assessment",
        created: "Wed May 24 2023 01:16:30 GMT+0800 (Taipei Standard Time)",
        finished: null,
      },
      {
        id: 3,
        title: "Programming",
        description: "finish react tutorial",
        created: "Thur May 25 2023 01:16:30 GMT+0800 (Taipei Standard Time)",
        finished: null,
      },
    ],
    doneBoard: [],
  });

  const handleOnDrag = useCallback((e, cardType, board = "sss") => {
    console.log("cardType", cardType);
    e.dataTransfer.setData(
      "widgetType",
      `${cardType.title}#${cardType.id}#${board}`
    );
  }, []);

  const handleOnDrop = useCallback(
    (e) => {
      const widgetType = e.dataTransfer.getData("widgetType");
      const droppedTaskIndex = parseInt(widgetType.split("#")[1]);
      const boardType = widgetType.split("#")[2];
      const originalLocation =
        task[Object.keys(task).find((type) => type === boardType)];
      const filteredItems = originalLocation.filter(
        ({ id }) => id !== droppedTaskIndex
      );

      if (boardType === "todoBoard" && e.target.className === "done") {
        const currentDate = new Date().toString();
        const prevTask = originalLocation.find(
          ({ id }) => id === droppedTaskIndex
        );
        const updatedTaskMove = [{ ...prevTask, finished: currentDate }];
        setTask((prev) => ({
          ...prev,
          todoBoard: filteredItems,
          doneBoard: [...prev.doneBoard, ...updatedTaskMove],
        }));
      } else if (boardType === "doneBoard" && e.target.className === "todo") {
        setTask((prev) => ({
          ...prev,
          todoBoard: [
            ...prev.todoBoard,
            ...originalLocation.filter(({ id }) => id === droppedTaskIndex),
          ],
          doneBoard: filteredItems,
        }));
      }
    },
    [task]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

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
