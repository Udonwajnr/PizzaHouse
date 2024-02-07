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
    const [tax,setTax]= useState(2.99)
    const [quantity,setQuantity] = useState(1)
    const [totalCartItems,SetTotalCartItems] = useState(0)

    if(quantity<0){
        setQuantity(0)
    }

    const getMenuData =async()=>{
        try{
        axios.get("https://pizzahouseapi.onrender.com/api/menu")
      .then((data)=>{
        setMenu(data.data)
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
    
    const addToCart=(item)=>{
        const isItemInCart = cartItems.find((cartItem)=>cartItem._id === item._id)
        if(isItemInCart){
            setCartItems(
                cartItems.map((cartItem)=>cartItem._id === item._id ? {...cartItem , quantity: cartItem.quantity+1 } : cartItem)
            )
        }

        else{
            setCartItems(
                [...cartItems,{...item,quantity:1}]);
        }
    }

    const removeFromCart=(item)=>{
        const isItemInCart = cartItems.find((cartItem)=>cartItem._id === item._id)
        if(isItemInCart?.quantity === 1 || isItemInCart?.quantity <= 0 ){
            setCartItems(cartItems.filter((cartItem)=>cartItem._id !== item._id)) // if the quantity of the item is 1, remove the item from the cart
        }

        else{
            setCartItems(
                cartItems.map((cartItem)=>cartItem._id === item._id?{...cartItem,quantity:cartItem.quantity - 1}// if the quantity of the item is greater than 1, decrease the quantity of the item
                :
                cartItem
                )                
            )
        }
    }

    const clearCart=()=>{
        setCartItems([])
    }

    const getCartTotal =()=>{
        return cartItems.reduce((total,item)=>(total+item.price * item.quantity)+tax,tax).toFixed(2)
    }

    console.log(cartItems)
    console.log(cartItems)
    useEffect(()=>{
        getMenuData()
    },[])

    // you will be using local storage tooo big man!!!!

    let totalItems = 0
    cartItems.forEach(items => {
        totalItems +=items.quantity;
    });

    console.log(totalItems)
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
                cartItems,
                totalCartItems,
                totalItems
            }}>
                {children}
            </AuthContext.Provider>          
    )
}