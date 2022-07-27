import { useState } from "react";
import {TiTrash} from "react-icons/ti";

const ShowTasks = ({ tasks, setTasks }) => {
  const [done, setDone] = useState(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleDone = (e) => {
    if (done) {
      e.target.classList.add("done");
      setDone(!done);
    } else {
      e.target.classList.remove("done");
      setDone(!done);
    }
  };

  return tasks.map((item) => {
    const { id, task, day } = item;

    return (
      <div>
        <div className="display-tasks" key={id} onClick={handleDone}>
          <div className="task">
            <h2>{task}</h2>
            <p>{day} </p>
          </div>
          <div className="dlt" onClick={() => handleDelete(id)}>
          <TiTrash size={42}/>
          </div>
        </div>
      </div>
    );
  });
};

export default ShowTasks;
