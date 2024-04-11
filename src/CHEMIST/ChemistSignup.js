import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import './ChemistSignup.css'
import MainLogo from '../Images/MainLogo.png'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { MdLocalPharmacy } from 'react-icons/md'
import { BsCircleHalf } from 'react-icons/bs'
import { RxHalf2 } from 'react-icons/rx'
import { BsFillDoorOpenFill } from 'react-icons/bs'
import { GiCrossroad } from 'react-icons/gi'
import { GrMapLocation } from 'react-icons/gr'
import { GiModernCity } from 'react-icons/gi'
import { BsPinMapFill } from 'react-icons/bs'
import { MdAreaChart } from 'react-icons/md'
import { FaMobileAlt } from 'react-icons/fa'
import {LuMailQuestion} from 'react-icons/lu'
import { FaIdCard } from 'react-icons/fa'
import { MdPhoto } from 'react-icons/md'
import {MdOutlinePhotoCameraFront} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import ChemistSideImg from '../Images/ChemistSideImage.png'
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from 'axios';
import { cities } from './Cities';
import { states } from './State';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function ChemistSignUpPage() {

    const navigate = useNavigate();

    const [pharmacyname, setpharmacyname] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [doornum, setdoornum] = useState("");
    const [street, setstreet] = useState("");
    const [area, setarea] = useState("");
    const [city, setcity] = useState("");
    const [pincode, setpincode] = useState("");
    const [states_chemist, setstate] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [email, setemail] = useState("");
    const [druglicencenum, setdruglicencenum] = useState("");
    const [chemistphoto, setchemistphoto] = useState("");
    const [chemistlicencephoto, setchemistlicencephoto] = useState("");
    const [isValid, setValid] = useState(false);   
    // const [isError, setIsError] = useState(false);
  
  
    const [data, setData] = useState();

 

    axios.get(`http://localhost:4000/astitvasignup`)
    .then((getData) => {
     setData(getData.data);
     
                       })
  
const handleEmailValidation = (e) => {
    
      e.preventDefault()

     const account_allEmails = data.map((records)=> records.email);

         const indexof_inpEmail = account_allEmails.indexOf(email);
        
   
       if(indexof_inpEmail>0)
       {
        alert("Already Existing Email")
        setemail("")
        
       }


 };

//  const mobileCheck = ()  =>{
//      if( !(mobilenumber.match('[0-9]{10}')) ){
//       alert('Please provide valid phone number');
//  }else{
     
//  }
//  }



    const postData = () => {
        axios.post(`http://localhost:4000/astitvasignup`, 
       
            {
             pharmacyname,
                firstname,
                lastname,
                doornum,
                street,
                area,
                city,
                pincode,
                states_chemist,
                mobilenumber,
                email,
                druglicencenum,
                chemistphoto,
                chemistlicencephoto,

            }).then(() => {
                alert("Thankyou for The Signup as soon as you will get your credintails in your personal Mail Id")
                window.location.reload();
        })
    }


    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "pharmacyname") {
            setpharmacyname(value);
        }
        else if (fieldName === "firstname") {
            setfirstname(value);
        }
        else if (fieldName === "lastname") {
            setlastname(value);
        }
        else if (fieldName === "doornum") {
            setdoornum(value);
        }else if (fieldName === "street") {
            setstreet(value);
        }else if (fieldName === "area") {
            setarea(value);
        }else if (fieldName === "city") {
            setcity(value);
        }else if (fieldName === "pincode") {
            setpincode(value);
        }else if (fieldName === "state") {
            setstate(value);
        }else if (fieldName === "mobilenumber") {
             setmobilenumber(value);
        }else if (fieldName === "email") {
            setemail(value);
        }else if (fieldName === "druglicencenum") {
            setdruglicencenum(value);
        }else if (fieldName === "chemistphoto") {
            setchemistphoto(value);
        }else if (fieldName === "chemistlicencephoto") {
            setchemistlicencephoto(value);
        }
    }
   
   


    const validate = () => {
        return pharmacyname.length > 4 && firstname.length > 3 &&  doornum.length > 0 && street.length > 3 && area.length > 3 && chemistphoto.length > 1&&
        states_chemist.length > 1&& pincode.length > 4 && mobilenumber.length > 9 && email.length > 5  && druglicencenum.length > 4 &&
         chemistphoto.length > 1 && chemistlicencephoto.length > 1;
    };
    
      useEffect(() => {
        const isValid = validate();
        setValid(isValid);
      }, [pharmacyname, firstname,
           doornum, street, area,
          city, states_chemist, pincode, mobilenumber,
          email, druglicencenum,
          chemistphoto, chemistlicencephoto
      ]);
    
  


     


    return (
        <>
            <div id='signUpnav'>
            <Box>
                            <AppBar position="static" sx={{backgroundColor: '#8DCAC6 '}} className='mt-2'>
                                <Typography variant="h2" className='text-center mt-2 SetTextColor' id='setchemistslide' >
                                
                                    <button className='btn'>
                                        <img src={MainLogo} alt="Avatar" class="Chemistavatar" onClick={() => navigate("/")} />
                                    </button>  
                                    WELCOME TO ASTITVA SIGN-UP PAGE
                                </Typography>
                                {/* <div className="toggle-theme-wrapper d-flex justify-content-end">
                                    <span>☀️</span>
                                    <label className="toggle-theme" htmlFor="checkbox">
                                        <input
                                        type="checkbox"
                                        id="checkbox"
                                        onChange={toggleChemistTheme}
                                        defaultChecked={defaultDark}
                                        />
                                        <div className="slider round"></div>
                                    </label>
                                    <span>🌒</span>
                                    </div> */}
                            </AppBar>
                        </Box>
            </div>
              
                


            <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='mt-5'>
                <Grid xs={4}>

                <Box 
                                    
                                    component="img"
                                    alt="The house from the offer"
                                    src={ChemistSideImg}
                                    className='mt-5 ms-5'
                                    id="ChemistImgAnimation"
                                    sx={{
                                        maxHeight: { xs: 0, md: 367, lg:553 },
                                        maxWidth: { xs: 0, md: 350, lg:550 },
                                        }}
                                           
                                />   
               
                 
                        
                    </Grid>
                
                <Grid xs={7}  className='setShadow'>

                    
                <form>


                <div className='row mt-3'>

                <div className='col-sm-4 ' >
                <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >  
                <MdLocalPharmacy className='setIconColor' /> 

                        <TextField
                                id="standard-basic"
                                    label="Pharmacy Name"
                                    multiline
                                    type='text'
                                    variant="standard"
                                    className='ms-1 mt-3'
                                    onChange={(e) => { onChangeHandler("pharmacyname", e.target.value) }}
                        />
                
                </Box>

                

                </div>

                    <div className='col-sm-4'>

                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <BsCircleHalf className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="First Name"
                                        multiline
                                        type='text'
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("firstname", e.target.value) }}            
                                   
                                
                             />
                            </Box>
                    

                    </div>
                 
                    
                    <div className='col-sm-4'>

                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <RxHalf2 className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Last Name"
                            multiline
                                        variant="standard"
                                        type='text'
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("lastname", e.target.value) }}
                                
                             />
                            </Box>
                        
                        
               
                    </div>

                </div>

                <div className='row mt-5'>
                    <div className='col-sm-4'>

                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <BsFillDoorOpenFill className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Door Number"
                            multiline
                            type='text'            
                           variant="standard" 
                                        className='ms-1 mt-3' 
                                        onChange={(e) => { onChangeHandler("doornum", e.target.value) }}
                            
                                    
                                
                             />
                            </Box>

                    </div>

                    <div className='col-sm-4'>

<Box 
 sx={{
        display: 'flex',
        alignItems: 'flex-end',
        fontSize: 30,
    }}
    justifyContent="center"
    
>            
<GiCrossroad className='setIconColor'/>      

<TextField
    id="standard-basic"
        label="Street"
                    multiline
                    type='text'
                    variant="standard" 
                    className='ms-1 mt-3'
                    onChange={(e) => { onChangeHandler("street", e.target.value) }}            
            
         />
        </Box>                       

</div>

                    <div className='col-sm-4'>

                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <GrMapLocation className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Area"
                            type='text'                        
                            multiline
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("area", e.target.value) }}            
                                
                             />
                            </Box>

                    </div>

                   
                </div>

                <div className='row mt-5'>
                    <div className='col-sm-4'>

                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <GiModernCity className='setIconColor'/>      
                  
                                    <InputLabel  className='ms-1 mt-5'>
                                        City
                                    </InputLabel>
                                    <Select
                                        sx={{ marginLeft: '65px', width: '40%' }}
                                        label="State"
                                        variant="standard" 
                                        value={city}
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("city", e.target.value) }}>
                                        {cities.map((city, index) => {
                                        return <MenuItem value={city.name}> 
                                        {city.name}
                                        </MenuItem>
                                            })}
                                        </Select>
                            </Box>

                    </div>

                    <div className='col-sm-4'>
                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <MdAreaChart className='setIconColor'/>      
                   
                                    
                                    <InputLabel  className='ms-1 mt-5'>
                                        State
                                    </InputLabel>
                                    <Select
                                        sx={{ marginLeft: '65px', width: '40%' }}
                                        label="State"
                                        variant="standard" 
                                        value={states_chemist}
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("state", e.target.value) }}>
                                        {states.map((states, index) => {
                                        return <MenuItem value={states.name}> 
                                        {states.name}
                                        </MenuItem>
                                            })}
                                        </Select>
                                  
                            </Box>
                    </div>

                    <div className='col-sm-4'>
                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <BsPinMapFill className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Pin Code"
                                        type="number"
                            variant="standard" 
                                        className='ms-1 mt-3'
                                        onChange={(e) => { onChangeHandler("pincode", e.target.value) }}            
                                
                             />
                            </Box>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-sm-4'>
                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <FaMobileAlt className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Mobile Number"
                            type='number'
                            value={mobilenumber}
                            pattern="[0-9]{10}"
                            title="Ten digits code"
                            variant="standard" 
                            className='ms-1 mt-3'
                            onChange={(e) => { onChangeHandler("mobilenumber", e.target.value);
                             if (e.target.value.length >10 || e.target.value.length === 11) {
                                alert("Verify Your Mobile Number")
                                setmobilenumber("")
                            }
                            
                         }}   
                            // onBlur={mobileCheck}         
                                
                             />
                            </Box>

                    </div>

                    <div className='col-sm-4'>
                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <LuMailQuestion className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Emai ID"
                            multiline
                            onBlur={handleEmailValidation}
                            value={email}
                            type='email'
                                  
                            variant="standard" 
                             className='ms-1 mt-3'  
                             onChange={(e) => { onChangeHandler("email", e.target.value) }}            
                                
                             />
                            </Box>
                        
                    </div>

                    <div className='col-sm-4'>
                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <FaIdCard className='setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            label="Drug Licence Number"
                                        type='text'
                            variant="standard" 
                                        className='ms-1 mt-3' 
                                        onChange={(e) => { onChangeHandler("druglicencenum", e.target.value) }}            
                                
                             />
                            </Box>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-sm-6'>

                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <MdOutlinePhotoCameraFront className=' setIconColor'/>      
                    
                   <TextField
                        id="standard-basic"
                            // label="Cp"
                                    multiple
                                    type='file'
                            variant="standard" 
                                        className='ms-1 mt-5 ' 
                                        onChange={(e) => { onChangeHandler("chemistphoto", e.target.value) }}            
                                
                             />
                            </Box>

                    </div>

                    <div className='col-sm-6'>
                    <Box 
                     sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            fontSize: 30,
                        }}
                        justifyContent="center"
                        
                >            
                    <MdPhoto className='setIconColor'/>      
                    
                               
                   <TextField
                        id="standard-basic"
                            // label="Drug Licence Photo"
                            multiple
                            type="file"
                            variant="standard" 
                            className='ms-1 mt-5'        
                            onChange={(e) => { onChangeHandler("chemistlicencephoto", e.target.value) }}
                             />
                    </Box>
                    </div>

                </div>
                <div className='text-center '>
                <Button 
                                onClick={postData} 
                                // type='submit'
                                disabled={!isValid}
                    className='mt-5 ms-5 py-4 text-center buttonset'
                    sx={{
                        border: 2,
                        borderBlockStyle: 'solid',
                        backgroundColor: '#8DCAC6',
                        color: 'honeydew',
                                             
                    }}>
                
                <h2> <span>Sign Up </span></h2> 
                </Button>

                <Button 
                className='mt-5 ms-5 py-4 text-center buttonset'
                sx={{
                    border: 2,
                    borderBlockStyle: 'solid ',
                    backgroundColor: '#8DCAC6',
                    color: 'honeydew',
                                         
                }}
                 type='reset'
                 >
                    <h2>
                        <span>
                      Reset  
                    </span>
                    </h2>
                    
                    
                    </Button>
               </div>
               </form>
                    </Grid>   
                    
                         
                </Grid>

                
                
           
 
          
                  </>
    )
}
export default ChemistSignUpPage