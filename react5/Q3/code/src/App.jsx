import { useState } from "react";
import TodosList from "./components/TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h2>Iteration + Fetch + Cleanup Example</h2>

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
