import { FormEvent, createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";



const TodoContext = createContext({} as {value: string, 
    setValue: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    todo : string[],
    setTodos: (e: FormEvent<HTMLFormElement>) => React.ReactNode
});

const TodoProvider = ()=>{
    const [inputvalue, setinputValue] = useState('');
    var storeData  = (e: React.ChangeEvent<HTMLInputElement>)=>{
     setinputValue(e.target.value)
    }
    
    const [todo, setTodo] = useState<string[]>([]);
    const craeteTodo = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const newVal = inputvalue;
            setTodo([...todo, newVal])
        return <Outlet />
    }
    return (
        <TodoContext.Provider value={{value : inputvalue, setValue: storeData, todo: todo, setTodos: craeteTodo}}>
            <Outlet />
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}