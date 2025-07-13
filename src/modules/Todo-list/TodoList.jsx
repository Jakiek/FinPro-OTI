import React, { useMemo, useState } from 'react'

function TodoList() {
    // todolist= {id,desc,task,date,type}
    // filter = active & completed

    const [type, setType] = useState("Tasks");
    const {completed, setCompleted, addCompleted, deleteCompleted} = useCompleted();
    const [description, setDescription] = useState("");
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [filter, setFilter] = useState("All");
  
    const stats = useMemo(() => {
        const active = completed
            .filter((completed) => completed.type === "active")
            .reduce((sum, completed) => sum + completed.task, 0);
    
        const completed = completed
            .filter((completed) => completed.type === "completed")
            .reduce((sum, completed) => sum + completed.task, 0);

            const totaltasks = active - completed
    });
            return <div>TodoList</div>
}

export default TodoList