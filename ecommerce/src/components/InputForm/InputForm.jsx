import { WrapperInputStyle } from './style'
import React, { useState } from 'react';

const InputForm = (props) => {
    const [valueInput, setValueInput] = useState('')
    const { placeholder = 'Enter text', ...rests } = props
    return (
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rests} />
    )
}

export default InputForm