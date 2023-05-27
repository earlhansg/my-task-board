import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import { format } from "./utils/DateFormat";

export default function Todo({
  task,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) {
  const todoLength = useMemo(() => task.todoBoard.length, [task]);
  return (
    <div
      className="todo"
      draggable
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      style={
        task.todoBoard?.length > 1
          ? { height: "100%", overflow: "hidden" }
          : { height: "350px" }
      }
    >
      <Stack direction="row" spacing={1}>
        <Chip
          label="Todo"
          sx={{
            backgroundColor: "#fe8900",
            color: "#ffeaa4",
            fontWeight: "700",
          }}
        />
        <Chip
          label={todoLength}
          variant="outlined"
          sx={{
            fontWeight: "700",
            color: "#fe8900",
            border: "1px solid #fe8900",
          }}
        />
      </Stack>
      {task.todoBoard.map(({ id, title, description, created }) => (
        <Card
          className="card"
          key={id}
          draggable
          onDragStart={(e) => handleOnDrag(e, { title, id }, "todoBoard")}
          sx={{ padding: 2 }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography component="span">{description}</Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Typography
              paragraph
              sx={{
                marginTop: "2rem",
                fontSize: 12,
              }}
            >
              {format(created)}
            </Typography>
          </Box>
        </Card>
      ))}
    </div>
  );
}
