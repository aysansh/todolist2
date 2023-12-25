import { MdEditSquare } from "react-icons/md";
import CompleteBtn from "./CompleteBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";

function Todo({ item, id, typeCompleted }) {
  return (
    <>
      <div className="flex gap-2">{item}</div>
      <div className="flex gap-4">
        <button className="text-3xl text-yellow-700">
          <MdEditSquare />
        </button>
        <DeleteTaskBtn id={id} />
        {typeCompleted == "1" && <CompleteBtn id={id} />}
      </div>
    </>
  );
}

export default Todo;
