export interface ITodo{
    id: number, 
    text : string,
    isCreated : boolean
}

export interface IStore{
    todos: ITodo[] ,
    newTodo: string
}