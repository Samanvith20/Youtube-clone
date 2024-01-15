import React from 'react';
import Sidebar from './Sidebar'; 
import Buttonlist from './Buttonlist';
import VideoContainer from './VideoContainer';


const Body = () => {
  return (
    <div className='flex'>
     <Sidebar/>
     <Buttonlist/>
     <VideoContainer/>
    </div>
  )
}

export default Body
