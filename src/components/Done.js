import React from "react";

export default function Done({
  task,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) {
  return (
    <div
      className="done"
      draggable
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      style={
        task.doneBoard?.length > 2 ? { height: "auto" } : { height: "350px" }
      }
    >
      {task.doneBoard.map((taskName, index) => (
        <div
          className="card"
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, { taskName, id: index }, "doneBoard")
          }
          key={index}
        >
          {taskName}
        </div>
      ))}
    </div>
  );
}
