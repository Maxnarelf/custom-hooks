import Books from "./components/Books";
import ForwardCounter from "./components/ForwardCounter";
import { books } from "./data";
import useLocalStorage from "./hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";
import { useInput } from "./hooks/useInput";
import { useCookie } from "./hooks/useCookie";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [order, setOrder] = useLocalStorage([], "order");
  const [tasks, setTasks] = useState([]);
  const [value, updateCookie, deleteCookie] = useCookie("token", "");
  const { bind, val } = useInput("");
  const { data1, error1, isLoading1 } = useFetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  console.log(val);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://testing-project-aa9fe-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  const addToOrder = (id) => {
    const newItem = books.find((item) => item.id === id);
    setOrder([...order, newItem]);
  };
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
      <input {...bind} />

      {isLoading1 ? (
        <div>Loading...</div>
      ) : (
        <div>Data: {JSON.stringify(data1, 2)}</div>
      )}
      {error1 && <div>Error: {error}</div>}
      <div>Token: {value}</div>
      <button onClick={() => updateCookie(String(new Date()))}>
        Change token
      </button>
      <button onClick={deleteCookie}>Remove token</button>

      <Books item={books} addToOrder={addToOrder} />
      <ForwardCounter />
    </React.Fragment>
  );
}

export default App;
