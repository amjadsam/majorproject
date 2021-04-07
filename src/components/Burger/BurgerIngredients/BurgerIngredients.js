import React from "react";
import "./../../../../src/App.css";
 function BurgerIngredients(props)
{
    let Ingredients=null;
    switch(props.type){
        case ('bread-bottom'):
            Ingredients=<div className="BreadBottom" ></div>;
            break;
        case ('bread-top'):
            Ingredients=(
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break;
        case ('meat'):
            Ingredients=<div className="Meat"></div>;
            break;
        case ('cheese'):
            Ingredients=<div className="Cheese"></div>;
            break;
        case ('salad'):
            Ingredients=<div className="Salad"></div>;
            break;
        case ('bacon'):
            Ingredients=<div className="Bacon"></div>;
            break;
        default:
            Ingredients=null;
    }
    return Ingredients;
}

export default BurgerIngredients;