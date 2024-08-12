import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Todo } from "../../shared/interface";
import TodoItem from "./TodoItem";

interface props {}

const TodoList : React.FC<props> = () => {

    // useEffect(() => {
    //     const interval = setInterval(() =>{
    //         const elem = document.getElementById('list');
    //         if (elem) {
    //             elem.scrollTop = elem.scrollHeight;
    //         }
    //     },5000)
    // }, [])

    
    const todos : Todo[] = useSelector((state : RootState) => state.todos);

    const [counter, setCounter] = useState<number>(0);

    console.log(counter)

    useEffect(() => {
        const elem = document.getElementById('list');
        if (elem) {
            elem.scrollTop = elem.scrollHeight;
        }
    }, [counter]);

    return (
        <>
            <div className="flex flex-col justify-start align-middle max-h-80 back w-full">
                
                <AddTodo counter={counter} setCounter={setCounter}/>

                

                <div id="list" className="flex flex-col p-4 pt-0  overflow-y-auto break-after-auto">
                    {
                        todos.map((todo) => <TodoItem key={todo.id} todo={todo}/> )
                    }
                </div>

            </div>
        </>
    )
}

export default TodoList;