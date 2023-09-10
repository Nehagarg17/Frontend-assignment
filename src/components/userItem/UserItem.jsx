import React from 'react';
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';
import { Typography } from '@mui/material';

const UserItem = ({ profileImg, text, href }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <Avatar alt="UI" src={profileImg} sx={{ width: 24, height: 24 }} />
            {href ? <Link to={`/${href}`} style={{ textDecoration: 'none', fontSize: '12px', color: '#000' }}><DataDisplay text={text} /></Link> : <DataDisplay text={text} />}
        </div>
    );
};

const DataDisplay = ({ text }) => {
    return (
        <Typography variant="div" sx={{ marginLeft: '10px', textDecoration: 'none' }}>
            {text}
        </Typography>
    )
}

export default UserItem;