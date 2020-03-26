import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

/* vamos a convertir Layout en class donde podemos implementar el metodo para que podamos escuc har ambas Partes
o cerrar haciendo click en el fondo (telon) , elegimos aqui porque tiene a los dos el Toolbar y SideDrawer*/
class Layout extends Component {

    state={
        showSideDrawer: false
    }
    /* METODO PARA CERRAR EL SIDEDRAWER */
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})

    }
   /*  adding a sideDrawer toggle button */

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}; /* showSideDrawer es verdadero entonces !this.state.showSideDrawer se establecera en falso. */

        });
    }
 

    render () {
        return(
            <Aux>

                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/> 
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}
                />

                <main className= {classes.Content}> 
                    {this.props.children}
                </main>

            </Aux>
        )
    }
} 
    




export default Layout;