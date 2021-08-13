import React from 'react'
import "./css/Profile.css"

function Profile({image, name}) {
    return (
        <div className="profile">
          <img src={image} alt={image}/>
          <p>{name}</p>
        </div>
    )
}

export default Profile
