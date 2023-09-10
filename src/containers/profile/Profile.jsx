import React, { useEffect, useState } from 'react';
import AppContext from '../../AppContext';
import { useParams } from 'react-router-dom';
import { getUsersList, getOnlineUsersList } from '../../services/UserService';
import HeadItem from '../../components/headItem/HeadItem';
import style from './Profile.module.css';
import { Grid } from '@mui/material';
import SideNav from '../../components/sideNav/SideNav';
import UserPersona from '../../components/userPersona/UserPersona';
import ChatBox from '../../components/chatBox/ChatBox';
import {Typography} from '@mui/material';

const Profile = () => {
    const { userId } = useParams();
    const navOptions = [{
        text:'Profile',
        href:`${userId}/profile`
    },{
        text:'Posts',
        href:`${userId}/posts`
    },{
        text:'Gallery',
        href:`${userId}/gallery`
    },{
        text:'ToDo',
        href:`${userId}/todo`
    }]
    const { appState } = React.useContext(AppContext);
    const [userData, setUserData] = useState([]);
    const [chatUsersList, setChatUsersList] = useState([]);
    const getUserFromID = (usersList) => {
        const list = usersList?.users || appState?.users;
        return list.filter((user) => {
            return user.id == userId;
        })[0];
    }
    useEffect(async () => {
        let userData = {}
        if (appState?.users?.length) {
            userData = getUserFromID();
        } else {
            const usersList = await getUsersList();
            userData = getUserFromID(usersList);
        }
        setUserData(userData);
    }, []);

    useEffect(async () => {
        const chatUsers = await getOnlineUsersList();
        setChatUsersList(chatUsers);
    },[])

    return (
        <div className={style.container}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <SideNav navOptions={navOptions} />
                </Grid>
                <Grid item xs={9}>
                    <div className={style.rightSection}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <HeadItem itemName={window.location.pathname.split("/")[2].toLocaleUpperCase()} userInfo={userData} />
                            </Grid>
                            <Grid item xs={12}>
                                {window.location.pathname.includes('profile') ? <UserPersona userInfo={userData} /> : <ComingSoon />}    
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <div className="chat">
                <ChatBox usersList={chatUsersList} />
            </div>
        </div>
    );
};

const ComingSoon = () => {
    return (
        <>
            <Typography variant='h4' sx={{ color: '#A8A8A8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Coming Soon
            </Typography>
        </>
    );
};

export default Profile;