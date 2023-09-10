import React, { useState } from 'react';
import UserDialog from '../userDialog/UserDialog';
import style from './HeadItem.module.css';
import UserItem from '../userItem/UserItem';

const HeadItem = ({ itemName, userInfo }) => {
    const [showDialog, updateShowDialog] = useState(false);

    return (
        <div className={style.headSection}>
            <div className={style.leftSection}>
                {itemName}
            </div>
            <div className={style.rightSection}>
                <div onClick={()=>{updateShowDialog(!showDialog)}} style={{cursor:'pointer'}}>
                    <UserItem profileImg={userInfo.profilepicture} text={userInfo.name} />
                </div>
                {showDialog && <UserDialog profileImg={userInfo.profilepicture} name={userInfo.name} email={userInfo.email} othersList={[]} href={'home'} />}
            </div>
        </div>
    );
};

export default HeadItem;