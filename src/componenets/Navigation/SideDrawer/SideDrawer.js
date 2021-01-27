import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import Classes from './SideDrawer.css';

const SideDrawer = (props) => {
    return (
        <div className={Classes.SideDrawer}>
            <Logo />
            <nav>
                <NavigationItem />
            </nav>
        </div>
    )
}

export default SideDrawer
