import React, {useState, useEffect, useRef} from 'react'
import SignOut from './SignOut'
import { db, auth } from '../firebase-config'
import SendMessage from './SendMessage'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))   
        })
    }, [])
    return (
        <div>
            <SignOut />
            <div classNmae='msg ${uid == auth.}'>
            {messages.map(({ id, text, photoURL, uid}) => (
            <div>
                <div key={id} className ={'msg'}>
                    <img src= {photoURL} alt=""/>
                    <p>{text}</p>
                </div>
            </div>

            ))}
        </div> 
        <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
  )
}

export default Chat