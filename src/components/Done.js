import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import { format } from "./utils/DateFormat";

export default function Done({
  task,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) {
  const doneLength = useMemo(() => task.doneBoard.length, [task]);

  return (
    <div
      className="done"
      draggable
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      style={
        task.doneBoard?.length > 1 ? { height: "auto" } : { height: "350px" }
      }
    >
      <Stack direction="row" spacing={1}>
        <Chip
          label="Done"
          sx={{
            backgroundColor: "#defdfe",
            color: "#34b0c1",
            fontWeight: "700",
          }}
        />
        <Chip
          label={doneLength}
          variant="outlined"
          sx={{
            fontWeight: "700",
            color: "#34b0c1",
            border: "1px solid #34b0c1",
          }}
        />
      </Stack>

      {task.doneBoard.map(({ id, title, description, finished }) => (
        <Card
          className="card"
          key={id}
          draggable
          onDragStart={(e) => handleOnDrag(e, { title, id }, "doneBoard")}
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
              {format(finished)}
            </Typography>
          </Box>
        </Card>
      ))}
    </div>
  );
}
