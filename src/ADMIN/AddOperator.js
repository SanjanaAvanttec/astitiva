import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';


function AddOperator() {

    const [email, setEmail] = useState("");

    const [loginpassword, setPassword] = useState("");

    const [usertype, setUsertype] = useState("");

    const [name, setName] = useState("");
    
    const navigate = useNavigate();


    const postData = () => {
        axios.post(`http://localhost:4000/operatorlogin`,
            {
                email,
                loginpassword,
                usertype,
                name,
            }).then(() => {
                alert("Credintials Added Successfully")
                window.location.reload();
            })
    }


    const onChangeHandler = (fieldName, value) => {
           
                
        if (fieldName === "email") {
            setEmail(value);
            
         }else if (fieldName === "password") {
            setPassword(value);
            
         }else if (fieldName === "usertype") {
             setUsertype(value);
         }else if (fieldName === "name") {
            setName(value);
            
         }
 }

 const [isValid, setValid] = useState(false);

 const validate = () => {
    return email.length > 0 && loginpassword.length > 2 && name.length>3
};

useEffect(() => {
    const isValid = validate();
    setValid(isValid);
}, [email, loginpassword, name]);


 
    return (
        <>
             <div id='AddOperator'  className=' mt-5 ms-5' >
                     
                     <div className='text-center mt-5' style={{ color: 'honeydew' }}>
                         
                     
                         <b className='  display-2'> UPDATE OPERATOR </b>
                 
                    </div>
                                     <div className='d-flex justify-content-center'>
                                     <Box
                             sx={{
                                 maxHeight: { xs: 433, md: 467 },
                                 maxWidth: { xs: 350, md: 550 },
                             }}
                             id='setBox'
                    >
                          <TextField
                                             id="input-with-sx"
                                             label="User Name"
                                             variant="standard"
                                             sx={{
                                                 width: 300,
                                             }}
                                             className='ms-3 mt-5'
                                             required
                                             type='text'
                                             // value={email}
                                             onChange={(e) => { onChangeHandler("name", e.target.value) }}
                        />
                        <br />
         
                                   <TextField
                                             id="input-with-sx"
                                             label="E-Mail ID"
                                             variant="standard"
                                             sx={{
                                                 width: 300,
                                             }}
                                             className='ms-3 mt-5'
                                             required
                                             type='email'
                                             // value={email}
                                             onChange={(e) => { onChangeHandler("email", e.target.value) }}
                         /><br/>
                          <TextField
                                             id="input-with-sx"
                                             label="Password"
                                             variant="standard"
                                             sx={{
                                                 width: 300,
                                             }}
                                             className='ms-3 mt-5'
                                             required
                                             type='password'
                                             value={loginpassword}
                                             onChange={(e) => { onChangeHandler("password", e.target.value) }}
                         /><br/>
                         
                                         {/* <label className='mt-5 ms-3'>
                                             User Type:
                                         </label>   
                                     <select 
                                         className='ms-5'
                                         
                                             onChange={(e) => { onChangeHandler("usertype", e.target.value) }}
                                         >
                                             Type
         
                                             <option className='disabled'>
                                                 Select
                                             </option>
                                             <option
                                                 
                                             >
                                                 Admin
                                             </option>
                                             <option
                                                
                                             >
                                                 Chemist
                                             </option>
                                             <option
                                                 
                                             >
                                                 Operator
                                             </option>
                         </select><br/> */}
                             <div id='sendbtn' className='mt- d-flex justify-content-center '>
                             <button
                             disabled={!isValid}
                             onClick={postData}
                             className='mt-5 d-flex justify-content-center '
                         >
                             ADD
                         </button>
                         </div>
                     </Box>
                                     </div>
         
                         
                        
                       
                         </div>
        </>
    )
}

export default AddOperator