




import { useState } from "react";

import MessageIcon from '@mui/icons-material/Message';


function ChatBox() {
    
    const [MessageBox, setMessageBox] = useState(false)


    return (
        <>
        
            <div 
                className="mt-5 "
            >
                {MessageBox && (
                    <div className="mt-5" style={{

                        border: "3px solid black",
                        width:"50%"
        
                    }}>
                           <div className='row ms-5 d-flex justify-content-end mt-5 '>
                        <div className="col-sm-12">
                        <label>
                            Id <input type='text'/>
                        </label><br/><br/><br/>
                        
                        </div>

                        </div>
                        
                        <textarea rows="4" cols="50" />

                        <div className="mt-5">
                             <button>
                            
                            Send
                            
                        </button>   
                        </div>

                       
                    </div>


                    
                       
                        
               

            )}

            </div>

            
            <div className=' ms-5 d-flex justify-content-end '>

                <button className='btn' id='setmsgbox' onClick={() => setMessageBox(!MessageBox)}>
                    
                    <MessageIcon id='setbutton'/>
                    
                </button>
                
            </div>
        </>
    )
}

export default ChatBox;