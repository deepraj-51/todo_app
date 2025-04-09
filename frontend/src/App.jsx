import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [selectId, setSelectId] = useState(1);
  
  return <div>
    <button onClick={()=>{
      setSelectId(1);
    }}>1</button>
    <button onClick={()=>{
      setSelectId(2);
    }}>2</button>
    <button onClick={()=>{
      setSelectId(3);
    }}>3</button>
    <button onClick={()=>{
      setSelectId(4);
    }}>4</button>
    <Todo id={selectId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:8080"}/todo/${id}`)
      .then(async function(res) {
        const json = await res.json();
        setTodo(json.todo);
      })
  }, [id]);

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;