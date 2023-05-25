import React from 'react'

export default function Done({task, handleOnDrop, handleDragOver}) {
  return (
    <div className="done" onDrop={handleOnDrop} onDragOver={handleDragOver} style={task.doneBoard?.length > 2 ? {height: "auto"} : {height: "350px"} }>
        {task.doneBoard.map((widget, index) => (
          <div className="card" key={index}>
            {widget}
          </div>
        ))}
    </div>
  )
}
