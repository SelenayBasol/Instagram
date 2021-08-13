import React from 'react'
import "./css/Header.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FaceIcon from '@material-ui/icons/Face';
import {Link} from "react-router-dom";




function Header() {
    return (
        <nav className="header border-bottom">
            <div className="container pt-3 pb-1"> 
            <div className="row">
                <div className="offset-md-1 col-md-3 col-sm-6 col logo">
                    <img src="img/instagram_logo.png" alt="logo" />
                    </div>
            
            <div className="col-md-4  col search">
                <input placeholder="Search"/>
                </div>
            
            <div className="col-md-3 col-sm-6 col icon">
             <Link to="/"><HomeOutlinedIcon style={{ fontSize: 30 }}/> </Link>
             <Link to="/message"> <MessageOutlinedIcon style={{ fontSize: 30 }} /></Link>
             <Link to="/explore"><ExploreOutlinedIcon style={{ fontSize: 30 }}/></Link>
             <FavoriteBorderOutlinedIcon style={{ fontSize: 30 }}/> 
             <Link to="/profile"> <FaceIcon style={{ fontSize: 30 }} /> </Link>
            </div>
            </div>
            </div>
        </nav>
    )
}

export default Header
