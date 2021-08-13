import React from 'react'
import "./css/Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="row">
                <div className="col-10">
           
            <div className="myprofile">
             <img src="img/picc5.png" alt="myprofile"/>
             <p>Selenay</p>
            </div>
         
         <p>Suggestions</p>
            <div className="other">
             <img src="img/picc4.png" alt="myprofile"/>
             <p>Marilyn</p>
            </div>

            <div className="other">
             <img src="img/picc66.png" alt="myprofile"/>
             <p>Willma</p>
            </div>

            <div className="other">
             <img src="img/picc7.png" alt="myprofile"/>
             <p>Benjamin</p>
            </div>
          
          </div>
          <div className="col-2 right">
              <p>Switch</p>
              <p>All</p>
              <p>Follow</p>
              <p>Follow</p>
              <p>Follow</p>
          </div>
          </div>
         
          <div className="about mx-auto mt-3 ">
        <p> About Help Press API Jobs Privacy Terms Locations.</p>
        <p> Hashtags Language English </p>
        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>

      </div>
        </div>
    )
}

export default Sidebar
