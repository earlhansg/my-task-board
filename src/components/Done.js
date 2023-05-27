import React from "react";
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function Done({
  task,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) {
  return (
    // <div
    //   className="done"
    //   draggable
    //   onDrop={handleOnDrop}
    //   onDragOver={handleDragOver}
    //   style={
    //     task.doneBoard?.length > 2 ? { height: "auto" } : { height: "350px" }
    //   }
    // >
    //   {task.doneBoard.map((taskName, index) => (
    //     <div
    //       className="card"
    //       draggable
    //       onDragStart={(e) =>
    //         handleOnDrag(e, { taskName, id: index }, "doneBoard")
    //       }
    //       key={index}
    //     >
    //       {taskName}
    //     </div>
    //   ))}
    // </div>
    <div
      className="done"
      draggable
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      style={
        task.doneBoard?.length > 2 ? { height: "auto" } : { height: "350px" }
      }
    >
      <Stack direction="row" spacing={1}>
        <Chip label="Done" sx={{backgroundColor: '#defdfe', color: '#34b0c1', fontWeight: '700'}} />
        <Chip label="3" variant="outlined" sx={{fontWeight: '700', color: "#34b0c1", border: "1px solid #34b0c1"}} />
      </Stack>

      {task.doneBoard.map(({id, title, description}) => (
        <Card
        className="card"
        key={id}
        draggable
        onDragStart={(e) =>
          handleOnDrag(e, {title, id }, "doneBoard")
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
