import { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");

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

  const handleEditStudent = (index) => {
    setEditIndex(index);
    setEditName(students[index]);
  };

  const handleSaveEdit = () => {
    const newStudents = students.map((student, index) =>
      index === editIndex ? editName : student
    );
    setStudents(newStudents);
    setEditIndex(null);
    setEditName("");
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
                aria-label="edit"
                onClick={() => handleEditStudent(index)}
              >
                <EditIcon />
              </IconButton>
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
      <Dialog open={editIndex !== null} onClose={() => setEditIndex(null)}>
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the name of the student.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Student Name"
            type="text"
            fullWidth
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditIndex(null)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Students;
