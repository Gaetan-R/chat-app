import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
<div className="Contact">
    <img className="avatar" src={props.avatar} alt="random"></img>
        <div>
            <name className="name">{props.name}</name>
            <div className="status">
                <div className={props.online ? 'status-online' : 'status-offline'}></div>
                <status-text className="status-text">{props.online ? "online" : " offline"}</status-text>
            </div>
        </div>
    </div>

    );
}
export default Contact;