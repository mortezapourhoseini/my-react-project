import check from '../../assets/check.svg'
import trash from '../../assets/trash.svg'
import edit from '../../assets/pencil.svg'
import { Todo } from '../../shared/interface'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { deleteTodo, toogleTodo } from '../../store/slices/todosSlices'
import { useEffect, useState } from 'react'
import EditingTodoItem from './EditingTodoItem'

interface Props {
    key: number,
    todo: Todo,
}

const TodoItem: React.FC<Props> = ({ todo }) => {
    
    const [editing, setEditing] = useState<boolean>(false);

    const [removing, setRemoving] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     const interval = setInterval(() =>{
    //         const elem = document.getElementById(todo.id.toString());
    //         if (elem) {
    //             elem.scrollTop = elem.scrollHeight;
    //         }
    //     }, 5000)
    // }, [todo.id])

    const remove = () => {
        setRemoving(true);
        setTimeout(() => {
            dispatch(deleteTodo(todo.id));
        }, 1000);
    }

    const toogle = () => {
        dispatch(toogleTodo(todo.id))
    }

    return (
        <div id={todo.id.toString()}>
            {
                !editing ?
                    <div className={`flex w-full items-center bg-inherit p-3 h-10 rounded mb-2 bright-back apear ${removing ? 'disapear' : ''}`}>
                        <img
                            src={check}
                            alt="check"
                            className={`size-4 ${todo.isDone ? 'filter-gray' : 'filter-green'}`}
                            onClick={toogle}
                        />
                        <p className={`ml-2 w-11/12 font-bold ${todo.isDone ? 'line-through text-gray-300' : ''}`} onClick={toogle}>
                            {todo.title}
                        </p>
                        <img
                            src={edit}
                            alt="edit"
                            onClick={() => setEditing(true)}
                            className='size-4 ml-2 filter-gray' />
                        <img
                            src={trash}
                            alt="trash"
                            onClick={remove}
                            className='size-4 ml-2 filter-gray' />
                    </div>
                    : <EditingTodoItem todo={todo} editing={setEditing} />
            }

        </div>
    )
}

export default TodoItem;