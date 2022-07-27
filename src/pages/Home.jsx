import { useEffect, useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
// import data from "../helper/starterData";

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
