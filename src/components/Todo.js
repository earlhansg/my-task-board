import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function Todo({
  task,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) {
  return (
    // <div
    //   className="todo"
    //   draggable
    //   onDrop={handleOnDrop}
    //   onDragOver={handleDragOver}
    //   style={
    //     task.todoBoard?.length > 2 ? { height: "auto" } : { height: "350px" }
    //   }
    // >
    //   {task.todoBoard.map((taskName, index) => (
    //     <div
    //       className="card"
    //       key={index}
    //       draggable
    //       onDragStart={(e) =>
    //         handleOnDrag(e, { taskName, id: index }, "todoBoard")
    //       }
    //     >
    //       {taskName}
    //     </div>
    //   ))}
    // </div>

    // const

    <div
      className="todo"
      draggable
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      style={
        task.todoBoard?.length > 2
          ? { height: "100%", overflow: "hidden" }
          : { height: "350px" }
      }
    >
      <Stack direction="row" spacing={1}>
        <Chip label="Todo" sx={{backgroundColor: '#fe8900', color: '#ffeaa4', fontWeight: '700'}} />
        <Chip label="3" variant="outlined" sx={{fontWeight: '700', color: "#fe8900", border: "1px solid #fe8900"}} />
      </Stack>
      {task.todoBoard.map(({id, title, description}) => (
        <Card
          className="card"
          key={id}
          draggable
          onDragStart={(e) =>
            handleOnDrag(e, {title, id }, "todoBoard")
          }
          sx={{padding: 2}}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography component="span">
              {description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
