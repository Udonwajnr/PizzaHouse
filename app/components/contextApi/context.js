"use client"
import { useEffect,useState,createContext } from "react";
import axios  from 'axios'

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [isLoading,setIsLoading] = useState(false)   
    const [menu,setMenu] = useState([])
    // for menu data
    const [loading,setLoading] = useState(true)
    // cart
    const [cartItems,setCartItems] = useState([])
    const [quantity,setQuantity ]= useState(1)    

    const [tax,setTax]= useState(2.99)

    if(quantity<1){
        setQuantity(1)
    }
    const getMenuData =async()=>{
        try{
        axios.get("https://pizzahouseapi.onrender.com/api/menu")
      .then((data)=>{
        setMenu({data,quantity:0})
        setQuantity(1)
        setLoading(false)
      })  
      .catch((err)=>{
        console.log("error")
        setLoading(true)
      })
        }
        catch(err){
            console.log(err)
        }
    }
    const increment =()=>{
        return setQuantity(quantity+1)
    }

    const decrement =()=>{
        return setQuantity(quantity-1)
    }
    const addToCart=(item)=>{
        const isItemInCart = cartItems.find((cartItem)=>cartItem._id === item._id)
        if(isItemInCart){
            setCartItems(
                cartItems.map((cartItem)=>cartItem._id === item._id ? {...cartItem , quantity: cartItem.quantity+quantity } : cartItem)
            )
        }
        else{
            setCartItems(
                [...cartItems,{...item,quantity:1}]);
        }
    }
    console.log(menu)
    const removeFromCart=(item)=>{
        const isItemInCart = cartItems.find((cartItem)=>cartItem._id === item._id)
        if(isItemInCart.quantity === 1 ){
            setCartItems(cartItems.filter((cartItem)=>cartItem._id !== item._id)) // if the quantity of the item is 1, remove the item from the cart
        }

        else{
            setCartItems(
                cartItems.map((cartItem)=>cartItem._id === item._id?{...cartItem,quantity:cartItem.quantity - quantity}// if the quantity of the item is greater than 1, decrease the quantity of the item
                :
                cartItem
                )
                
            )
        }
    }

console.log(quantity)

    const clearCart=()=>{
        setCartItems([])
    }

    const getCartTotal =()=>{
        return cartItems.reduce((total,item)=>(total+item.price * item.quantity)+tax,tax)
    }

    console.log(cartItems)
    console.log(cartItems)
    useEffect(()=>{
        getMenuData()
    },[])
    // you will be using local storage tooo big man!!!!

    return(
            <AuthContext.Provider 
            value={{
                isLoading,
                menu,
                loading,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                quantity,
                increment,
                decrement,
            }}>
                {children}
            </AuthContext.Provider>          
    )
}