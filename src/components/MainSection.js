import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
const Main= styled.div`
display:block;
`;
const MainSec = styled.div`
display:flex;
margin:20px;
background-color:#988558;
height:460px;
`;
const MainSectionLeft = styled.div`
display:block;
margin:10px;

`;
const MainSectionRight = styled.div`
display:block;
width:100%;
text-align:center;
margin:20px;
`;
const Img = styled.img`
margin:20px 0 0 15px;
width:350px;
height:400px;
`;
const P = styled.div`
font-size:23px;
margin:20px;
`;
const Started = styled.div`
display:block;
text-align:center;
`;
const Button = styled.button`
width:20%;
height:40px;
background:#0061Fe;
color:white;
font-size:20px;

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
const MainSection = () => {
    return(
        <Main>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam blandit eros, at imperdiet ex elementum
                 at. Duis porta gravida orci non venenatis. Sed a sem eros. In interdum lorem sit amet metus pellentesque tempus ..  
             </P>
             <Started>
             <Link to = '/Profile'> <Button >Get Started</Button></Link>
             </Started>
             <MainSec>
             <MainSectionLeft>
            <Img src={image1} alt="img1"/>
            </MainSectionLeft>
            <MainSectionRight>
             <h2>Hello and welcome</h2>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris sem, vulputate fringilla tortor non, pretium egestas enim. Maecenas sed urna eu urna malesuada malesuada sed eget lectus. Nulla vitae facilisis lectus. Donec in aliquam tortor. Donec sed hendrerit nisl, sed suscipit purus. Vestibulum in elit quis risus gravida hendrerit. Aenean diam enim, luctus et sem commodo, pretium hendrerit risus. In vel imperdiet quam, ut euismod ligula. Maecenas non nibh ex. Morbi maximus orci ac quam imperdiet dignissim. Pellentesque sed lectus enim. Suspendisse potenti. Sed tincidunt nibh erat, ac congue diam volutpat ac. Pellentesque imperdiet eu felis quis semper.

Vestibulum aliquet sapien justo, in mollis velit tempor maximus. Integer varius hendre</P>
            </MainSectionRight>
             </MainSec>
            

        </Main>
    )
}
export default MainSection;