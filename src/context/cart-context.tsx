import { ReactNode, createContext, useEffect, useState } from "react";

type cartProviderprops = {
    children: ReactNode
}

type cartItem = {
    id: string
    quantity: number
}

type cartContext = {
    isOpen: boolean
    openCart: () => void
    closeCart: () => void
    addToCart: (id: string) => void
    removeFromCart: (id: string) => void
    getCart: () => cartItem[]
    cartArray: cartItem[]
}

export const CartContext = createContext({} as cartContext)

export function CartProvider(props : cartProviderprops): JSX.Element{
    const [isOpen, setIsOpen] = useState(false)
    const localArray = JSON.parse(localStorage.getItem('cart') || '[]')
    const [cartArray, setCartArray] = useState<cartItem[]>(localArray)
    function openCart (){
        setIsOpen(true)
    }

    function closeCart (){
        setIsOpen(false)
    }

    function addToCart (id: string){
        if (cartArray.find(item => item.id === id) == null){
            setCartArray([...cartArray, {id: id, quantity: 1}])
        } else {
            const newArray = cartArray.map((item) => {
                if(item.id === id){
                return {...item, quantity: item.quantity + 1} 
                } else return item
            })
            setCartArray(newArray)
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartArray))
    },[cartArray])

    function removeFromCart (id: string){
        setCartArray(cartArray.filter(item => item.id !== id))
    }

    function getCart (){
        return JSON.parse(localStorage.getItem('cart') || '[]');
    }


    return(
        <CartContext.Provider value={{openCart, closeCart, isOpen, cartArray, addToCart, removeFromCart, getCart}}>
            {props.children}
        </CartContext.Provider>
    )
}