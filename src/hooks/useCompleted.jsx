import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useCompleted() {
    const [completed, setCompleted] = useState(() => {
        try {
            const savedCompleted = localStorage.getItem("completed");
            if (savedCompleted){
                return JSON.parse(savedCompleted).map((completed) => ({
                    ...completed,
                    date: new Date(completed.date),

                }))
            }
        } catch (error) {
            console.error("Error parsing completed from localStorage:", error);
            
        }
        return []; 
    });
    useEffect(() => {
        if(completed){
            localStorage.setItem("completed", JSON.stringify(completed))
        }
    }, [completed])

    const addCompleted = (task,description,type) => {
        if (task && description.trim()){
            const newCompleted = {
                id: uuidv4(),
                task: parseFloat(task),
                description: description.trim(),
                type,
                createdAt: new Date(),
            }
            setCompleted([newCompleted, ...completed])
        }        
    }
    const deleteCompleted = (id) => {
        setCompleted(completed.filter((completed) => completed.id !== id))
    }

}
