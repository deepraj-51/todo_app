import { useEffect, useState } from "react";

 function Todo({id}) {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        console.log(`Fetching todo with id: ${id}`);
        const response = await fetch(`http://localhost:8080/todo/${id}`);
        if (!response.ok) {
            console.error("Failed to fetch todo:", response.statusText);
            return;
        }
        console.log("API fetch successful");
        const data = await response.json();
        console.log("Fetched todo data:", data.todo);
        setTodos(data.todo);
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <h1>{todos.title}</h1>
            <h4>{todos.description}</h4>
        </div>
    )
}