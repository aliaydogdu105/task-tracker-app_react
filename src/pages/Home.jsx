import { useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import data from "../helper/starterData";

const Home = () => {
  const [tasks, setTasks] = useState(data);

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks />
    </div>
  );
};

export default Home;
