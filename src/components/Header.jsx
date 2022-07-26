import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "Show Add Task Bar",
    bgColor: "green",
  });
  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "Show Add Task Bar",
        bgColor: "green",
      });
    } else {
      setBtnStyle({
        name: "Close Add Task Bar",
        bgColor: "red",
      });
    }
    setShow(!show);
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button
        className="btn"
        onClick={handleShow}
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;
