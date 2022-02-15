import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const NavMain = styled.div`
display:flex;
background:#fff;
height:50px;
color:black;
`;
const NavRight=styled.div`
width:50%;
display:flex;
padding:0;
justify-content:right;
`;
const NavLeft=styled.div`
width:50%;
display:flex;
padding:0;
`;

const Button =styled.button`
align-items: center;
width:120px;
  appearance: none;
  background-color:#0061Fe;
//   background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 35px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  margin:7px 20px 0 0;

  &:focus{
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset; 
  }

  &:hover {
      box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
       transform: translateY(-2px);
     }
 &:active {
       box-shadow: #3c4fe0 0 3px 7px inset;
      transform: translateY(2px);
     }
`;
const Logo =styled.h1`
font-size:35px;
font-weight:600;
Padding:0;
margin:0 0 0 15px;
`;
const linkStyle = {
  margin: '0',
  textDecoration: "none",
};

const Navbar = () => {
    return(
    <NavMain>
       <NavLeft>
           <Logo>Project</Logo>
       </NavLeft> 
       <NavRight>
           <Link to = '/Login' style={linkStyle}><Button>Sign in</Button> </Link>
           
     </NavRight>
    </NavMain>
    )
}
export default Navbar;