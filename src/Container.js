/**
 * Created by rkdgusrnrlrl on 16. 7. 30.
 */
import React, { Component } from 'react';
import Snack from './Snack';
import ShoppingCart from './ShoppingCart';


export default class Container extends Component {
    render(){
        return (
            <div>
                <Snack name="Chips"/>
                <Snack name="Cupcake"/>
                <Snack name="Donut"/>
                <Snack name="Doritos"/>
                <Snack name="Popcorn"/>
                <ShoppingCart/>
            </div>
        );
    }
}