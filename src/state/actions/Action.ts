import { ITodo } from "../../interfaces/ITodos"

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_NEWTODO = "SET_NEWTODO"
export const SET_TODOS = "SET_TODOS"

export type ActionType =
        | { type: typeof ADD_TODO; }
        | { type: typeof DELETE_TODO, payload: number; }
        | { type: typeof SET_TODOS, payload: ITodo[]; }
        | { type: typeof EDIT_TODO, payload: { id: number, text: string }; }
        | { type: typeof SET_NEWTODO, payload: string; }
        | { type: typeof TOGGLE_TODO, payload: number; }

export const addTodo = (todos: ITodo[], text: string): ITodo[] => [
        ...todos,
        {
                id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
                text,
                isCreated: false,
        },
];

export const removeTodo = (todos: ITodo[], id: number): ITodo[] =>
        todos.filter((todo) => todo.id !== id);

export const editTodo = (todos: ITodo[], id: number, text: string): ITodo[] =>
        todos.map((todo) => ({
                ...todo,
                text: todo.id === id ? text : todo.text,
        }));


export const setNewTodo = (text: string): ActionType => ({
        type: SET_NEWTODO,
        payload: text
})

export const toggleTodo = (todos: ITodo[], id: number): ITodo[] =>
        todos.map((todo) => ({
                ...todo,
                done: todo.id === id ? !todo.isCreated : todo.isCreated,
        }));
export const setTodos = (todos: ITodo[]): ActionType => ({
        type: SET_TODOS,
        payload: todos
})

