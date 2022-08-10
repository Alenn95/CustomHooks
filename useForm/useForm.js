import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);


    const { username, email, password } = formState;

    //esto no anda porque no se renderiaz de nuevo/ tengo que hacer una funcion

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        })


    }


    const onResetForm = () =>{
        setformState(initialForm)
    }




    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    }
}
