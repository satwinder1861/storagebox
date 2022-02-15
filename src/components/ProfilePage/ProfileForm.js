import styled from 'styled-components';
import axios from 'axios';
import './ProfilePage.css';
import React,{useState , useEffect} from 'react';
const ProfileMain = styled.section`
display:block;
width:100%
font-size: 16px;
height:330px; 
text-align: center;
`;
const H2 = styled.h2`
font-size: 26px;
line-height: 1;
color: #454cad;
margin-bottom: 0;
`;
const FormHeadings = styled.div`
margin: 0 0 .5rem 0;
    color: #5f6982;
`;
const Button = styled.span`
display: inline-block;
margin: .5rem .5rem 1rem .5rem;
clear: both;
font-family: inherit;
font-weight: 700;
font-size: 14px;
text-decoration: none;
text-transform: initial;
border: none;
border-radius: .2rem;
outline: none;
padding: 0 1rem;
height: 36px;
line-height: 36px;
color: #fff;
transition: all 0.2s ease-in-out;
box-sizing: border-box;
background: #454cad;
border-color: #454cad;
cursor: pointer;
`;
const Button2= styled.button`
width:100%;
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

const ProfileForm = () =>{
  const [file, setFile] = useState('');
  const [dropzoneActive, setDropzoneActive] = useState(false);
	const [filename, setFilename] = useState('No File Selected');
  
  const [message,setMessage]=useState('');
  const [uploadedPercentage,setUploadedPercentage]=useState(0);
  const changeDragHandler = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
    setFilename(e.dataTransfer.files[0].name);
	};
  const changeSelectHandler = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
		setFilename(e.target.files[0].name);
	};

  
  const onSubmit = async e =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('images',file);
    try{
const res = await axios.post('http://localhost:8080/single',formData,{
  headers:{
    'Content-Type':'multipart/form-data'
  },
  onUploadProgress:ProgressEvent=>{
setUploadedPercentage(parseInt(Math.round((ProgressEvent.loaded * 100)/ProgressEvent.total)))
setTimeout(() => setUploadedPercentage(0),10000);  
}
 
});
console.log(res.data);
// const {fileName,filePath} = res.data;
// setUploadedFile(res.data.filePath);
setMessage('File Uploaded');
    }catch(err){
if (err.response.status === 500){
  setMessage('There is a problem with the server');
  }else{
    setMessage(err.response.data.msg);
  }
    }

  }

  
    return(

<ProfileMain>
<H2>Upload Files and Images</H2>

<form id="file-upload-form" class="uploader" onSubmit={onSubmit}>
  <input id="file-upload" type="file" name="fileUpload" accept="image/*" onChange={changeSelectHandler} multiple/>
  <label for="file-upload" id="file-drag" 
  onDragOver={e => {setDropzoneActive(true);e.preventDefault();}}
  onDragLeave={e => {setDropzoneActive(false);e.preventDefault();}}
  onDrop={changeDragHandler}
  >
    <div id="start">
      <i class="fa fa-download" aria-hidden="true"></i>
      <FormHeadings>Select a file or drag here</FormHeadings>
      <FormHeadings id="notimage" class="hidden">{filename}</FormHeadings>
      <Button id="file-upload-btn" class="btn">Select a file</Button>
      
    </div>
    <div id="response" class="hidden">
      <div id="messages">{message}</div>
      <div>{uploadedPercentage}%</div>
      <progress class="progress" id="file-progress" value={uploadedPercentage}>
      </progress>
      <Button2 onClick={onSubmit}>Submit</Button2>
    </div>
    
  </label>
  
</form>
</ProfileMain>
    )
};
export default ProfileForm;