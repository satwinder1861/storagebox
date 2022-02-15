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

const SignInPage = () => {
    const intialSigninValues = {email:"" ,password:"" };
const[signinValues, setSigninvalues] =useState(intialSigninValues);
const [isSubmit , setIsSubmit]=useState(false);
const[signinErrors, setSigninErrors] =useState({});
const[user,setUser]=useState("");
const handleSigninChange = (e) => {
       const {name,value} = e.target;
      setSigninvalues({...signinValues, [name]: value});
   };
const handleSigninSubmit = (e) => {
    e.preventDefault();
    setSigninErrors(signupvalidate(signinValues));
    setIsSubmit(true);

};
const signupvalidate = (values) =>{
    // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const errors ={};
    if(!values.email){
        errors.email ="Email is required";
    }
    if(!values.password){
        errors.password ="Password is required";
    }
    return errors;
    // sign up validation form starts here
    };
useEffect(() =>{
    if(Object.keys(signinErrors).length === 0 && isSubmit){
        console.log("here");
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin':'*'
        //   }
          
        axios.post('http://localhost:8080/login', {
            signinValues
          })
          .then(function (response) {
            console.log(response.cookie);
            setUser(response.data);
            localStorage.setItem('token',response.data.token);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    },[signinErrors]);
    return(
        <>
        <Header>
         <Headerleft>Sign In</Headerleft>
         </Header>
         <Form   >
         <Lable>Email:</Lable>
         <Input type="text" 
         name="email" placeholder="email@example.com"
         value ={signinValues.email}
         onChange={handleSigninChange}
         />
         <p>{signinErrors.email}</p>
         <Lable>Password: </Lable>
         <Input type="text" name="password" 
         placeholder="password"
         value ={signinValues.password}
         onChange={handleSigninChange} />
         <p>{signinErrors.password}</p>
         <Button type="submit" onClick={handleSigninSubmit} >
          Sign In
        </Button>
         </Form>
         </>
    )
}
export default SignInPage;