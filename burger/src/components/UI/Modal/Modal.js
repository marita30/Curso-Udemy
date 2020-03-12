import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from './Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/> {/* para agregar el telon de fondo */} {/* clicked viene del archivo modal.js */}
        <div className={classes.Modal}
            style={{
                
                transform: props.show ?  'translateY(0)' : 'translateY(-100vh)',/* transformacion si Show es verdadero, si es tru translateY
                (0) y si no el otro.  */
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}

        </div>
    </Aux>
);


export default modal;