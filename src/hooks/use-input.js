import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = isTouched && !valueIsValid


    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
        setIsTouched(true)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    };

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        hasError,
        reset
    }
}

export default useInput;
