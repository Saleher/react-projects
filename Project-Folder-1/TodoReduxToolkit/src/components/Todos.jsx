import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";




function Todos(){
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()


    
    
    return(
        <>
            <h2 className="my-3 font-weight-500 text-xl font-bold">Todos</h2>
            {todos.map((todo) => (
                <li key={todo.id} className="md:flex bg-slate-100 mb-2 p-2 content justify-between">
                    {todo.text}
                   <div>
                    <button className="mr-2">Edit</button>
                    <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    >X</button>
                   </div>
                </li>
            ) )}
        </>
    )
}


export default Todos