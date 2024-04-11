import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, colors } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './Admin.css'
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import axios from 'axios';
// import { useEffect } from 'react';
import MainLogo from '../Images/MainLogo.png'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import MenuIcon from '@mui/icons-material/Menu';
import DashBoard from './DashBoard';



function Admin() {

    const [DropDown, setDropDown] = useState(true)


    const [ChemistCount, setChemistCount] = useState([]);

    const [OperatorCount, setOperatorCount] = useState([]);

    const [email, setEmail] = useState("");

    const [loginpassword, setPassword] = useState("");

    const [usertype, setUsertype] = useState("");

    const [firstname, setFname] = useState("");

    const [lastname, setLname] = useState("");

    const [dob, setDOB] = useState("");

    const [mobnum, setMnum] = useState("");

    const [operatoremail, setopeEmail] = useState("");

    const [doj, setDOJ] = useState("");

    const navigate = useNavigate();

    
        
        axios.get(`http://localhost:4000/astitvasignup`)
            .then((getData) => {
                setChemistCount(getData.data);
            })
   
            axios.get(`http://localhost:4000/userlogin`)
            .then((getData) => {
                setOperatorCount(getData.data);
            })
    
    const postData = () => {
            axios.post(`http://localhost:4000/userlogin`,
                {
                    email,
                    loginpassword,
                    usertype,
                }).then(() => {
                    navigate.push('/read')
                })
        }

        const postOperatorData = () => {
            axios.post(`http://localhost:4000/operatordetails`,
                {
                    firstname,
                    lastname,
                    dob,
                    mobnum,
                    operatoremail,
                    doj,
                }).then(() => {
                    navigate.push('/read')
                })
        }

    
        const onChangeHandler = (fieldName, value) => {
           
                
           if (fieldName === "email") {
               setEmail(value);
               
            }else if (fieldName === "password") {
               setPassword(value);
               
            }else if (fieldName === "usertype") {
                setUsertype(value);
            }
    }
    
    const onChangeHandlerConfrim = (fieldName, value) => {
           
                
        if (fieldName === "fname") {
            setFname(value);
            
         }else if (fieldName === "lname") {
            setLname(value);
            
         }else if (fieldName === "dob") {
             setDOB(value);
         }else if (fieldName === "mobnum") {
            setMnum(value);
        }else if (fieldName === "oprmail") {
            setopeEmail(value);
        }else if (fieldName === "doj") {
            setDOJ(value);
        }
    }
    
    const [operatorData, setOperatorData] = useState([]);
    const [id, setId] = useState("");

    const getoperatorData = () => {
        
        axios.get(`http://localhost:4000/operatordetails/${id}`)
            .then((getData) => {
                setOperatorData(getData.data);
            })
    }

    return (
        <>
            <div id='wholecontent'>
                   
            <div id='Adminnav' className='mt-3' >
                <Box  >
                    <AppBar
                        position="static"
                        sx={{ backgroundColor: 'white', color: '#8DCAC6' }}
                            className='container-fluid p-3 '>
                            
                            <div className='row'>

                            <div className='col-sm-6'>
                            <div >
                                        <button className='btn'>
                                        <img src={MainLogo} alt="Avatar" className="Loginavatar" onClick={() => navigate("/")} />
                                    </button>
                                    <span    className=' mt-2  h3' >
                                        WELCOME ADMIN
                                    </span>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                <div className='row'>
                                <div className='col-sm-3'>
                                <div className='mt-5'>
                                    <Link
                                
                                                variant="body2"
                                                href='#dashboard'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                        >
                                        <b className='h9  fw-bolder'> DASHBOARD</b>
                                        
                                        </Link>
                                    </div>
                                </div>

                                <div className='col-sm-3'>
                                <div className='mt-5'>
                                    <Link
                                            variant="body2"
                                            href='#AddOperatorDetails'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                    >
                                    <b className='h9  fw-bolder'> ADD OPERATOR DETAILS</b>
                                    
                                        </Link>
                                    </div>
                                </div>

                                <div className='col-sm-3'>
                                    
                                <div className='mt-5'>
                                    <Link
                                         
                                            variant="body2"
                                            href='#viewoperatordetails'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                    >
                                    <b className='h9 fw-bolder'> VIEW OPERATOR DETAILS</b>
                                    
                                        </Link>
                                    </div>
                                </div>

                                <div className='col-sm-3'>
                                <div className='mt-5'>
                                    <Link
                                             
                                            variant="body2"
                                            href='#AddOperator'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                    >
                                    <b className='h9  fw-bolder'> ADD OPERATOR</b>
                                    
                                    </Link>
                                    </div>
                                </div>
                                
                            </div>
                               
                                    </div>

                            </div>
                     
                                        
                            

                           
                           
                       

                                   
                           

                                  
                               
                               
                           
                            
                            
                               

                        </AppBar>
                    </Box>
            </div>
            

            {/* <Grid container className='mt-5'>
              
                    <Grid item xs={12} sm={12} md={2}>  
                        <AppBar
                            id='AdminSidenav'
                            className='bg-white text-center'
                        
                        >
                    
                            
                            <Box  >
                                <div
                                    className='ms-2'
                                    position="static"
                                    style={{ backgroundColor: 'white', color: '#8DCAC6' }}
                                    
                                >
                                    
                      
                                    <div >
                                <button className='btn'>
                                <img src={MainLogo} alt="Avatar" className="Loginavatar" onClick={() => navigate("/")} />
                            </button>
                            <span    className=' mt-2  h3' >
                                WELCOME ADMIN
                            </span>
                        </div>
                                    
                                   
                                    <div className='mt-5'>
                                    <Link
                                
                                                variant="body2"
                                                href='#dashboard'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                        >
                                        <b className='h5  fw-bolder'> DASHBOARD</b>
                                        
                                        </Link>
                                    </div>

                                    <div className='mt-5'>
                                    <Link
                                            variant="body2"
                                            href='#AddOperatorDetails'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                    >
                                    <b className='h5  fw-bolder'> ADD OPERATOR DETAILS</b>
                                    
                                        </Link>
                                    </div>
                           
                                    <div className='mt-5'>
                                    <Link
                                         
                                            variant="body2"
                                            href='#viewoperatordetails'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                    >
                                    <b className='h5 fw-bolder'> VIEW OPERATOR DETAILS</b>
                                    
                                        </Link>
                                    </div>

                                    <div className='mt-5'>
                                    <Link
                                             
                                            variant="body2"
                                            href='#AddOperator'
                                            underline="none"
                                            sx={{
                                                color: '#8DCAC6'
                                            }}
                                    >
                                    <b className='h5  fw-bolder'> ADD OPERATOR</b>
                                    
                                    </Link>
                                    </div>
                            </div>
                                </Box>
                        </AppBar>
                    </Grid> */}
                    

                    {/* sidecontent */}

                <DashBoard/>
                        {/* <div id='dashboard' className='ms-5'>
                        <div className='text-center' style={{color:'#8DCAC6'}}>
                            <b className=' mt-2 display-1'> DASHBOARD</b>
                        </div>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className=''>
                                        <Grid item xs={4} className='d-flex justify-content-center'>
                                        <Card sx={{ maxWidth: 345 }} className=''>
                                            <div  className=' d-flex justify-content-center'>
                                            <PersonIcon                               
                                                sx={{
                                                    fontSize: 200,
                                                    color: '#8DCAC6',
                                                    justifyItems:"center"
                                                }} />
                                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     OPERATOR
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                   {OperatorCount.length}
                                </Typography>
                            </CardContent>
                                   
                            </Card>

                    </Grid>

                    <Grid item xs={4} className='d-flex justify-content-center '>
                        <Card sx={{ maxWidth: 345 }}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     CHEMIST
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                {ChemistCount.length}
                                </Typography>
                            </CardContent>
                                   
                            </Card>

                    </Grid>

                    <Grid item xs={4} className='d-flex justify-content-center '>
                        <Card sx={{ maxWidth: 345 }}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     PAYMENT
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                    10
                                </Typography>
                            </CardContent>
                                  
                            </Card>

                    </Grid>
                    

                      
                        
                </Grid>

                
                

            </div> */}
          
            {/* <div id='AddOperatorDetails' className='mt-5 ms-5'>
        
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
                                <label className='ms-5 mt-3'>
                                    Date Of Birth:
                                    <TextField
                            id="input-with-icon-textfield"
                            // label="Date of Birth "
                            
                            variant="standard"
                            className='ms-5 mt-3 '
                            type='date'
                            value={dob}
                            onChange={(e) => { onChangeHandlerConfrim("dob", e.target.value) }}
                                />
                                </label>
                                
                                 <TextField
                                    id="input-with-icon-textfield"
                                    label="E-Mail"
                                    variant="standard"
                                    className='ms-5 mt-3'
                                    type='text'
                                    value={operatoremail}
                                    onChange={(e) => { onChangeHandlerConfrim("oprmail", e.target.value) }}
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
                                <TextField
                        id="input-with-icon-textfield"
                        label="Mobile Number"
                        variant="standard"
                        className='ms-5 mt-3'
                            type='number'
                            value={mobnum}
                            onChange={(e) => { onChangeHandlerConfrim("mobnum", e.target.value) }}
                                />
                                <label className='ms-5 mt-3'>
                                    Date of Joining:
                                    <TextField
                                        id="input-with-icon-textfield"
                                        // label="Joining Date"
                                        variant="standard"
                                        className='ms-5 mt-3'
                                        type='date'
                                        value={doj}
                                        onChange={(e) => { onChangeHandlerConfrim("doj", e.target.value) }}
                                    />
                                </label>
                               
                            </div>
                            <div className='text-center mt-5'>
                                <button onClick={postOperatorData}>CONFRIM</button>
                            </div>   
                            
                        </div>
                       
                         
                                             
                        </Box>
                </div>
                
                
                        </div> */}
                        {/* <div id='viewoperatordetails' className='mt-5 ms-5'>
                            <div className='text-center' style={{ color: '#8DCAC6' }}>
                                
                            
                                <b className=' mt-2 display-2'> VIEW OPERATOR DETAILS</b>
                        
                            </div>

                            <div className='mt-5 ms-5'>
                            <input type='number' onChange={e => setId(e.target.value)} />
                            <button
                                                           
                                    onClick={getoperatorData}
                                    className='btn'
                                >
                                        get by id
                                </button>
                           </div>
                                            <TableContainer component={Paper} className='container mt-5'>
                                            <Table
                                                sx={{ minWidth: 650 }}
                                                aria-label="simple table">
                                                            <TableHead>
                                                    <TableRow> 
                                                                <TableCell align="center">ID</TableCell>
                                                                <TableCell align="center">First Name</TableCell>
                                                                <TableCell align="center">Last Name</TableCell>
                                                                <TableCell align="center">Date Of Birth</TableCell>
                                                                <TableCell align="center">Mobil Number</TableCell>
                                                                <TableCell align="center">E-Mail</TableCell>
                                                                <TableCell align="center">Date Of Joining</TableCell>
                                                    
                                                                </TableRow>
                                                            </TableHead>  
                                                    <TableBody>
                                                    {operatorData.map((operatorData) => {
                                                                    
                                                        return (
                                                            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                                
                                                                >
                                                                    {operatorData.id}

                                                                    
                                                                
                                                                                
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                >
                                                                                
                                                                                    
                                                                    {operatorData.first_name}
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                >
                                                                                    
                                                                    {operatorData.last_name}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                >
                                                                                    
                                                                    {operatorData.date_of_birth}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                >
                                                                                    
                                                                    {operatorData.mob_num}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                >
                                                                                    
                                                                    {operatorData.email}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                >
                                                                                    
                                                                    {operatorData.date_of_joining}

                                                                                    
                                                                </TableCell>
                                                            
                                                            </TableRow>
                                
                                                        )
                                                                
                                                                
                                                    })} 
                                                </TableBody>
                                            
                                                        </Table>
                                        </TableContainer>
                                    
                            
            
       
               </div>
             */}

            {/* <div id='AddOperator'  className=' mt-5 ms-5' >
                     
            <div className='text-center' style={{ color: 'honeydew' }}>
                
            
                <b className=' mt-2 display-2'> UPDATE OPERATOR DETAILS</b>
        
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
                
                                <label className='mt-5 ms-3'>
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
                </select><br/>
                    <div id='sendbtn' className='mt-5 d-flex justify-content-center '>
                    <button
                    onClick={postData}
                    className='mt-5 d-flex justify-content-center '
                >
                    SEND DETAILS
                </button>
                </div>
            </Box>
                            </div>

                
               
              
                </div> */}
                        
            </div>
            
            
            
            
                
                 

        </>
    )
}

export default Admin;