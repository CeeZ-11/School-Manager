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

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleAddTeacher = () => {
    if (name.trim()) {
      setTeachers([...teachers, name]);
      setName("");
      setError("");
    } else {
      setError("Teacher name cannot be empty");
    }
  };

  const handleRemoveTeacher = (index) => {
    const newTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(newTeachers);
    setDeleteIndex(null);
  };

  const handleEditTeacher = (index) => {
    setEditIndex(index);
    setEditName(teachers[index]);
  };

  const handleSaveEdit = () => {
    const newTeachers = teachers.map((teacher, index) =>
      index === editIndex ? editName : teacher
    );
    setTeachers(newTeachers);
    setEditIndex(null);
    setEditName("");
  };

  return (
    <div>
      <h1>Teachers Page</h1>
      <TextField
        label="Teacher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        margin="normal"
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" color="primary" onClick={handleAddTeacher}>
        Add Teacher
      </Button>
      {teachers.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No teachers added yet.
        </Typography>
      ) : (
        <List>
          {teachers.map((teacher, index) => (
            <ListItem key={index}>
              <ListItemText primary={teacher} />
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditTeacher(index)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => setDeleteIndex(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
      <Dialog open={editIndex !== null} onClose={() => setEditIndex(null)}>
        <DialogTitle>Edit Teacher</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the name of the teacher.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Teacher Name"
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
      <Dialog open={deleteIndex !== null} onClose={() => setDeleteIndex(null)}>
        <DialogTitle>Delete Teacher</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this teacher?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteIndex(null)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleRemoveTeacher(deleteIndex)}
            color="primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Teachers;
