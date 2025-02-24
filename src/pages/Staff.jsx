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

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleAddStaff = () => {
    if (name.trim()) {
      setStaff([...staff, name]);
      setName("");
      setError("");
    } else {
      setError("Teacher name cannot be empty");
    }
  };

  const handleRemoveStaff = (index) => {
    const newStaff = staff.filter((_, i) => i !== index);
    setStaff(newStaff);
    setDeleteIndex(null);
  };

  const handleEditStaff = (index) => {
    setEditIndex(index);
    setEditName(staff[index]);
  };

  const handleSaveEdit = () => {
    const newStaff = staff.map((st, index) =>
      index === editIndex ? editName : st
    );
    setStaff(newStaff);
    setEditIndex(null);
    setEditName("");
  };

  return (
    <div>
      <h1>Staff Page</h1>
      <TextField
        label="Staff Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        margin="normal"
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" color="primary" onClick={handleAddStaff}>
        Add Staff
      </Button>
      {staff.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No staff added yet.
        </Typography>
      ) : (
        <List>
          {staff.map((st, index) => (
            <ListItem key={index}>
              <ListItemText primary={st} />
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEditStaff(index)}
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
        <DialogTitle>Edit Staff</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the name of the staff.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Staff Name"
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
        <DialogTitle>Delete Staff</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this staff?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteIndex(null)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleRemoveStaff(deleteIndex)}
            color="primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Staff;
