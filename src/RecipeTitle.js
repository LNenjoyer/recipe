import React from "react";
import './RecipeTitle.css'
const RecipeTitle = props => (
    <div className="recipetitle">
        <div className="title">
            {props.title}
        </div>
        <div className="info">
            {props.ocena}, {props.recenzje}

        </div>
    </div>
);
export default RecipeTitle