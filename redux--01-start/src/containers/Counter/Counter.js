import React, { Component } from 'react';
/* Conectando el store con react */
import { connect } from 'react-redux';

import  * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={ () => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResult => (

                         <li key= {strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li> /* value y id viene del archivo reducer.js */
                    ))}
                   
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {

        ctr: state.ctr.counter, /* denme el valor del counter en nuestro global administrado  el .ctr que va en medio del state viene del archvo index.js */
        storedResults: state.res.results /* viene el results de reducer.js  el .res que va en medio del state viene del archvo index.js*/
        
    };
};

const mapDispatchToProps = dispatch => {
    return {

        onIncrementCounter: () => dispatch(actionCreators.increment()), /* viene del archivo actions.js */
        onDecrementCounter: () => dispatch (actionCreators.decrement()),
        onAddCounter: () => dispatch (actionCreators.add(10)),
        onSubtractCounter: () => dispatch (actionCreators.subtract(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)), /* result viene del archivo result.js */
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)) //resultElId viene del archivo reducer.js

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);