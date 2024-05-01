
import Task from "../Task";
const TaskList = ({ tasks, onDelete, onEdit, onSave, onComplete, assignedUsers }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete} onSave={onSave}  assignedUsers={assignedUsers} />
            ))}
        </div>
    );
};

export default TaskList