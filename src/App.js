import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Todo from "./components/Todo";
import Done from "./components/Done";

function App() {
  // const [task, setTask] = useState({
  //   todoBoard: ["Task 1", "Task 2", "Task 3", "Task 4"],
  //   doneBoard: [],
  // });

  const [task, setTask] = useState({
    todoBoard: [
      {
        id: 1,
        title: 'Math',
        description: 'need to finish activities'
      },
      {
        id: 2,
        title: 'P.E',
        description: 'online assessment'
      },
      {
        id: 3,
        title: 'Programming',
        description: 'finish react tutorial'
      }
    ],
    doneBoard: [],
  });

  function handleOnDrag(e: React.DragEvent, cardType, board = "sss") {
    console.log('cardType', cardType)
    e.dataTransfer.setData(
      "widgetType",
      `${cardType.title}#${cardType.id}#${board}`
    );
  }

  function handleOnDrop(e: React.DragEvent) {
    console.log("event", e.target.className);
    const widgetType = e.dataTransfer.getData("widgetType");
    const droppedTaskIndex = parseInt(widgetType.split("#")[1]);
    const boardType = widgetType.split("#")[2];
    const originalLocation =
      task[Object.keys(task).find((type) => type === boardType)];
    const filteredItems = originalLocation.filter(
      ({id}) => id !== droppedTaskIndex
    );
    if (boardType === "todoBoard" && e.target.className === 'done') {
      setTask((prev) => ({
        ...prev,
        todoBoard: [...filteredItems],
        doneBoard: [...prev.doneBoard, ...originalLocation.filter(
          ({id}) => id === droppedTaskIndex
        )],
      }));
    } else if (boardType === "doneBoard" && e.target.className === 'todo') {
      setTask((prev) => ({
        ...prev,
        todoBoard: [...prev.todoBoard, ...originalLocation.filter(
          ({id}) => id === droppedTaskIndex
        )],
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


    // <Container maxWidth="md" sx={{padding: 5}}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={6}>
    //     <Todo
    //     task={task}
    //     handleOnDrag={handleOnDrag}
    //     handleOnDrop={handleOnDrop}
    //     handleDragOver={handleDragOver}
    //   />
    //     </Grid>
    //     <Grid item xs={6}>
    //     <Done
    //     task={task}
    //     handleOnDrag={handleOnDrag}
    //     handleOnDrop={handleOnDrop}
    //     handleDragOver={handleDragOver}
    //   />
    //     </Grid>
    //   </Grid>
    // </Container>
  );
}

export default App;
