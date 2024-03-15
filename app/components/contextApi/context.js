"use client"
import { useEffect,useState,createContext } from "react";
import axios  from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useRouter } from "next/navigation";

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
    const [quantity,setQuantity] = useState(1)
    const [totalCartItems,SetTotalCartItems] = useState(0)

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [user,setUser] = useState({})
    const router = useRouter()
    if(quantity<0){
        setQuantity(0)
    }

    const getCartTotal =()=>{
        return cartItems?.reduce((total,item)=>(total+item.price * item.quantity),0).toFixed(2)
        }
    
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
                router.push("/")
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

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);
      
        if (isItemInCart.quantity === 1) {
          // Remove item from cart state
          const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
          setCartItems(updatedCartItems);
      
          // Update local storage
          const updatedLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]').filter(
            (cartItem) => cartItem._id !== item._id
          );
          localStorage.setItem('cart', JSON.stringify(updatedLocalStorage));
        } else {
          // Decrease quantity if greater than 1
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            )
          );
        }
      };
      

    const clearCart=()=>{
        localStorage.removeItem("cart")
        setCartItems([])
    }

    useEffect(() => {
        let value
        // Get the value from local storage if it exists
        value = JSON.parse(localStorage.getItem("user")||"{}")
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