import React, { useState } from "react";

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
        <div className="" key={id} onClick={handleDone}>
          <div className="">
            <h2>{task}</h2>
            <p>{day} </p>
          </div>
          <div className="" onClick={() => handleDelete(id)}>
            delete
          </div>
        </div>
      </div>
    );
  });
};

export default ShowTasks;
