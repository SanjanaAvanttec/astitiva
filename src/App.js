import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'
import ASTITVALOGO from './Images/ASTITVALOGO.png'
import { IoMdLogIn } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import Font from 'react-font'
import Landingimg from './Images/Landingimg.png'
import Grid from '@mui/material/Grid';
import { useState} from 'react';
import {VscSignIn} from 'react-icons/vsc'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {MdMarkEmailRead} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Calendar from './COMPONENT/Calander';

// import DatePicker from "react-horizontal-datepicker";
// import DatePicker from './COMPONENT/DatePicker';
import DatePicker from './COMPONENT/Datepicker';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


function App() {

    // const [selectedDate, setSelectedDate] = useState(null);
   

    const navigate = useNavigate();

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (DataOptions) => DataOptions.name,
        // stringify: (option) => (option.name ? option.name.toLowerCase() : ''),
      });

    //   interface FilmOptionType {
    //     title: string;
    //     year: number;
    //   }
      

    const DataOptions = [
        {
			"name": "Dwayne"
		},
		{
			"name": "Terrilyn"
		},
		{
			"name": "Deidre"
		},
		{
			"name": "Colette"
		},
		{
			"name": "Marin"
		},
		{
			"name": "Jennette"
		},
		{
			"name": "Mi"
		},
		{
			"name": "Francis"
		},
		{
			"name": "Wanetta"
		},
		{
			"name": "Margit"
		},
		{
			"name": "Kum"
		},
		{
			"name": "Ira"
		},
		{
			"name": "Chun"
		},
		{
			"name": "Bertha"
		},
		{
			"name": "Allene"
		},
		{
			"name": "Candi"
		},
		{
			"name": "Shanon"
		},
		{
			"name": "Karine"
		},
		{
			"name": "Kimberli"
		},
		{
			"name": "Geoffrey"
		},
		{
			"name": "Hilario"
		},
		{
			"name": "Merrilee"
		},
		{
			"name": "Kizzy"
		},
		{
			"name": "Odelia"
		},
		{
			"name": "Isreal"
		},
		{
			"name": "Addie"
		},
		{
			"name": "Shaina"
		},
		{
			"name": "Sheldon"
		},
		{
			"name": "Latonya"
		},
		{
			"name": "Cami"
		},
		{
			"name": "Willetta"
		},
		{
			"name": "Daniella"
		},
		{
			"name": "Ollie"
		},
		{
			"name": "Jeana"
		},
		{
			"name": "Hortensia"
		},
		{
			"name": "Emiko"
		},
		{
			"name": "Simon"
		},
		{
			"name": "Elinor"
		},
		{
			"name": "Lorelei"
		},
		{
			"name": "Sharron"
		},
		{
			"name": "Mana"
		},
		{
			"name": "Emery"
		},
		{
			"name": "Winford"
		},
		{
			"name": "Katharina"
		},
		{
			"name": "Shayna"
		},
		{
			"name": "Carla"
		},
		{
			"name": "Isaura"
		},
		{
			"name": "Lauryn"
		}
       
    ]


       
        const [animate, setAnimate] = useState(false);

        const handleClick = () => {
          setAnimate(true);
        };
      
        const handleAnimationEnd = () => {
          setAnimate(false);
        };

        // const styles = StyleSheet.create({
        //     container: {
        //       flex: 1,
        //       backgroundColor: '#fff',
        //       alignItems: 'center',
        //       justifyContent: 'center',
        //     },
        //   });

        //   const selectedDay = (val) =>{
        //     console.log(val)
        // };
        
    return (
        <>


        
            <div class="area" >
                    <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                    </ul>
           </div >

            
           
            <div className='context'>


            

           
            
                
            
                
                <div id='Landingnav'>
               

                <Box  >
                        <AppBar   position="static" sx={{backgroundColor: '#8DCAC6 '}} className='container-fluid '>
                            <Typography variant="h2"  className='text-center mt-2 SetTextColor' >
                                    WELCOME TO ASTITVA
                            </Typography>
                                
                                <span  className='text-end' >
                               <b className='h3'>
                               <a href='#AboutUs' id='SetAbout' onClick={handleClick}  value='click'>
                                   ABOUT US 
                                    </a>
                                </b> 
                                    <a href='#ContactUs' className='text-end h3 ms-5 ContactUs'>
                                    CONTACT US
                                </a>
                                </span>
                        </AppBar>
                    </Box>
        </div>

                <div className='content'> 
                    
             
                
            <div id='MainContent'>

                
                   
            <Box 
                component="img"
                sx={{
                    height: 333,
                    width: 550,
                    maxHeight: { xs: 233, md: 267 },
                    maxWidth: { xs: 350, md: 550 },
                    }}
                alt="The house from the offer."
                src={ASTITVALOGO}
                className='mt-5 ms-5'
        />           
               <Button
                
                className='mt-5 ms-5'
                id='SetLoginBtnHov'
                sx={{
                    border: 2,
                    borderBlockStyle: 'solid',
                    borderColor: 'honeydew',
                    color: 'honeydew'

                }}
                onClick={() => navigate("/login")}
            >
                
                <b
                    className='h2'>
                    LOGIN
                    <IoMdLogIn className='ms-3 setIconColor'/>
                </b>  

            </Button>
                
            
           

            <div className='mt-5 text-end me-5'>
            <Button
                variant="outlined"
                    className=''
                    id='SetLoginBtnHov'
                    onClick={() => navigate("/sign-up")}
                    sx={{
                        border: 2,
                        borderBlockStyle: 'solid',
                        borderColor: 'honeydew',
                        color: 'honeydew'
                     
                    }}>
            <h2>New Chemist Sign Up <VscSignIn className=' setIconColor'/></h2> 
            </Button>
               </div>

               {/* <div style={{marginLeft:"10rem"}}>
                <Autocomplete  
                    id="filter-demo"
                    options={DataOptions}
                    getOptionLabel={(option) => option.name}
                    filterOptions={filterOptions}
                    sx={{ width: 300, backgroundColor:"honeydew" }}
                    renderInput={(params) => <TextField {...params} label="Custom filter" />}
                    />
                </div> */}
                </div>
            <div id='AboutUs' className='' >
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
                            <Grid
                                item
                                xs={0}  md ={5} lg={5}
                                className='text-center'
                                columnSpacing={{ xs: 0, sm: 0, md: 3 }}
                            >
                                
                              
                                <Box 
                                    
                                    component="img"
                                    alt="The house from the offer"
                                    src={Landingimg}
                                    id="img"
                                    className={animate ? "image animate" : "image"}
                                    onAnimationEnd={handleAnimationEnd}
                                    sx={{
                                        maxHeight: { xs: 0, md: 367, lg:553 },
                                        maxWidth: { xs: 0, md: 350, lg:550 },
                                        }}
                                           
                                />   


                              
                                
                            </Grid>
                        <Grid item xs={12}  md ={7} lg={7} sx={{
                                        maxHeight: { xs: 643, md: 567, lg:553 },
                                        maxWidth: { xs: 653, md: 550, lg:550 },
                                        }}
                                            className='text-center d-flex -content-center' columnSpacing={{ xs: 12, sm: 12, md: 3 }}>
                            
                            <Box 
                          className='mt-1'
                            >
                                <Font family='Ultra'>
                            <p className='h1'>
                            WELCOME 
                            </p>
                            <p className='h1 text-center'>
                            TO 
                            </p>
                            <p className='h1 text-center'>
                            ASTITVA 
                        </p>
                        </Font>
                        <div  id="justify">
                            <p className=' h4' align="center">
                        It’s our goal to create a comfortable, safe environment, where we’ll work to achieve the goal together.

                           ASTITVA is one of India’s most trusted community, dispensing quality medicines at reasonable prices
                            to over 7 million happy customers – PAN India. At ASTITVA, we help you look after your
                            own health effortlessly as well as take care of loved ones wherever they may reside in India.
                            You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.
                        </p>
                        </div>
                        

                            </Box>   
                            

                        
                   
                    </Grid>
                    
                           
               </Grid>
                
                
                
            </div>
          
            <div id='ContactUs' className='mt-5' onclick="ani()" >
                    {/* <h1 className='display-1'>
                        CONTACT US
                   </h1> */}
                   <div className='row'>
                    <div className='col-sm-4'>
                        <Card sx={{ 
                             maxHeight: { xs: 643, md: 567, lg:553 }, }} 
                            style={{backgroundColor:'honeydew', 
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} >
                            <CardContent className='text-center'>
                            <Button size="small"><MdMarkEmailRead className='display-2' style={{color:'#1B4262'}}/></Button> 
                            <h6 className='mt-1' style={{color:'#8DCAC6'}}>EMAIL US</h6>
                            <h5 className='mt-3 btn' style={{color:'#1B4262'}}>astitva@gmail.com</h5>
                            </CardContent>
                            
                         </Card>

                    </div>
                    <div className='col-sm-4'>
                        <Card sx={{ maxWidth: { xs: 653, md: 550, lg:550 }, }} style={{backgroundColor:'honeydew', boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                            <CardContent className='text-center'>
                            <Button size="small"><BsTelephoneFill className='display-3' style={{color:'#1B4262'}}/></Button> 
                            <h6 className='mt-2' style={{color:'#8DCAC6'}}>CALL US</h6>
                            <h5 className='mt-3 btn' style={{color:'#1B4262'}}>91+ 2083422881</h5>
                            </CardContent>
                            
                         </Card>
                    </div>
                    {/* <div className='col-sm-3'>
                        <Card sx={{  maxHeight: { xs: 643, md: 567, lg:553 }, }} style={{backgroundColor:'honeydew', boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                            <CardContent className='text-center'>
                            <Button size="small"><RiUserFollowFill className='display-3' style={{color:'#1B4262'}}/></Button> 
                            <h3 className='mt-2' style={{color:'#8DCAC6'}}>FOLLOW US</h3>
                                
                                <div className='mt-3'>
                                    <span className='btn'> <b className='h2 ' style={{color:'#1B4262'}}><BsFacebook/></b> </span>
                                    <span className='btn'> <b className='h2 ms-1' style={{color:'#1B4262'}}> <AiFillTwitterCircle/></b></span>
                                    <span className='btn'><b className='h2 ms-1' style={{color:'#1B4262'}}> <SiGoogle/></b> </span>
                                    <span className='btn'><b className='h2 ms-1' style={{color:'#1B4262'}}> <AiFillInstagram/></b> </span>
                                </div>
                                
                          </CardContent>
                            
                         </Card>
                    </div> */}
                    <div className='col-sm-4 container' >
                         <Card sx={{ maxWidth: { xs: 653, md: 660, lg:850 } }}  style={{backgroundColor:'honeydew', boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                            <CardContent className='text-center'>
                            <Button size="small"><HiLocationMarker className='display-3' style={{color:'#1B4262'}}/></Button> 
                            <h6 className='' style={{color:'#8DCAC6'}}>VISIT OUR OFFICE</h6>
                            <div className='mt-2 container'>
                                <h6 className='container ' style={{color:'#1B4262'}}>
                                    40,4th Cross<br/> street,Bangalore,<br/>Karnataka,560027
                                </h6>
                           
                            </div>
                            </CardContent>
                            
                         </Card>
                    </div>
                   </div>

                  

            </div>

                </div>


                {/* <div id='Calander'>

                    <div  style={{backgroundColor:"white"}}>
                    <DatePicker getSelectedDay={selectedDay} 
                    endDate={100}
                    selectDate={new Date("2020-04-30")}
                    labelFormat={"MMMM"}
                    color={"#374e8c"} 
                            
                    />
                    </div>

                    <div style={{backgroundColor:"plum"}}>
                    <View style={styles.container}>
                    <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
                    <StatusBar style="auto" />
                    </View>

                    </div>

                    </div> */}
            
            </div>

            
       
        </>
)

}

export default App;