import React from 'react'

export default function Todo({task, handleOnDrag}) {
  return (
    <div className="todo">
        {task.todoBoard.map((taskName, index)=>
          (<div className="card" key={index} draggable onDragStart={(e) => handleOnDrag(e, {taskName, id: index})}>
            {taskName}
          </div>)
        )}
    </div>
  )
}
