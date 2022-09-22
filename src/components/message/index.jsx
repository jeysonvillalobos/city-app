import React from 'react';
import './style.css';

const Message = ({title, text, image, id}) => {
    return (
        <div className='Message' id={id}>
            <div className='mesage-description'>
                <h4 className='message-title'>{title}</h4>
                <p className='message-text'>{text}</p>
            </div>
            <div className='message-box-image'>
                <div className='message-image' style={{backgroundImage: `url('${image}')`}}></div>
            </div>
        </div>
    );
};

export default Message;
