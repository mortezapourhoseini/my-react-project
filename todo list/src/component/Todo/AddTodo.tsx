import React, { Dispatch, useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todosSlices";
import { AppDispatch } from "../../store";

interface props {
    counter : number,
    setCounter : Dispatch<React.SetStateAction<number>>
}

const AddTodo: React.FC<props> = ({counter, setCounter}) => {

    const dispatch = useDispatch<AppDispatch>();

    const [input, setInput] = useState<string>("");

    const addTodoHandler = () => {
        if (input.length > 0) {
            dispatch(
                addTodo({
                    id: new Date().getTime(),
                    title: input,
                    isDone: false
                })
            )
            setCounter(counter + 1);
            setInput("");
        }
    }

    return (
        <>
            <div className="flex flex-row w-full p-4 align-middle justify-center items-center">
                <input type="text"
                    placeholder="Add new task"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') addTodoHandler();
                    }}
                    value={input}
                    className="bright-back flex flex-auto w-4/6 h-10 mr-4 p-2 text-base bg-inherit bg-blend-multiply focus:outline-none rounded" />

                <button
                    onClick={addTodoHandler}

                    className="flex flex-none justify-center items-center w-2/6 h-12 bg-inherit border text-base border-green-600 hover:bg-green-600 hover:border-green-600 focus:outline-none"
                >Add task</button>
            </div>
        </>
    )
}

export default AddTodo;