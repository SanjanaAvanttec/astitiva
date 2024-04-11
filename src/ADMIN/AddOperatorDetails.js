import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import './Admin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from "react";



function AddOperatorDetails() {


    // const [email, setEmail] = useState("");

    // const [loginpassword, setPassword] = useState("");

    // const [usertype, setUsertype] = useState("");

    const [firstname, setFname] = useState("");

    const [lastname, setLname] = useState("");

    const [dob, setDOB] = useState("");

    const [mobnum, setMnum] = useState("");

    const [operatoremail, setopeEmail] = useState("");

    const [doj, setDOJ] = useState("");

    const navigate = useNavigate();

    const postOperatorData = () => {
        axios.post(`http://localhost:4000/Addoperatordetails`,
            {
                firstname,
                lastname,
                dob,
                mobnum,
                operatoremail,
                doj,
            }).then(() => {
                alert("Operator Details Added Succesfully")
                window.location.reload();
            })
    }


    const onChangeHandlerConfrim = (fieldName, value) => {
           
                
        if (fieldName === "fname") {
            setFname(value);
            
         }else if (fieldName === "lname") {
            setLname(value);
         }else if (fieldName === "mobnum") {
            setMnum(value);
        }else if (fieldName === "oprmail") {
            setopeEmail(value);
        }else if (fieldName === "dob") {
        setDOB(value);
        }else if (fieldName === "doj") {    
            setDOJ(value);
        }
    }

    const [isValid, setValid] = useState(false);


    const validate = () => {
        return firstname.length > 3 && lastname.length > 2 && mobnum.length >9 &&operatoremail.length >7 && dob.length >0 && doj.length>0
      
    };

    useEffect(() => {
        const isValid = validate();
        setValid(isValid);
    }, [firstname, lastname,mobnum, operatoremail, dob, doj]);
    



    return (
        <>
        <div id='AddOperatorDetails' className='mt-5 ms-5'>
        
        <div className='text-center mt-5 '  >

            <b className='display-1' id='texthighlight' style={{color:'#8DCAC6'}} >
            OPERATOR DETAILS
            </b>
        </div>
       
        <div className=' d-flex justify-content-center ' >

                <Box
                sx={{
                    height: 400,
                    width:500,
                        maxHeight: { xs: 900, md: 867 },
                        maxWidth: { xs: 350, md: 550 },
                   
                        
                    }}
                
            >
                

               

                <form>
          <div className='row'>
                    <div className='col-sm-6'>

                    <TextField
                    id="input-with-icon-textfield"
                    label="First Name"
                    variant="standard"
                    className='ms-5 '
                    type='text'
                    value={firstname}
                    onChange={(e) => { onChangeHandlerConfrim("fname", e.target.value) }}
                        />

                    </div>

                    <div className='col-sm-6'>
                    <TextField
                    id="input-with-icon-textfield"
                    label="Last Name"
                    variant="standard"
                    className='ms-5 '
                    type='text'
                    value={lastname}
                    onChange={(e) => { onChangeHandlerConfrim("lname", e.target.value) }}
                        />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-sm-6'>

                    <TextField
                id="input-with-icon-textfield"
                label="Mobile Number"
                variant="standard"
                className='ms-5 mt-3'
                    type='number'
                    value={mobnum}
                    // onChange={(e) => { onChangeHandlerConfrim("mobnum", e.target.value) }}
                    onChange={
                        (e) => { onChangeHandlerConfrim("mobnum", e.target.value);
                             if (e.target.value.length >10 || e.target.value.length === 11) {
                                alert("Verify Your Mobile Number")
                                setMnum("")}}
                    }
                        />

                    </div>

                    <div className='col-sm-6'>
                    <TextField
                            id="input-with-icon-textfield"
                            label="E-Mail"
                            variant="standard"
                            className='ms-5 mt-3'
                            type='email'
                            required
                            value={operatoremail}
                            onChange={(e) => { onChangeHandlerConfrim("oprmail", e.target.value) }}
                        />

                    </div>

                </div>

                

                <div className='row'>
                    <div className='col-sm-6'>
                    <InputLabel  className='ms-5 mt-5'
                >Date Of Birth</InputLabel> 
                    <TextField 
                    className='ms-5 mt-3'
                    onChange={(e) => { onChangeHandlerConfrim("dob", e.target.value) }}
                                 
                    type="date" 
                    value={dob}
                    variant="standard"/>
                    </div>

                    <div className='col-sm-6'>

                    <InputLabel  className='ms-5 mt-5'
                >Date Of Joining </InputLabel> 
                    <TextField 
                    className='ms-5 mt-3'
                    value={doj}
                                onChange={(e) => { onChangeHandlerConfrim("doj", e.target.value) }}
                                 
                    type="date" 
                    variant="standard"/>
                   
                       
                    </div>
                  </div>
                <div className='text-center mt-5'>
                        <button onClick={postOperatorData} disabled={!isValid}>CONFRIM</button>
                        {/* <button className='ms-5' type='reset'>
                        RESET
                    </button> */}
                    </div> 
                    </form>  
              
</Box>

        </div>'
        
        
        
                </div>
        </>
    )
}

export default AddOperatorDetails