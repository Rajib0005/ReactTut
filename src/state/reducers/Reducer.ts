import { IStore } from "../../interfaces/ITodos";
import { ADD_TODO, ActionType, DELETE_TODO, EDIT_TODO, SET_NEWTODO, SET_TODOS, TOGGLE_TODO, addTodo, editTodo, removeTodo, setNewTodo, toggleTodo } from "../actions/Action";

const TodoReduce = (state: IStore ={
    todos : [],
    newTodo : ""  
}, action : ActionType)=>{
     switch(action.type){
        case SET_TODOS:
            return {
                ...state,
                todos : action.payload
            };
        case SET_NEWTODO:
            return {
                ...state,
                newTodo: action.payload
            };
        case EDIT_TODO :
            return {
                ...state,
                todos : editTodo(state.todos, action.payload.id, action.payload.text)
            }
        case ADD_TODO :
            return {
                ...state,
                newTodo : "",
                todos: addTodo(state.todos, state.newTodo)
            }
        case DELETE_TODO :
            return {
                ...state,
                todos: removeTodo(state.todos, action.payload)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos : toggleTodo(state.todos, action.payload)
            }
        default : return state
        
     }
}

export default TodoReduce