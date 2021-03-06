import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

import LoadingIndicator from '../UI/LoadingIndicator';

const IngredientForm = React.memo(props => {
                      /* Esto ahora lo pasa como un arreglo */ 
  /* [] esta es una sisntaxis de javascript que permite extraer elementos del arreglo useState enteredTitle sera para obtener el title y setEnteredTitle para actualizar el title.*/                    
 const [ enteredTitle, setEnteredTitle ] = useState('');
 const [ enteredAmount, setEnteredAmount ] = useState('');


  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount}); /* Viene del archivo Ingredients.js */
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
                                                                                                  
            <input 
              type="text" 
              id="title" 
              value={enteredTitle} 
              /* ACtualiza title con los valores  target.value que son los que son ingresados por el usuario. */
              onChange={event => {
                  setEnteredTitle(event.target.value);              
                }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="amount">Amount</label>
                                                                                                       
            <input 
              type="number" 
              id="amount" 
              value={enteredAmount}
              /* ACtualiza amount con los valores target.value que son los que son ingresados por el usuario.*/
              onChange={event => {
                setEnteredAmount(event.target.value);
             }}
            />
          </div>
          
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {/* SI LA CARGA DE LOS ACCESORIOS ES TRUE QUIERO MOSTRAR EL lOADINGINDICATOR DE LO CONTRARIO NULL */}
            {props.loading &&  <LoadingIndicator /> } {/* Viene del archivo Ingredients.js */}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
