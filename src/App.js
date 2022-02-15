import styled from 'styled-components';
// import { increment,decrement } from './components/action';
// import {useSelector,useDispatch} from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import ProfileSection from './components/ProfileSection';
import SubSection from './components/Subsection';
import LoginForm from './components/LoginPage/LoginForm';
import ProfileForm from './components/ProfilePage/ProfileForm';
const AppMain = styled.div`
display:block;
width:100%;
height:100%;
`;

const Section = styled.section`
display:block;
font-size: 16px;
height: 100%; 
`;
function Homepage() {
  // const counter =useSelector(state => state.counterReducer);
  // const dispatch = useDispatch();
  // const stuff= () => dispatch(increment())
  return (
    <AppMain>
    <Navbar/>
    <MainSection/>
    <SubSection/>
    <Footer/>
    </AppMain>
  )
}
function Profilepage() {
  // const counter =useSelector(state => state.counterReducer);
  // const dispatch = useDispatch();
  // const stuff= () => dispatch(increment())
  return (
    <AppMain>
      <Navbar/>
          <ProfileForm/>
        <Section>
        <ProfileSection/>
        </Section>
    </AppMain>
  )
}
    function Loginpage() {
      // const counter =useSelector(state => state.counterReducer);
      // const dispatch = useDispatch();
      // const stuff= () => dispatch(increment())
      return (
        <AppMain>
          <Navbar/>
            <Section>
            <LoginForm/>
            </Section>
        </AppMain>
  
  

  )
}

export {Homepage,Loginpage,Profilepage};
