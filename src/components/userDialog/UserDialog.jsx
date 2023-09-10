import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar } from '@mui/material';
import UserItem from '../userItem/UserItem';

const UserDialog = ({ profileImg, name, email, othersList, href }) => {
    return (
        <Card sx={{ width: '200px', position: 'absolute', left: '-50%', top: '80%', borderRadius: '10%' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar alt="UI" src={profileImg} />
                {
                    [name, email].map((label, index) => {
                        return (
                            <div key={index} style={{padding:'2px 0'}}>
                                {label}
                            </div>
                        )
                    })
                }                
                {
                    othersList.map((otherUser, index) => {
                        return (
                            <div style={{padding:'2px 0'}}>
                                <UserItem key={index} profileImg={otherUser.profileImg} text={otherUser.text} href={otherUser.href} />
                            </div>
                        )
                    })
                }
                <Link to={`/${href}`}>
                    <Button variant='contained' color="error" size='small' sx={{ borderRadius: '25px' }}>
                        Sign Out
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default UserDialog;