import React, { useState } from 'react';
import UserItem from '../userItem/UserItem';
import style from './ChatBox.module.css';
import { Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const ChatBox = ({ usersList }) => {
    const [showChat, setShowChat] = useState(false);
    const toggleChat = () => {
        setShowChat(!showChat);
    }
    return (
        <div className={style.chatBox}>
            <div className={style.header} onClick={toggleChat}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <ChatBubbleOutlineIcon style={{ color: '#fff', marginRight:'5px' }} />
                    <span>Chats</span>
                </div>
                <ExpandMoreIcon style={{ color: '#fff' }} />
            </div>
            <div style={{ width: '200px', height: '200px', overflow: 'auto', padding: '10px 10px', display:showChat?'block':'none' }}>
                {usersList.map((user, index) => {
                    return <UserDisplay key={index} {...user} />
                })}
            </div >
        </div>
    );
};

const UserDisplay = ({ profileImg, text, isOnline, callBackHandler }) => {
    return (
        //to use callback handler here
        <div onClick={callBackHandler} style={{ cursor: 'pointer', fontSize: '10px' }}>
            <Grid container>
                <Grid item xs={10}>
                    <UserItem profileImg={profileImg} text={text} />
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <div className={isOnline ? style.online : style.offline}></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ChatBox;