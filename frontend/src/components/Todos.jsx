export function Todos({todos}){
    return (
    <div>
        {todos.map(function(todo, index){
            return (
                <div key={todo.id || index}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            );
        })}        
    </div>
    )
}