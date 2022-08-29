import React, { FC } from "react";
import { useReducer } from "react";
import { ICart } from "../../interfaces/Cart";
import { CartContext, cartReducer } from "./";

export interface CartState {
	cart: ICart[];
}

const CART_INITIAL_STATE: CartState = {
	cart: []
};

interface CartProvider {
	children?: React.ReactNode;
}
export const CartProvider:FC<CartProvider> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);


	return (
		<CartContext.Provider
			value={{
				...state}}
		>
			{children}
		</CartContext.Provider>
	);
};
