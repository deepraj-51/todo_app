import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState(""); // State for title
    const [description, setDescription] = useState(""); // State for description

    const handleAddTodo = () => {
        // Make a POST request to the backend
        fetch("http://localhost:8080/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error("Failed to add todo");
                }
                const data = await res.json();
                alert("Todo added successfully!");
                console.log(data);
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Failed to add todo. Please try again.");
            });
    };

    return (
        <div>
            <input
                id="title"
                style={{
                    padding: "10px",
                    margin: "10px",
                }}
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)} // Update title state
            />
            <br />
            <br />

            <input
                id="description"
                style={{
                    padding: "10px",
                    margin: "10px",
                }}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)} // Update description state
            />
            <br />
            <br />

            <button
                style={{
                    padding: "10px",
                    margin: "10px",
                }}
                onClick={handleAddTodo} // Call the function to add a todo
            >
                Add a Todo
            </button>
        </div>
    );
}