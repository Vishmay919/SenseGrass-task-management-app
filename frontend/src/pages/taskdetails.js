import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import TaskCard from "../components/TaskCard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const statuses = ["pending", "ongoing", "complete"];

const TaskDetails = () => {
  return (
    <>
      <Navbar />
      <Box
        mt={10}
        sx={{
         padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link to="/newtask">
          <Button  variant="outlined">Create New Task</Button>
          </Link>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Sort by Date"
          />
          <Box ml={2}>
            <TextField
              sx={{ minWidth: "180px" }}
              fullWidth
              select
              label="Filter by Status"
            >
              <MenuItem value="">All</MenuItem>
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>

      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "1rem",
        }}
      >
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Box>
    </>
  );
};

export default TaskDetails;
