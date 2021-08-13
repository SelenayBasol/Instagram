import React from 'react'
import "./css/Message.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateIcon from '@material-ui/icons/Create';
import SendSharpIcon from '@material-ui/icons/SendSharp';


function Message() {
    return (
    <div className="mymessage" >
    <div className="container px-5  my-4 ">
    <div className="row border rounded directmessage ">
      <div className="col-md-4 col-sm-6 border-right">
          
          <div className="dm m-4 border-bottom ">
               <h6>Selenay</h6>
               
               <ExpandMoreIcon style={{ fontSize: 30 }} />                                                                          
               
               <div className="pencil">
                < CreateIcon style={{ fontSize: 25, marginLeft:60, marginBottom:15 }} />
            
               </div>
               

              </div>
               <div className="sender scroll">
                 <div className="mes d-flex">
                 <img src="img/picc10.png" alt="sender"/>
                 <h6>Trump</h6>
                 </div>
                 <div className="mes d-flex">
                 <img src="img/picc8.png" alt="sender"/>
                 <h6>Frank</h6>
                 </div>
                 <div className="mes d-flex">
                 <img src="img/picc2.png" alt="sender"/>
                 <h6>Batman</h6>
                 </div>
                 <div className="mes d-flex">
                 <img src="img/picc6.png" alt="sender"/>
                 <h6>Bella</h6>
                 </div>
                 <div className="mes d-flex">
                 <img src="img/picc4.png" alt="sender"/>
                 <h6>Marilyn</h6>
                 </div>
                 <div className="mes d-flex">
                 <img src="img/picc9.png" alt="sender"/>
                 <h6>John</h6>
                 </div>
                 <div className="mes d-flex">
                 <img src="img/bbbb.png" alt="sender"/>
                 <h6>Amanda</h6>
                 </div>
                 <div className="mes d-flex">
                 <img src="img/picc66.png" alt="sender"/>
                 <h6>Willma</h6>
                 </div>
                
               </div>
             </div>
   

      <div className="talk col-md-8 col-sm-6 my-4 ">
           <div className="send">
         <SendSharpIcon style={{ fontSize: 90 }} />    
           </div> 
           <h6>Mesajların</h6> 
           <p className="text-muted">Bir arkadaşına veya gruba gizli fotoğraflar ve mesajlar gönder.</p>
         
           <button>Mesaj Gönder</button>
       
      </div>
    </div>
  </div>
    



    
    </div>

       
    )
}

export default Message
