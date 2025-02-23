import { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleAddStudent = () => {
    if (name.trim()) {
      setStudents([...students, name]);
      setName("");
      setError("");
    } else {
      setError("Student name cannot be empty");
    }
  };

  const handleRemoveStudent = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <div>
      <h1>Students Page</h1>
      <TextField
        label="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        margin="normal"
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" color="primary" onClick={handleAddStudent}>
        Add Student
      </Button>
      {students.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No students added yet.
        </Typography>
      ) : (
        <List>
          {students.map((student, index) => (
            <ListItem key={index}>
              <ListItemText primary={student} />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleRemoveStudent(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Students;
