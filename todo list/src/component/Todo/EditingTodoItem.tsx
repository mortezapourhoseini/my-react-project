import { Dispatch, SetStateAction, useState } from "react";
import { Todo } from "../../shared/interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { deleteTodo, editTodo } from "../../store/slices/todosSlices";

interface Props {
    todo: Todo,
    editing: Dispatch<SetStateAction<boolean>>
}

const EditingTodoItem: React.FC<Props> = ({ todo, editing }) => {

    const [input, setInput] = useState<string>(todo.title);

    const dispatch = useDispatch<AppDispatch>();

    const editHandler = () => {
        if(input.length > 0) {
            dispatch(
                editTodo({
                    id : todo.id,
                    title : input
                })
            )
            editing(false)
        }
        else {
            dispatch(
                deleteTodo(todo.id)
            )
        }
    }

    return (
        <>
            <div className="flex w-full items-center bg-inherit p-3 h-10 rounded mb-2 bright-back">
                <input type="text"
                    autoFocus
                    placeholder="Edit your task"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') editHandler();
                    }}
                    value={input}
                    className="bright-back flex flex-auto h-8 mr-4 p-2 text-sm bg-inherit bg-blend-multiply focus:outline-none rounded" />
                <button
                    onClick={editHandler}
                    className="h-6 flex justify-center items-center text-sm bg-inherit border border-green-600 p-4 hover:bg-green-600 hover:border-green-600">Edit</button>
            </div>
        </>
    )
}

export default EditingTodoItem;