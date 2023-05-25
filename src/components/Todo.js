import React from 'react'

export default function Todo({task, handleOnDrag}) {
  return (
    <div className="todo" style={task.todoBoard?.length > 2 ? {height: "auto"} : {height: "350px"} }>
        {task.todoBoard.map((taskName, index)=>
          (<div className="card" key={index} draggable onDragStart={(e) => handleOnDrag(e, {taskName, id: index})}>
            {taskName}
          </div>)
        )}
    </div>
  )
}
