import React,{useState , useEffect} from 'react';
import  {useNavigate}  from 'react-router-dom'; 
import styled from 'styled-components';
const axios = require('axios');

const Header= styled.div`
display:flex;


`;
const Headerleft= styled.div`
width:50%;
font-size:25px;
`;
// const Headerright= styled.div`
// width:50%;
// display:block;
// font-size:15px;
// color:blue;
// text-align:right;
// padding-top:10px;
// `;
const Form= styled.form`
display:block;
margin:20px 0;

`;
const Lable= styled.div`
display:block;
font-size:15px;

`;
const Input= styled.input`

margin-bottom:5px;
&:focus{
    border: 1px solid black;
}

`;
const Button= styled.button`
display:block;
margin:5px 0 0 0;
border: none;
padding: 8px 15px 8px 15px;
background: #FF8500;
color: #fff;
box-shadow: 1px 1px 4px #DADADA;
-moz-box-shadow: 1px 1px 4px #DADADA;
-webkit-box-shadow: 1px 1px 4px #DADADA;
border-radius: 3px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
cursor:pointer;

&:hover{
    background: #EA7B00;
	color: #fff;
}

`;




const ForgotForm = () => {
    const intialForgotValues = {email:""};
    const[forgotValues, setForgotValues] =useState(intialForgotValues);
    const [isSubmit , setIsSubmit]=useState(false);
    const[forgotErrors, setForgotErrors] =useState({});
    const[user,setUser]=useState("");
    const handleForgotChange = (e) => {
           const {email,value} = e.target;
          setForgotValues({...forgotValues, [email]: value});
       };
    const handleForgotSubmit = (e) => {
        e.preventDefault();
        setForgotErrors(forgotvalidate(forgotValues));
        setIsSubmit(true);
    
    };
    const forgotvalidate = (values) =>{
        // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        const errors ={};
        if(!values.email){
            errors.email ="Email is required";
        }
        return errors;
        // sign up validation form starts here
        };
    useEffect(() =>{
        if(Object.keys(forgotErrors).length === 0 && isSubmit){
            console.log("here");
            // const headers = {
            //     'Content-Type': 'application/json',
            //     'Access-Control-Allow-Origin':'*'
            //   }
              
            axios.post(' https://frozen-dusk-93485.herokuapp.com/forgot', {
                forgotValues
              })
              .then(function (response) {
                // console.log(response.cookie);
                setUser(response.data);
                // localStorage.setItem('token',response.data.token);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        },[forgotErrors]);
    return(
        <>
        <Header>
         <Headerleft>Forgot password</Headerleft>
         </Header>
        <Lable>Email:</Lable>
         <Input type="text" 
         name="email" placeholder="email@example.com"
         value ={forgotValues.email}
         onChange={handleForgotChange}
         />
          <p>{forgotErrors.email}</p>
        <Button type="submit" onClick={handleForgotSubmit} >
          Forgot Password
        </Button> 
        </>
    )
}
export default ForgotForm;