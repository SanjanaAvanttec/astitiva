import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, colors } from '@mui/material';
import './Admin.css'
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';

import MainLogo from '../Images/MainLogo.png'
import { useNavigate } from 'react-router-dom';
import DashBoard from './DashBoard';
import AddOperatorDetails from './AddOperatorDetails';
import ViewOperator from './ViewOperator';
import AddOperator from './AddOperator';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminNavigationBar from './AdminNavBar';
import ChemistDetails from './ChemistDetail';
import UserLogin from './UserList';



function Admin() {

    
    const navigate = useNavigate();

    
    axios.get(`http://localhost:4000/getChemistCount`)
    .then((getData) => {
        setChemistCount(getData.data);
    })

    axios.get(`http://localhost:4000/getOperatorCount`)
    .then((getData) => {
        setOperatorCount(getData.data);
    })
    
    axios.get(`http://localhost:4000/userlogin`)
    .then((getData) => {
        setLoginCount(getData.data);
    })



    const [ChemistCount, setChemistCount] = useState([]);

const [OperatorCount, setOperatorCount] = useState([]);

const [LoginCount, setLoginCount] = useState([]);




  

    // const [Dashboard, setDashboard] = useState(true)

    // const [operatotbtn, setoperatotbtn] = useState(true)

    // const [viewoperatorbtn, setviewoperatorbtn] = useState(true)

    const [addoperatotbtn, setaddoperatotbtn] = useState(false)

    const [userLoginData, setuserLoginData] = useState(false)

    return (
        <>
            <div id='Adminnav' className='mt-3' >

                <AdminNavigationBar/>

            </div>


            <div className='mt- '>
                <div id='DASHBOADRD' className=' mt-5 mb-5 container justify-content-center p-5'>
                  
                    <div id='dashboard'  >
                        <div className='text-center' style={{color:'#8DCAC6'}}>
                            <b className='display-1 text-center'> DASHBOARD</b>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 12, md: 12 }} className=' container'
                            sx={{ 
                                marginLeft: { xs: 0, md: 1, lg:20 },
                                 }}
                            >
                            <Grid item xs={3} className='container'>
                               <a href='#UserList'>
                                        <Card sx={{ 
                                            // maxWidth: 345
                                            maxHeight: { xs: 500, md: 367, lg:553 },
                                            maxWidth: { xs: 100, md: 350, lg:550 },
                                             }} className='btn' onClick={() => setuserLoginData(!userLoginData)}>
                                        <div  className=' d-flex justify-content-center'>
                                        <PersonIcon                               
                                            sx={{
                                                fontSize: 200,
                                                color: '#8DCAC6',
                                                justifyItems:"center"
                                            }} />
                                        </div>
                                        
                                        <CardContent>
                                            <Typography 
                                            gutterBottom variant="h6" 
                                            component="div" 
                                            className='text-center'
                                            sx={{ 
                                                fontSize: { xs: 11, md: 15, lg:20 },
                                                 }}
                                            >
                                               USERS
                                            </Typography>
                                            <Typography variant="h5" 
                                            color="text.secondary" 
                                            className='text-center'
                                            sx={{ 
                                                fontSize: { xs: 11, md: 15, lg:20 },
                                                 }}
                                            >
                                            {LoginCount.length}
                                            </Typography>
                                        </CardContent>
                                            
                                        </Card>
                                    </a>
                            </Grid>
                            <Grid item xs={3}>
                               <a href='#VIEWOPERATOR'>
                            <Card sx={{  maxHeight: { xs: 500, md: 367, lg:553 },
                                            maxWidth: { xs: 100, md: 350, lg:550 },}} className='btn' onClick={() => setaddoperatotbtn(!addoperatotbtn)}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'
                                sx={{ 
                                    fontSize: { xs: 11, md: 15, lg:20 },
                                     }}
                                >
                                OPERATOR
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'
                                sx={{ 
                                    fontSize: { xs: 11, md: 15, lg:20 },
                                     }}
                                >
                                {OperatorCount.length}
                                </Typography>
                            </CardContent>
                                   
                            </Card>
                        </a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href='#ChemistDetails'>
                            <Card sx={{  maxHeight: { xs: 500, md: 367, lg:553 },
                                            maxWidth: { xs: 100, md: 350, lg:550 }, }} className='btn' onClick={() => setaddoperatotbtn(!addoperatotbtn)}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" 
                                sx={{ 
                                    fontSize: { xs: 11, md: 15, lg:20 },
                                     }}
                                component="div" className='text-center'>
                                     CHEMIST
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'
                                sx={{ 
                                    fontSize: { xs: 11, md: 15, lg:20 },
                                     }}
                                >
                                {ChemistCount.length}
                                </Typography>
                            </CardContent>
                                   
                            </Card>
                        </a>
                            </Grid>
                         </Grid>
                        </div>

                        

                                

            </div>

            <div id='UserList' className=' mt-5 mb-5 p-5 '>

            <div id='UserList'className=' mt-5 mb-5 p-5 container justify-content-center '>
                       <UserLogin/>
            </div>

               
               
       
            </div> 
            
             <div id='ChemistDetails' className=' mt-5 mb-5  p-5'>

             <div id='ChemistDetails'className=' mt-5 mb-5  p-5 container justify-content-center '>
                       <ChemistDetails/>
            </div>
 </div>
        
                </div>

                <div id='ADDOPERATORDETAILS' className=' mt-5 mb-5  p-5'>

                <div id='ADDOPERATORDETAILS'className=' mt-5 mb-5 p-5 container justify-content-center '>
                       <AddOperatorDetails />
            </div>
                  
                        
        
                 
                </div>

                <div id='VIEWOPERATOR' className=' mt-5 mb-5  p-5'>

                <div id='VIEWOPERATOR'className=' mt-5 mb-5  p-5 container justify-content-center '>
                       <ViewOperator />
            </div>
                 
                        
        
                 
                </div>

                <div id='ADDOPERATOR' className=' mt-5 mb-5 p-5  '>

                <div id='ADDOPERATOR'className=' mt-5 mb-5 p-5 container justify-content-center '>
                       <AddOperator />
            </div>
                  
                        
        
                   
                </div>
            </div>

        </>
    )
}

export default Admin;