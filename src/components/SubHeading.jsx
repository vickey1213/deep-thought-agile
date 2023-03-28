import { Button, Typography, Stack } from "@mui/material";
import React from "react";

const SubHeading = () => {
  return (
    <div>
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <Typography variant="h5" sx={{ color: "#0029FF" }}>
          Technical Project Management
        </Typography>
        <button
          style={{
            color: "white",
            backgroundColor: "#0029FF",
            border: "none",
            borderRadius: "10px",
            height: "25px",
          }}
        >
          Submit task
        </button>
      </Stack>
    </div>
  );
};

export default SubHeading;
