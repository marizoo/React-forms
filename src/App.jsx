import { useState } from "react";
import styled from "styled-components";
import FormInput from "./components/FormInput";

const Cont = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
background: linear-gradient(
  rgba(255, 255, 255, 0.7),
  rgba(255, 255, 255, 0.3)
),
url('https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
background-size: cover;
background-position: center;
`
const Form = styled.form`
background-color: white;
padding: 0 60px;
border-radius: 10px;
`

const Title = styled.h1`
color: #520352;
text-align: center;
`

const Button = styled.button`
width: 100%;
height: 50px;
padding: 10px;
border: none;
background-color: rebeccapurple;
color: white;
font-size: 18px;
font-weight: bold;
border-radius: 5px;
cursor: pointer;
margin-top: 15px;
margin-bottom: 30px;
`

const App = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id: 1,
      name:"username",
      type:"text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name:"email",
      type:"email",
      placeholder: "Email",
      errorMessage:"It should be a valid email address",
      label: "Email",
      required: true,

    },
    {
      id: 3,
      name:"birthday",
      type:"date",
      placeholder: "Birthday",
      errorMessage:"",
      label: "Birthday",
    },
    {
      id: 4,
      name:"password",
      type:"password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,

    },
    {
      id: 5,
      name:"confirmPassword",
      type:"password",
      placeholder: "Confirm Password",
      errorMessage:"Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,

    },
  ]
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
  }


  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }


  console.log(values);
  return (
  <Cont>
    <Form onSubmit={handleSubmit}>
      <Title>Register</Title>
        {inputs.map((input) => (
        <FormInput 
        key={input.id} 
        {...input}
        value={values[input.name]}
        onChange={onChange}
        />
        ))}
        
        <Button>Submit</Button>
    </Form>
  </Cont>
    );
};

export default App;