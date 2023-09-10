import React from 'react';
import { Avatar, Typography } from '@mui/material';
import style from './UserPersona.module.css';
import LabelPair from '../labelPair/LabelPair';
import { Grid } from '@mui/material';

const UserPersona = ({ userInfo }) => {
    console.log('userInfo: ', userInfo);
    return (
        <Grid container spacing={1}>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid #D3D3D3', paddingRight: '15px', margin: '35px 0' }}>
                <Avatar alt="UI" src={userInfo.profilepicture} sx={{ width: '150px', height: '150px', boxShadow: '0 0 2px #484848' }} />
                <div className={style.itemSection} style={{ borderBottom: '1px solid #D3D3D3' }}>
                    <Typography variant='div' sx={{ fontSize: '16px' }}>
                        {userInfo.name}
                        <div>
                            <LabelPair label="Username" value={userInfo.username} />
                            <LabelPair label="E-mail" value={userInfo.email} />
                            <LabelPair label="Phone" value={userInfo.phone} />
                            <LabelPair label="Website" value={userInfo.website} />
                        </div>
                    </Typography>
                </div>
                <div className={style.itemSection}>
                    <Typography variant='div' sx={{ fontSize: '16px' }}>
                        <span style={{ color: '#A8A8A8' }}>Company</span>
                        <div>
                            <LabelPair label="Name" value={userInfo?.company?.name} />
                            <LabelPair label="CatchPhrase" value={userInfo?.company?.catchPhrase} />
                            <LabelPair label="BS" value={userInfo?.company?.bs} />
                        </div>
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={8}>
                <div style={{ textAlign: 'left', color: '#A8A8A8' }}>Address:</div>
                <div className={style.itemSection} style={{ flexDirection: 'column' }}>
                    <Typography variant='div' sx={{ fontSize: '16px' }}>
                        <div>
                            <LabelPair label="Street" value={userInfo?.address?.street} />
                            <LabelPair label="Suite" value={userInfo?.address?.suite} />
                            <LabelPair label="City" value={userInfo?.address?.city} />
                            <LabelPair label="Zipcode" value={userInfo?.address?.zipcode} />
                        </div>
                    </Typography>
                    <div className={style.mapContainer}>
                    </div>
                    <div className={style.coordinateContainer}>
                        <div>
                            <LabelPair label="Lat" value='-37.158' />
                        </div>
                        <div style={{marginLeft:'10px'}}>
                            <LabelPair label="Long" value='81.4879' />
                        </div>                        
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default UserPersona;