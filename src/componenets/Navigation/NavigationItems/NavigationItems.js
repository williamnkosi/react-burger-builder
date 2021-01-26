import React from 'react'
import Classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem'

const NavigationItems = () => {
    return (
        <ul className={Classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/" >checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems
