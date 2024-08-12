import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../shared/interface";

const initialState: Todo[] = [];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toogleTodo: (state, action: PayloadAction<number>) => {
            return state.map((todo: Todo) => {
                return todo.id === action.payload ? {
                    ...todo,
                    isDone: !todo.isDone
                }
                    : todo
            })
        },
        editTodo: (state, action: PayloadAction<{ id: number, title: string }>) => {
            const { id, title } = action.payload;
            return state.map((todo: Todo) => {
                return id === todo.id ? {
                    ...todo,
                    title: title
                }
                : todo
            })
        }
    }
})

export const { addTodo, deleteTodo, toogleTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;