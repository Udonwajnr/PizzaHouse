"use client"
import { useEffect,useState,createContext } from "react";
import axios  from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";


export const AuthContext = createContext();

export const AuthProvider =({children})=>{

    useEffect(()=>{
      const getFromLocalStorage = JSON.parse(localStorage.getItem("cart")||"[]")
      if (getFromLocalStorage) {
            setCartItems(getFromLocalStorage )
          }
    },[])
    const notify = () => toast('Item Has been Added to Cart',{duration:1000});
    const [isLoading,setIsLoading] = useState(false)   
    const [menu,setMenu] = useState([])
    // for menu data
    const [loading,setLoading] = useState(true)    

    const [cartItems,setCartItems] = useState([]);
    const [cart,setCart] = useState([]);
    const [tax,setTax]= useState(2.99)
    const [quantity,setQuantity] = useState(1)
    const [totalCartItems,SetTotalCartItems] = useState(0)

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState([])
    console.log(user._id)
    if(quantity<0){
        setQuantity(0)
    }

    const getCartTotal =()=>{
        return cartItems?.reduce((total,item)=>(total+item.price * item.quantity),0).toFixed(2)
        }


    const data={user:user._id,menuData:cartItems,totalPrice:getCartTotal()}
        
    console.log(data)
    const orders =async()=>{
      await axios.post("https://pizzahouseapi.onrender.com/api/orders",data)
      .then((data)=>
        console.log(data)
      )
      .catch((err)=>{
        console.log(err)
      })
    }
    const mappingCart = cartItems.map((cart)=>cart._id)
    const mappingQuantity = cartItems.map((cart)=>cart.quantity)

    console.log(mappingCart)
    console.log(mappingQuantity)
    
    const getMenuData =async()=>{
        try{
      await axios.get("https://pizzahouseapi.onrender.com/api/menu")
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

    const loginForm =async(e)=>{
        e.preventDefault()
        const data = {username,password}
            await axios.post("https://pizzahouseapi.onrender.com/api/user/login",data)
            .then((data)=>{
                console.log(data.data?.user)
                localStorage.setItem("user",JSON.stringify(data.data?.user))
                window.location.href = "/"
                // setUser(saveLogin)
                console.log("Successful")
            })
            .catch((error)=>{
              alert("Invalid details")
                console.log(error)
            })
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
        notify()
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
        localStorage.removeItem("cart")
        setCartItems([])
    }



    useEffect(() => {
        let value
        // Get the value from local storage if it exists
        value = JSON.parse(localStorage.getItem("user") || "[]")
        setUser(value)
      }, [])


    useEffect(()=>{
        getMenuData()
    },[]) 

  
    useEffect(()=>{
        if(cartItems.length) { // Only store if contacts is not empty
            localStorage.setItem('cart', JSON.stringify(cartItems));          
         }
    },[cartItems])


    let totalItems = 0
    cartItems?.forEach(items => {
        totalItems +=items.quantity;
    });
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
                totalItems,
                setUser,
                user,
                loginForm,
                username,
                setUserName,
                password,
                setPassword,
            }}>
                {children}
            </AuthContext.Provider>          
    )
}