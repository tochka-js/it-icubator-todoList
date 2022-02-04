import React from "react";

type TodoListType = {
    title: string,
    tasks: Array<ObjectFromArrayType>
}
type ObjectFromArrayType = {
    id: number,
    title: string,
    isDone: boolean
}

export const TodoList = (props: TodoListType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((m,index) => {
                    debugger
                    return (
                        <li key={index}><input type="checkbox" checked={m.isDone}/> <span>{m.title}</span></li>
                    )
                })}

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
};