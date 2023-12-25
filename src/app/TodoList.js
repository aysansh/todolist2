import React from "react";
import Todo from "./Todo";

async function TodoList() {
  const res = await fetch("https://hr-todo.sahda.ir/", {
    cache: "no-cache",
    next: {
      tags: ["tasks"],
    },
  });
  const data = await res.json();

  return (
    <div className="flex mt-5 justify-between">
      {/* Uncompleted tasks */}
      <div>
        <h2 className="font-bold my-4">uncompleted Tasks</h2>
        <ul className="flex flex-col gap-4">
          {data.uncompleted &&
            data.uncompleted.map((item) => (
              <li key={item.id} className="flex gap-10">
                <Todo
                  item={item.item}
                  id={item.id}
                  typeCompleted={item.todoStatu}
                />
              </li>
            ))}
        </ul>
      </div>
      {/* completed tasks */}
      <div>
        <h2 className="font-bold my-4">completed Tasks</h2>
        <ul className="flex flex-col gap-4">
          {data.completed &&
            data.completed.map((item) => (
              <li key={item.id} className="flex gap-10">
                <Todo
                  item={item.item}
                  id={item.id}
                  typeCompleted={item.todoStatu}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
