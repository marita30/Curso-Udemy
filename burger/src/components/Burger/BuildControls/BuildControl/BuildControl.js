import React from 'react';
import classes from './BuildControl.css'
import buildControls from '../BuildControls';

const buildControl = (props) => (
    <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button className = {classes.Less}>Less</button> {/* Agregar */}
        <button className = {classes.More}>More</button> {/* Eliminar */}
    </div>

);

export default buildControls;