import { Box} from '@mui/material';
import './Operator.css'
import AddChemist from './AddChemist';
import ChemistEnquiry from './ChemistEnquiry';
import OperatorNavigationBar from './OperatorNavBar';
import ApprovedData from './ApprovedData';
import Approve from './Approve';
import OrderConformationstatus from './OrderConformation';



function Operator() {



    return(
        <>
            
           
            

            <div id='Operatornav'>
            <OperatorNavigationBar />

            </div>
     
            
           

                <Box  className='setApproveshadow container' >
                    <Box  sx={{ marginTop:10 }}>



                    <div id='ViewChemistDetails' className='mt-5 mb-5 p-5 container justify-content-center' >
                    <div id='ViewChemistDetails'className=' mt-5 mb-5 p-1 container justify-content-center '>
                       <Approve id='Approve'/>
            </div>
              
                
             

                </div>

                    </Box>
                

                </Box>

            

               

                <div id='ApprovedData' className=' setApproveshadow mt-5 mb-5 p-5 container justify-content-center' style={{backgroundColor:'#8DCAC6'}}>

                <div id='ApprovedData'className=' mt-5 mb-5 container  justify-content-center '>
                        <ApprovedData  />
                </div>
                
               

               </div>

                
             
                
                
            
            
            <div id='AddChemistDetails' className=' mt-5 mb-5 p-5 container justify-content-center'>
            <div id='UserList'className=' mt-5 mb-5 p-1 container justify-content-center '>
                  <AddChemist />
            </div>
            
            </div>

            <div id='ChemistEnquiry' className='text-center mt-5 mb-5 p-5  container justify-content-center setApproveshadow'>

            <div id='ChemistEnquiry'className=' mt-5 mb-5 container p-1 justify-content-center '>
            <h1 className='display-1'>
                    ENQUIRY
                </h1>
                <ChemistEnquiry/>
            </div>
                
            </div>

         <div id='OrderConformationstatus'className='text-center mt-5 mb-5 p-5 container justify-content-center setApproveshadow' >
         <div id='OrderConformationstatus'className=' mt-5 mb-5 container p-4 justify-content-center '>
                       <OrderConformationstatus/>
            </div>
            

         </div>
            

        </>
    )
}
export default Operator;