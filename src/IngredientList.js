import React from "react";
import './IngredientList.css'
const IngredientList = props => (
    <div className="ingredientlist">
        <div className="notok">
            {props.ingredient}, {props.ilosc}
        </div>
        <div className="prepared">

        </div>
    </div>
);
export default IngredientList