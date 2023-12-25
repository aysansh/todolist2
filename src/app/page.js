import { revalidateTag } from "next/cache";
import TodoList from "./TodoList";
import { FaPlusSquare } from "react-icons/fa";
export default async function Home() {
  async function addTask(e) {
    "use server";
    let task = e.get("task");
    const newTask = { item: task };
    await fetch("https://hr-todo.sahda.ir/create/task/", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("tasks");
  }

  return (
    <div className="w-full">
      <form action={addTask} className="w-full flex items-center ">
        <input className="border p-3 w-[80%]" name="task" type="text" placeholder="Write Your Task ..." />
        <button className="bg-green-500 p-3 text-3xl text-white rounded">
          <FaPlusSquare />
        </button>
      </form>
      <TodoList />
    </div>
  );
}
