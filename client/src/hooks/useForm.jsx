import { useState } from "react"

export default function useForm(initialState) {
    const [formValues, setFormValues] = useState(initialState)

    const onChangeHandler = (e) => {
        setFormValues(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return{
        formValues,
        onSubmitHandler,
        onChangeHandler
    }
}