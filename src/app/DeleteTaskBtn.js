"use client";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
export default function DeleteTaskBtn({ id }) {
  const router = useRouter();
  const handleDelete = async (id, refresh) => {
    const data = { id, type: 2, sort: true };
    try {
      await fetch(`https://hr-todo.sahda.ir/delete.php`, {
        method: "delete",
        body: JSON.stringify(data),
      });
      refresh();
    } catch (error) {
      console.log("error ===> ", error);
    }
  };

  return (
    <button
      className="text-3xl text-red-900"
      onClick={() => handleDelete(id, router.refresh)}
    >
      <FaTrashAlt />
    </button>
  );
}
