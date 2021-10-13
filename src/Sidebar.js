import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import'./Sidebar.css';
function Sidebar() {
         
        const user = useSelector(selectUser);

     const recentItem = (topic) => (
         <div className="sidebar__recentItem">
             <span className="sidebar__hash">#</span>
             <p>{topic}</p>
         </div>
     );

    return (
        <div className="sidebar"> 
        <div className="sidebar__top">
            <img src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg"
             alt=""/>
            <Avatar src={user.photoURL} className="sidebar__avatar" >
               
                </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className="sidebar__statNumber">2,333</p>
            </div>
            <div className="sidebar__stat">
                <p>view on post</p>
                <p className="sidebar__statNumber">2,333</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem ("Reactjs") }
            {recentItem ("Programming") }
            {recentItem ("Software") }
            {recentItem ("Developer") }
            {recentItem ("Nodejs") }
            {recentItem ("Angular") }
            {recentItem ("TypeScript") }
            {recentItem ("Mongodb") }
            {recentItem ("Redux") }
            {recentItem ("OPPS") }
            {recentItem ("Data Structure") }
           
        </div>
         </div>
    )
}

export default Sidebar
