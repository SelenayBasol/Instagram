import React from 'react'
import "./css/Myprofile.css"
import SettingsIcon from '@material-ui/icons/Settings';

function Myprofile() {
    return (
        <div className="me">
            <div className="container">
                <div className="row mt-4 pb-4 border-bottom">
                    <div className="offset-md-2 col-md-3 me-img">
            <img src="img/picc5.png" alt="myprofile" />
           
            </div>
            <div className="col-md-4">
                <div className=" me-name d-flex mt-4">
                <p>Selenay</p>
                <button>Edit profile</button>
                <SettingsIcon className="settings" style={{ fontSize: 30 }} />
                </div>

                <div className=" followers d-flex justify-content-around ">
                    <p><b>0</b> gönderi</p>
                    <p><b>875</b> followers</p>
                    <p><b>870</b> following</p>
                </div>
            </div>
                 </div>

                <div className="tag d-flex justify-content-center text-muted">
                <p>POST</p>
                <p>IGTV</p>
                <p>SAVED</p>
                <p>TAGGED</p>
                </div>

                 <div className="kolaj">
                     <div className="kolaj-img">
                  <img src="img/kolajj.jpg" alt="foto" />
                  </div>


                  <div className="kolaj-write">
                      <h6>Hayatından kareleri çekip paylaşmaya başla.</h6>
                      <p>İlk fotoğrafını veya videonu paylaşmak için uygulamayı yükle.</p>
                       
                       <div className="app-google">
                         <img src="img/app.png" alt="foto" />
                         <img src="img/google.png" alt="foto" />
                       </div>
                  </div>
                  
                </div>
            </div>
            <div className="foot d-flex justify-content-center text-muted ">
                <p>Blog</p>
                <p>Help</p>
                <p>About</p>
                <p>Privacy</p>
                <p>Jobs</p>
                <p>Top Accounts</p>
                <p>Hashtags</p>
                <p>Locations</p>
                <p>API</p> 
                <p>Terms</p>
                </div>
                <div className="d-flex justify-content-center text-muted ">
                <p>© 2021 Instagram from Facebook</p>
                </div>
        </div>
    )
}

export default Myprofile
