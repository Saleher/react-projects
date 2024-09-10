import React, { useState } from "react";
import { useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";
import { removeTodo } from "../features/todo/todoSlice";

function AddTodo(){
    const [input, setInput] = useState("");
    const dispatch = useDispatch();


    const addTodoHandler = (e) => {
        e.preventDefault();
        if(input == "")
        return;
        dispatch(addTodo(input));
        setInput("")
    }



    return(
        <>
            <form className="w-100 flex justify-between" onSubmit={addTodoHandler}>
                <input 
                    type="text" 
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base-outline mr-2 p-3 text-white w-1/7"
                    placeholder="Enter a todo" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
               <div>
               
                <button 
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >Add Todo</button>
               </div>
            </form>
        </>
    )
}

export default AddTodo;