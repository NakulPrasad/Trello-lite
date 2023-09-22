import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { tasksJSON } from "../assets/tasks.js";

const TaskContainer = () => {
  const [tasks, setTasks] = useState(null);
  //fetches data from api,
  //for testing purpose it calls from tasks.js
  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedTasks = JSON.parse(tasksJSON);
        setTasks(parsedTasks);
        console.log(parsedTasks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (tasks === null) {
    return <div>Loading...</div>;
  }

  //logic for drag and drop
  const handleDragEnd = ({ destination, source, results }) => {
    console.log(destination, source, results);
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    const itemMoved = {
      ...tasks[source.droppableId].items[source.index],
    };
    console.log("DraggedItem>>> ", itemMoved);

    tasks[source.droppableId].items.splice(source.index, 1);

    tasks[destination.droppableId].items.splice(
      destination.index,
      0,
      itemMoved
    );
  };

  return (
    <div className="container">
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(tasks).map((task) => (
          <div
            className={`${task[1].title.toLowerCase()}__wrapper`}
            key={task[1].title}
          >
            <h3>{task[1].title}</h3>
            <div className={`${task[1].title.toLowerCase()}__container`}>
              {/* {console.log(task[1].title)} */}
              <Droppable droppableId={task[1].title} type="group">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {task[1].items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${task[1].title.toLowerCase()}__items`}
                          >
                            <p>{item.title}</p>
                            <p className="comment">
                              {/* added links to comments */}
                              <Link to={`/comments`}>Add comments</Link>
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskContainer;
