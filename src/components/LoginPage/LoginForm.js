import React,{useState , useEffect} from 'react';
import  {useNavigate}  from 'react-router-dom'; 
import SignInPage from './SignInpage';
import ForgotForm from './Forgotform';
import styled from 'styled-components';
// import Forgotform from './Forgotform';
// import SignInPage from './SignInpage';
const axios = require('axios');
const LoginSection= styled.form`
display:block;
width:350px;
margin:20px auto;;
background-color:white;
padding:20px;
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
const LoginForm = () => {
const navigate = useNavigate();



// const handleLogoutSubmit = (e) => {
//   e.preventDefault();
// localStorage.setItem('token',"");
// };

// useEffect(() =>{
// if(Object.keys(signinErrors).length === 0 && isSubmit){
//  console.log (signinValues);
// }
// },[signinErrors]);



const intialSignupValues = {name :"",email:"" ,password:"" ,confirm:""};
const[signupValues, setSignupvalues] = useState(intialSignupValues);
const [isupSubmit , setIsupSubmit]=useState(false);
const[signupErrors, setSignupErrors] =useState({});
const[user,setUser]=useState("");
const handleSignupChange = (e) => {
       const {name,value} = e.target;
      setSignupvalues({...signupValues, [name]: value});
   };
const handleSignupSubmit = (e) => {
    e.preventDefault();
    setSignupErrors(validate(signupValues));
    setIsupSubmit(true);

};

useEffect(() =>{
    if(Object.keys(signupErrors).length === 0 && isupSubmit){
        console.log("here");
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin':'*'
        //   }
          
        axios.post(' https://frozen-dusk-93485.herokuapp.com/register', {
            signupValues
          })
          .then(function (response) {
            console.log(response.data);
            setUser(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    },[signupErrors]);

const validate = (values) =>{
// let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const errors ={};
if(!values.name){
    errors.name ="Name is required";
}
if(!values.email){
    errors.email ="Email is required";
}
if(!values.password){
    errors.password ="Password is required";
}
if(!values.confirm){
    errors.confirm ="Confirm password is required";
}
return errors;
};

    return(
    <LoginSection>
        <SignInPage/>
        <ForgotForm/>
         <Headerleft>Sign Up</Headerleft>
         <Form>
         <Lable>Name:</Lable>
         <Input type="text" name="name"
         value ={signupValues.name}
         onChange={handleSignupChange}
          placeholder="name"/>
          <p>{signupErrors.name}</p>
         <Lable>Email: </Lable>
         <Input type="text" name="email" 
         value ={signupValues.email}
         onChange={handleSignupChange}
         placeholder="email@example.com"/>
         <p>{signupErrors.email}</p>
         <Lable>Password: </Lable>
         <Input type="text" name="password" 
          value ={signupValues.password}
          onChange={handleSignupChange}
          placeholder="password"/>
          <p>{signupErrors.password}</p>
         <Lable>Confirm Password: </Lable>
         <Input type="text" name="confirm"
          value ={signupValues.confirm} 
          onChange={handleSignupChange}
          placeholder="confirm password"/>
          <p>{signupErrors.confirm}</p>
         <Button type="submit" onClick={handleSignupSubmit}>
          Sign Up
        </Button>
         </Form>
    </LoginSection>
        
    )
}
export default LoginForm;