import { createContext } from "react"
import { ICart } from "../../interfaces/Cart"

interface ContextProps {
  cart: ICart[]
}

export const CartContext = createContext({} as ContextProps)