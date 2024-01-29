"use client"
import { useEffect,useState,createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [isLoading,setIsLoading] = useState(false)   
    
    const isLoadingChange =()=>{
        setIsLoading(!false)
        console.log(isLoading)
    }

    const addToCart=()=>{

    }

    const removeFromCart=()=>{

    }

    const clearCart=()=>{

    }

    // you will be using local storage tooo big man!!!!

    return(
            <AuthContext.Provider 
            value={{
                isLoading,
                isLoadingChange
            }}>
                {children}
            </AuthContext.Provider>          
    )
}