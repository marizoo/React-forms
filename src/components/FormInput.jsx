import React, {useState} from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
flex-direction: column;
width: 280px;
`
const Label = styled.label`
font-size: 12px;
color: gray;
`
const ErrMessage = styled.span`
font-size: 12px;
padding: 3px;
color: red;
display: none;
`

const Input = styled.input`
padding: 15px;
margin: 10px 0;
border-radius: 5px;
border: 1px solid gray;

&:invalid[focused="true"] ~ span{
display: block;
}
`



const FormInput = (props) => {
    const [focused, setFocused] = useState(false);

    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };


    return (
        <Cont>
            <Label>{label}</Label>
            <Input 
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <ErrMessage>{errorMessage}</ErrMessage>
        </Cont>
    )
}

export default FormInput
