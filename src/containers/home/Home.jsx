import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UserItem from '../../components/userItem/UserItem';
import style from './Home.module.css';
import AppContext from '../../AppContext';
import { getUsersList } from '../../services/UserService';

export default function Home() {
  const { appState, setAppState } = React.useContext(AppContext);
  React.useEffect(async () => {
    const list = await getUsersList();
    setAppState(list);
  }, []);

  return (
    <Card className={style.cardSection}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className={style.headerSection}>
          Select an account
        </Typography>
        <div className={style.listSection}>
          <Typography variant="div">
            {appState?.users?.map((userData) => {
              return (
                <div style={{ borderBottom: '2px solid ##DCDCDC' }}>
                  <UserItem key={userData.id} profileImg={userData.profilepicture} text={userData.name} href={`${userData.id}/profile`} />
                </div>
              )
            })}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
