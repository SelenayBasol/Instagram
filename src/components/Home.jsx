import React from 'react'
import Story from './Story'
import Post from './Post'
import Sidebar from './Sidebar'
import "./css/Home.css"

function Home() {
    return (
        <div>
            <div className="container">
      <div className="row ">
        <div className="offset-md-1 col-md-7">
         <Story/>
     <Post
     likes="Trump and 255 others"
     caption="Let's laugh a bit :)"
     pp2="img/picc10.png"
     comments="Hahaha :'D"
     names2="Trump"
     names="Batman"
     image="img//photoo4.jpg"
     pp="img/picc2.png"
     
     />
    <Post
     likes="Frank and 79 others"
     caption="Charlie's Busted Romance"
     pp2="img/picc8.png"
     comments="Wow <3"
     names2="Marilyn"
     names="Charlie"
     image="img/photoo5.jpg"
     pp="img/picc12.png"
     />
     
     <Post
     likes="Bella and 45 others"
     caption="E=mc^2"
     pp2="img/picc6.png"
     comments="Genius :D"
     names2="Frank"
     names="Einstein"
     image="img/photoo1.jpg"
     pp="img/picc1.png"
     />

     <Post
     likes="Amanda and 457 others"
     caption="Say my name"
     pp2="img/bbbb.png"
     comments="Walter! LoL"
     names2="Frank"
     names="Walter"
     image="img/photo5959.png"
     pp="img/picc77.png"
     />
 </div>

 
 <div className="col-md-4">
   <Sidebar/>
 </div>

 </div>




     
    </div>
        </div>
    )
}

export default Home
