// @ts-check

import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task.jsx';
import { tasksSelectors } from './tasksSlice.js';

const TasksList = () => {
  const tasks = useSelector(tasksSelectors.selectByCurrentListId);

  if (tasks.length === 0) {
    return <div>Список задач пустой</div>;
  }
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li className="list-group-item container" key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
