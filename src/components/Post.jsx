import React from 'react'
import "./css/Post.css"
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function Post({image, pp, names, caption,likes,comments,names2,pp2}) {
    return (
    <div className="post">
         <div className="cast-contain">
            <div className="pp my-2">
                <img src={pp} alt=""/>
                <h6> {names}</h6>
            </div>

           <div className="post-img">
              <img src={image} alt="post" />
            </div>

            <div className="row pl-2">
                <div className="col-10">
                <FavoriteBorderOutlinedIcon fontSize="large" className="buttons" />
                <ChatBubbleOutlineIcon fontSize="large" className="buttons" />
                <NearMeOutlinedIcon fontSize="large" className="buttons" />
            </div>
                <div className="col-2 pl-5 ">
                <BookmarkBorderIcon fontSize="large" className="buttons" />
          </div>

                </div>
            </div>

            <div className="post-likes ml-2">
            <img src={pp2} alt="pp" />
            <h6>{likes}</h6>
            </div>
  
            
            <div className="post-caption">
            <h6> {names}</h6>
            <p> {caption}</p>
            </div>

            
            <p className="all text-muted ml-3"> See all 12 comments... </p>
            
            <div className="post-comments ">
            <h6> {names2}</h6>
            <p> {comments}</p>
            </div>
           
        
    </div>
       
        
      
    )
}

export default Post
