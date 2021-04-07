import React , {Component} from 'react';
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component
{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:0,
        showModal:false
    };
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredients
        };
        updatedIngredient[type]=updatedCount;
        //const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        //const newPrice=oldPrice+priceAddition;
        const oldPurchasable=this.state.purchasable;
        const newPurchasable=oldPurchasable+1;
        this.setState({
            ingredients:updatedIngredient,
            //totalPrice:newPrice,
            purchasable:newPurchasable
        });
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount>0)
        {
        const updatedCount=oldCount-1;
        const updatedIngredient={
            ...this.state.ingredients
        };
        updatedIngredient[type]=updatedCount;
        //const priceSubtraction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        //const newPrice=oldPrice-priceSubtraction;
        const oldPurchasable=this.state.purchasable;
        const newPurchasable=oldPurchasable-1;
        this.setState({
            ingredients:updatedIngredient,
            //totalPrice:newPrice,
            purchasable:newPurchasable
        });
    }
    }
    render()
    {
        return(
            <div>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                 price={this.state.totalPrice} purchasable={this.state.purchasable} 
                  ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} />
            
            </div>
        );
    }
}
export default BurgerBuilder;