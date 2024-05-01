
import React, { useState } from "react";

const TaskForm = ({ onAdd, assignedUsers }) => {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [errors, setErrors] = useState({});
    const [assignedTo, setAssignedTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const errors = {};
        if (!title.trim()) {
            errors.title = "Title is required";
        }
        if (!dueDate.trim()) {
            errors.dueDate = "Due date is required";
        }

        if (Object.keys(errors).length === 0) {
            onAdd({ title, dueDate,assignedTo});
            setTitle('');
            setDueDate('');
            setErrors({});
            setAssignedTo('');
        } else {
            setErrors(errors);
        }
    };

    return (
        <form className="task-form " onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="error-message">{errors.title}</p>}
            {/* <label htmlFor="date">Enter Due date</lsabel> */}
            <input
                id="date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            {errors.dueDate && <p className="error-message">{errors.dueDate}</p>}
            <select
                className="task-input"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                required
            >
                <option value="">Assign to</option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
                <option value="user4">User 4</option>
                <option value="user5">User 5</option>
                <option value="user6">User 6</option>
            </select>
     
            <button className="add-btn" type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm