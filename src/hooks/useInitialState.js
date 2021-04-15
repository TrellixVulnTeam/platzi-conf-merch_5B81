import React, { useState } from 'react';

import initialState from '../initialSatate';

export default function useInitialState() {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        })
    }

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    return {
        addToBuyer,
        addToCart,
        removeFromCart,
        state,
    }
}
