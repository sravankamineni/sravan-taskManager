import { useState } from "react";

const Task = ({ task, onDelete, onSave, onComplete,assignedUsers }) => {
    const { id, title: initialTitle, dueDate: initialDueDate, status, assignedTo } = task;
    const [editing, setEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(initialTitle);
    const [updatedDueDate, setUpdatedDueDate] = useState(initialDueDate);
    const [assignedUser, setAssignedUser] = useState(assignedTo);
    
    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        onSave(id, updatedTitle, updatedDueDate,assignedUser);
        console.log("Updated Title:", updatedTitle);
        console.log("Updated Due Date:", updatedDueDate);
        setEditing(false);
    };

    const handleTitleChange = (e) => {
        setUpdatedTitle(e.target.value);
    };

    const handleDueDateChange = (e) => {
        setUpdatedDueDate(e.target.value);
    };

    const handleAssignUser = (e) => {
        setAssignedUser(e.target.value);
    };

    return (
        <div className="task">
            {editing ? (
                <>
                    <input type="text" value={updatedTitle} onChange={handleTitleChange} className="edit-input" />
                    <input type="date" value={updatedDueDate} onChange={handleDueDateChange} className="edit-input" />
                    <select
                        value={assignedUser}
                        onChange={handleAssignUser}

                    >
                        <option value="user1">User 1</option>
                        <option value="user2">User 2</option>
                        <option value="user3">User 3</option>
                        <option value="user4">User 4</option>
                        <option value="user5">User 5</option>
                        <option value="user6">User 6</option>
                    </select>
                </>
            ) : (
                <div>
                    <strong>{updatedTitle}</strong>
                    <p>Due Date: {updatedDueDate}</p>
                    <p>Status: {status}</p>
                    <p>Assigned to: {assignedUser}</p>
                </div>
            )}
            <div>
                {editing ? (
                    <button className="action-btn" onClick={handleSave}>Save</button>
                ) : (
                    <>
                        <button className="action-btn" onClick={handleEdit}>Edit</button>
                        <button className="action-btn" onClick={() => onDelete(id)}>Delete</button>
                        <button className="action-btn"onClick={() => onComplete(id)}>Complete</button>
                    </>
                )}
            </div>
        </div>
    );
};







export default Task