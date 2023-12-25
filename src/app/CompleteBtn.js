"use client";
import { IoCheckbox } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function CompleteBtn({ id }) {
  const router = useRouter();
  const handleDelete = async (id, refresh) => {

    const data = { id, type: 2, sort: true };
    try {
      await fetch(`https://hr-todo.sahda.ir/update.php`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      refresh();
    } catch (error) {
      console.log("error ===> ", error);
    }
  };

  return (
    <button   className="text-3xl text-green-900" onClick={() => handleDelete(id, router.refresh)}><IoCheckbox /></button>
  );
}
