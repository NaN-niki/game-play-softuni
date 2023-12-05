import { useState } from "react"

export default function useForm(submitHandler, initialState) {
    const [formValues, setFormValues] = useState(initialState)

    const onChangeHandler = (e) => {
        setFormValues(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submitHandler(formValues)
        console.log(formValues)
    }

    return{
        formValues,
        onSubmit,
        onChangeHandler
    }
}