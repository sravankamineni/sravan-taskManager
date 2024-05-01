
import React, {useState,useEffect} from "react";
import TaskList  from "../TaskList";
import TaskForm from "../TaskForm";
import TaskSummary from "../TaskSummary";


const calculateStatus = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);

    if (today > due) {
        return 'Pending';
    } else if (due > today) {
        return 'In_Progress';
    } else {
        return 'Completed';
    }
};


const TaskManager = () => {


    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', dueDate: '2024-05-05', status: '', assignedTo: 'user 1' },
        { id: 2, title: 'Task 2', dueDate: '2023-05-10', status: '', assignedTo: 'user 2' },
        { id: 2, title: 'Task 3', dueDate: '2025-05-10', status: '', assignedTo: 'user 3' },
    ]);

    const statusCounts = tasks.reduce((counts, task) => {
        counts[task.status] = (counts[task.status] || 0) + 1;
        
        return counts;
        
    }, {});
    console.log(statusCounts)

    const Piedata = [
        {
            count: statusCounts.In_Progress,
            language: "InProgress",
        },
        {
            count: statusCounts.Pending,
            language: "Pending",
        },
        {
            count:statusCounts.Completed,
            language: "Completed",
        },
    ]


    const onDeleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const onSaveTask = (taskId, updatedTitle, updatedDueDate, assignedTo) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, title: updatedTitle, dueDate: updatedDueDate, assignedTo};
            }
            return task;
        }));
    };

    // Function to handle task completion
    const onCompleteTask = (taskId) => {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, status: 'Completed' };
            }
            return task;
        }));
    };

    // Function to handle task addition
    const onAddTask = (newTask) => {
        const newId = tasks.length + 1;
        const newTaskWithId = { ...newTask, id: newId, status: calculateStatus(newTask.dueDate) };
        setTasks([...tasks, newTaskWithId]);
    };

    // Function to handle task status update
    const onUpdateTaskStatus = () => {
        setTasks(tasks.map((task) => ({
            ...task,
            status: calculateStatus(task.dueDate)
        })));
    };

   
    useEffect(() => {
        onUpdateTaskStatus();
        // eslint-disable-next-line
    },[]);

    return (
        <>
            <div className="task-manager">
                <h1 className="title">Task Manager</h1>
                <TaskForm onAdd={onAddTask} />
                <hr />
                <TaskList tasks={tasks} onDelete={onDeleteTask} onComplete={onCompleteTask} onSave={onSaveTask} />
            </div>
            <TaskSummary Piedata={Piedata}/>
        </>
        
    );
};

export default TaskManager;