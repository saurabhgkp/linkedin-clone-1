import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
const newsArticle = (heading,subtitle) => (
<div className="Widgets__article">
    <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
    </div>
    <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>
</div>


)


    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("What's your best time of day?","8d ago")}
     {newsArticle("Two new entrants in unicorn club","2d ago • 3,374 readers")}
            {newsArticle("Hey Siri, start my car","22h ago • 7,950 readers")}
            {newsArticle("Contract staff may get ESOPs: Report","2d ago • 788 readers")}
            {newsArticle("What air pollution costs India","21h ago • 172 readers")}
            {newsArticle("The key to workplace harmony","8d ago")}
            {newsArticle("Idea of the Day: Introvert vs extrovert","9d ago")}
        </div>
    )
}

export default Widgets;
