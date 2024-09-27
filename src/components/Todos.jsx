import React, { useState } from 'react'; // Import useState to manage local state
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
   const todos = useSelector(state => state.todos);
   const dispatch = useDispatch();

   // Local state to manage the currently editing todo
   const [editText, setEditText] = useState('');
   const [editingTodoId, setEditingTodoId] = useState(null);

   // Function to handle start editing a todo
   const handleEditClick = (todo) => {
      setEditText(todo.text); // Set input to the current todo text
      setEditingTodoId(todo.id); // Set the editing id
   };

   // Function to handle updating a todo
   const handleUpdate = () => {
      if (editText.trim()) { // Ensure the new text is not empty
         dispatch(updateTodo({ id: editingTodoId, newText: editText }));
         setEditText(''); // Clear input after updating
         setEditingTodoId(null); // Reset editing id
      }
   };

   return (
    <div className='w-96 '>
        
         <ul className="list-none">
            {todos.map((todo) => (
               <li
                  className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                  key={todo.id}
               >
                  {editingTodoId === todo.id ? (
                     <>
                        <input
                           type="text"
                           value={editText}
                           onChange={(e) => setEditText(e.target.value)} // Update local state
                           className="px-2 py-1 text-black rounded"
                        />
                        <button
                           onClick={handleUpdate} // Call handleUpdate on button click
                           className="ml-2 text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                        >
                           Update
                        </button>
                     </>
                  ) : (
                     <>
                        <div className='text-white'>{todo.text}</div>
                        <button
                           onClick={() => handleEditClick(todo)} // Set the todo for editing
                           className="ml-2 text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                        >
                           Edit
                        </button>
                     </>
                  )}
                  <button
                     onClick={() => dispatch(removeTodo(todo.id))}
                     className="ml-2 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                     </svg>
                  </button>
               </li>
            ))}
         </ul>
         </div>
   );
}

export default Todos;
