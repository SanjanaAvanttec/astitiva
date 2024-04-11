import './chemist.css'
// import { useNavigate } from 'react-router-dom';
// import LogoutIcon from '@mui/icons-material/Logout';
import EnquiryProcess from './Enquiry';
import ChemistNavigationBar from './ChemistNavBar';
import InquiryResponse from './InquiryResponse';

function Chemist() {

    // const navigate = useNavigate();


    return (
        <> 
            <div id="ChemistNavbar">

                <ChemistNavigationBar/>

            </div>


                  

            <div id='Enquiry'className='ms-3 mb-5 d-flex justify-content-center '>

               <section id='Enquiry'className='ms-3 mt-5 mb-5 d-flex justify-content-center '>
                        <EnquiryProcess />
                    </section>

            </div>

            <div id='InquiryResponse'className='ms-3 mt-5 mb-5 p-5 justify-content-center  '>

              
                    <section id='InquiryResponse' className='ms-3 mt-5 mb-5  justify-content-center '>
                        <InquiryResponse   className=' mt-5'/>
                    </section>
                   
                
           

            </div>


           
        </>
    )
}

export default Chemist;