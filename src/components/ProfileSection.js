import styled from 'styled-components';
import axios from 'axios';
import React,{useState , useEffect} from 'react';
const SectionMain = styled.div`
margin:30px 10px 20px 10px;
display:block;
font-size: 16px;
height: 100%; 
`;
const SectionImages = styled.div`
display:flex;
`;
const Img = styled.img`
margin:15px;
`;
const H2 = styled.h2`
margin:15px;
`;
   
   
    const ProfileSection = () =>{
        const [uploadedFile, setUploadedFile] = useState([]);
        useEffect(() => {
            axios.get(' https://frozen-dusk-93485.herokuapp.com/content').then(res=> {
              setUploadedFile(res.data.imageUrl);
              console.log(res.data.imageUrl);
              
          });
            
        },[]);

        const myList= uploadedFile.map((item) => <Img src={` https://frozen-dusk-93485.herokuapp.com/uploads/${item.name}`} width="200" />);

        return(
        <SectionMain>
        <H2>Recent</H2>
        <SectionImages>
            {myList}
        </SectionImages>
        </SectionMain>
        )
    }
    export default ProfileSection;