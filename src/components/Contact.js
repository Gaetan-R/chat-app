import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        
<div className="Contact">
    <img className="avatar" src={props.avatar} alt="random"></img>
        <div>
            <h3 className="name">{props.name}</h3>
            <div className="status">
                <div className={props.online ? 'status-online' : 'status-offline'}></div>
                <status-text className="status-text">{props.online ? "online" : " offline"}</status-text>
            </div>
        </div>
    </div>

    );
}

Contact.protoTypes ={
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired,
}
export default Contact;