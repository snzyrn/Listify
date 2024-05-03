import React, { useEffect, useState } from 'react';
import SideMenu from '../components/SideMenu';

function Home() {
  const [listItems, setListItems] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const completedTasks = listItems.filter((task) => task.completed);
  const uncompletedTasks = listItems.filter((task) => !task.completed);
  
  function addListItem() {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(), // Unique identifier for the task
        text: taskInput.trim(),
        completed: false // Default completion status
      };
      const updatedTasks = [...listItems, newTask];
      setListItems(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTaskInput(''); // Clear the input field after adding task
    }
  }

  function deleteListItem(taskId) {
    const updatedTasks = listItems.filter((item) => item.id !== taskId);
    setListItems(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setListItems(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (listItems.completed) {
      document.getElementById("new-task").disabled = true;
    }
  }, [listItems])

  return (
    <div class="flex flex-row">
    {/* Side Box */}
    <SideMenu />
     {/* Main Box  */}
    <div class="bg-stone-100 w-full">
      <div>
        <p class="m-4 text-3xl font-bold text-slate-800">Today</p>
      </div>
      <div class="flex m-4 items-center justify-center">
        <input
          type="text"
          name="new-task"
          id="new-task"
          placeholder="Add New Task"
          class="block m-2 w-1/4 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addListItem(e);
            }
          }}
        />
        <button
          type="submit"
          value={taskInput}
          onClick={addListItem}
          class="block m-2.5 rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Add
        </button>
      </div>
     {/* Render list items */}
     {uncompletedTasks.map((item) => (
          <div key={item.id} className="flex items-center m-2 ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id={`checkbox-${item.id}`}
              type="checkbox"
              value=""
              checked = {item.completed}
              onChange={() => {
                const updatedListItems = listItems.map((listItem) =>
                  listItem.id === item.id ? { ...listItem, completed: !listItem.completed } : listItem
                );
                setListItems(updatedListItems);
                localStorage.setItem('tasks', JSON.stringify(updatedListItems));
                setTaskInput('');
              }}
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={`checkbox-${item.id}`}
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {item.text}
            </label>
            <button onClick={() => deleteListItem(item.id)}><i class="mr-5 fa-solid fa-trash-can"></i></button>
          </div>
        ))}
      <div>
      <p class="m-4 text-xl font-bold text-slate-800">Completed</p>
      {completedTasks.map((task) => (
            <div key={task.id} className="flex items-center m-2 ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id={`checkbox-${task.id}`}
                type="checkbox"
                checked={task.completed}
                disabled={true} 
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`checkbox-${task.id}`}
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {task.text}
              </label>
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default Home