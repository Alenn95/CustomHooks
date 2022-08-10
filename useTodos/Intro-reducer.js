

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];



const todoReducer = (state = initialState, action = {} ) => {

    if (action.type === '[TODO] add todo'){

         return [...state, action.payLoad];

         //nunca usar push porque muta el state. siempre usar spread
    }


        return state;
} 



let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'ir a la pieza',
    done: true,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payLoad: newTodo,
}


todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });



