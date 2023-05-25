import React from "react";

export default function Todo({
  task,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) {
  return (
    <div
      className="todo"
      draggable
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      style={
        task.todoBoard?.length > 2 ? { height: "auto" } : { height: "350px" }
      }
    >
      {task.todoBoard.map((taskName, index) => (
        <div
          className="card"
          key={index}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { taskName, id: index }, "todoBoard")
          }
        >
          {taskName}
        </div>
      ))}
    </div>
  );
}
