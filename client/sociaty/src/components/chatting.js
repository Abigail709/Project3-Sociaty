import React, { useState } from 'react'

function Chatting({socket, username, room}) {

    const [currentMsg, setCurrentMsg] =useState('');

    const sendMessage = async () => {
        if (CurrentMsg !=="") {
            const messageData = {
                room: room,
                user: username,
                message: currentMsg
                time: new Date(Date.now()).getHours +';' + new Date(Date.now()).getMinutes(),

            };
        }
    };

  return (
      <>
    <div>chat with friends</div>
    <div className='chat-body'>
       
    </div>
    <div className='footer' >
    <input type="text" placeholder='Hey....'></input>
        <button>send</button>
    </div>
    </>
  )
}

export default Chatting;