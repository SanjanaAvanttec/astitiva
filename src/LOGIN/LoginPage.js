import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import "./Login.css"
import Grid from '@mui/material/Grid';
import LoginSideImg from "../Images/LoginSideImg1.png"
import TextField from '@mui/material/TextField';
import { IoIosMailOpen } from 'react-icons/io'
import {BsShieldLockFill  } from 'react-icons/bs'
import Button from '@mui/material/Button';
import { CgLogIn } from 'react-icons/cg'
import MainLogo from '../Images/MainLogo.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';


//  dark mode start //

// const setLoginDark = () => {

//     localStorage.setItem("theme", "dark");
  

//     document.documentElement.setAttribute("data-theme", "dark");
//   };

//   const setLoginLight = () => {
//     localStorage.setItem("theme", "light");
//     document.documentElement.setAttribute("data-theme", "light");
// };
  
//   const storedTheme = localStorage.getItem("theme");
  
//   const prefersDark =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches;
  
//   const defaultDark =
//     storedTheme === "dark" || (storedTheme === null && prefersDark);
  
//   if (defaultDark) {
//     setLoginDark();
//   }
  

//   const toggleLoginTheme = (e) => {
//     if (e.target.checked) {
//       setLoginDark();
//     } else {
//       setLoginLight();
//     }
//   };
 //  darl mode end // 


function LoginPage() {

    // let History = useHistory();

    const navigate = useNavigate();

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [APIData, setAPIData] = useState([]);


    const [isValid, setValid] = useState(false);

    const validate = () => {
        return email.length > 0 && password.length > 2 
    };

    useEffect(() => {
        const isValid = validate();
        setValid(isValid);
    }, [email, password]);
    


    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "email") {
            setEmail(value);
        }
        else if (fieldName === "password") {
            setPassword(value);
        }
        
    }
        axios.get(`http://localhost:4000/userlogin`)
            .then((getData) => {
                setAPIData(getData.data);
            })
              
            
 
    
    const handleSubmit = (e) => {
        e.preventDefault()  

   
        const account = APIData.map((DataItem) => DataItem.email);

        const indexEmail = account.indexOf(email)
    
        // console.log(accountNAME[indexEmail])
        if (indexEmail < 0) {
            alert("invalid records")
        }

        else {


             const passwordValue = (APIData[indexEmail].loginpassword)

            const tableUserType = (APIData[indexEmail].usertype)

            // alert(accountNAME[indexEmail])
            if (account.includes(email) && (passwordValue === password))                
            {

                if (tableUserType === "Chemist") {
                    navigate("/chemist");
                    console.log("He is a chemist")
                }
                else if (tableUserType === "Operator") {
                    navigate("/operator");
                    console.log("He is a Operator")
                }
                else {
                    console.log("He is an Admin")
                    navigate("/admin");
                }
            }

            else {
                console.log("fail")
                alert("Invalid credentials")
            }
            
        }
    };


// const postData = () => {
        //     axios.post(`http://localhost:4000/userlogin`,
        //         {
        //             email,
        //             password,
        //             usertype,
        //         }).then(() => {
        //             navigate.push('/read')
        //         })
        // }

     
        

   

        return (
            <>
               

                <div id='Loginnav'>
                <Box>
                    <AppBar position="static" sx={{ backgroundColor: '#8DCAC6 ' }} className='mt-2'>
                        <Typography variant="h2" className='text-center mt-2 SetTextColor' id='setloginslide' >
                            <button className='btn'>
                                <img src={MainLogo} alt="Avatar" class="Loginavatar" onClick={() => navigate("/")} />
                            </button>
                        
                            WELCOME TO ASTITVA LOGIN PAGE
                           
                        </Typography>
                        
                    </AppBar>
                </Box>
                </div>
                

            
                <form
               onSubmit={handleSubmit}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} className='mt-5 ms-2 text-center'>
                    
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    fontSize: 50,
                                    marginTop: 10
                            
                                }}
                            >
                                <IoIosMailOpen className='setIconColor' />
                                <TextField
                                    id="input-with-sx"
                                    label="E-Mail ID"
                                    variant="standard"
                                    sx={{
                                        width: 500,
                                    }}
                                    className='ms-3'
                                    required
                                    type='email'
                                    value={email}
                                    onChange={(e) => { onChangeHandler("email", e.target.value) }}
                                />
                            </Box>

                            <Box
                        
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    fontSize: 50,
                                    marginTop: 15
                                }}
                            >
                                <BsShieldLockFill className='setIconColor' />
                                <TextField
                                    id="input-with-sx"
                                    label="PassWord"
                                    type="password"
                                    variant="standard"
                                    sx={{
                                        width: 500,
                                    }}
                                    required
                                    className='ms-3'
                                    value={password}
                                    onChange={(e) => { onChangeHandler("password", e.target.value) }}
                                />
                            </Box>
                        </Grid>
                           

               


                        <Grid item xs={5} className='text-end'>
                            <img
                                className="imgHW mt-5"
                                id="LoginImgAnimation"
                                src={LoginSideImg}
                                alt="LoginSideImg" />
                        </Grid>
                    </Grid>
                   

                    <Button
                       
                        variant="outlined"
                        className='mt-5 ms-5 py-4 text-center buttonset'
                        id='LoginBtnHov'
                        disabled={!isValid}
                        type='submit'
                        sx={{
                            border: 2,
                            borderBlockStyle: 'solid',
                            backgroundColor: '#8DCAC6',
                            color: 'honeydew',
                                             
                        }}>
                        <h2> <span>


                            Login
        
                            <CgLogIn className='setIconColor' /></span></h2>
                    </Button>
                   
                </form>

                

                
            </>
        )

}

        
export default LoginPage;