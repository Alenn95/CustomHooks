import React from "react";

export const UseTodos = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const todoReducer = (initialState = [], action) => {


        switch (action.type) {
            case '[TODO] Add todo':

                return [...initialState, action.payload]

            case '[TODO] Remove Todo':
                return initialState.filter(todo => todo.id !== action.payload);

            case '[TODO] Toggle Todo':
                return initialState.map(todo => {


                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }

                    return todo;
                })

            default:
                return initialState;
        }
    }

    const [todos, dispatch] = React.useReducer(todoReducer, initialState, init)

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    return {

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todoReducer,
        todos,
        todosCount,
        pendingTodosCount

    }

}

