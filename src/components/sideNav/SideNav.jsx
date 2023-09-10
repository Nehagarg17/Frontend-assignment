import React from 'react';
import { Link } from "react-router-dom";
import style from './SideNav.module.css';

const SideNav = ({ navOptions }) => {
    return (
        <div className={style.container}>
            {
                navOptions.map((navOption, index) => {
                    return (
                        <div key={index} className={style.navItem}>
                            <Link to={`/${navOption.href}`} style={{color:'#fff', textDecoration:'none'}}>
                                {navOption.text}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SideNav;