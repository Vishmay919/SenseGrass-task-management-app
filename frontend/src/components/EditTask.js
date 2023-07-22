import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Container,
  Box,
  Typography,
} from "@mui/material";

const EditTaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, like sending the data to the server or performing any other actions.
    console.log(taskData);
  };

  // Function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Edit Task
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
                padding:"16px 8px",
                borderRadius:"8px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
            }}
          >
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Title"
                name="title"
                value={taskData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={5}
                label="Description"
                name="description"
                value={taskData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="date"
                InputProps={{
                    placeholder: 'Due date',
                  }}
                value={taskData.dueDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={taskData.status}
                  onChange={handleChange}
                >
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="ongoing">Ongoing</MenuItem>
                  <MenuItem value="complete">Complete</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"center"}>
              <Button variant="contained" color="primary" type="submit">
                Create Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default EditTaskForm;
