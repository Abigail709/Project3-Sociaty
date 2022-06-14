import React, { useEffect, useState } from 'react'

function Chatting({socket, username, room}) {

    const [currentMsg, setCurrentMsg] = useState('');
    const [msgList, setMsgList] = useState([]);

    const sendMessage = async () => {
        console.log("in message")
        if (currentMsg !== "") {
            const messageData = {
                room: room,
                user: username,
                message: currentMsg,
                time: new Date(Date.now()).getHours() +':' + new Date(Date.now()).getMinutes(),
                
            };

            await socket.emit("sendMsg", messageData);
            setMsgList((list)=>[...list, messageData]);
            setCurrentMsg('');
           
        }
        
    };

    useEffect(() => {
        socket.on("receiveMsg", (data) => {
           setMsgList((list) => [...list, data]);
        });
    }, [socket]);



  return (
      <>
    <div>chat with friends</div>
    <div className='chat'>
       {msgList.map((messageContent) => {
           return ( 

           <div className='message' id={username === messageContent.user ? "you" : "other"}>
                <div>
                    <div className='msgCon'></div>
                    <p>{messageContent.message}</p>
                    <div className='msgMeta'>
                    <p id="user">{messageContent.user}</p>
                    <p id="time">{messageContent.time}</p>
                    </div>
                </div>

           </div>
           );
       })}
    </div>
    <div className='bar' >
    <input type="text" placeholder='Hey....' onChange={(event) =>{
        setCurrentMsg(event.target.value)
    }} />
    <button onClick={sendMessage}>send</button>
    {/* <button onClick={(event) => {sg(event.target.value);}}>send</button> */}
        
    </div>
    </>
  );
}

export default Chatting;