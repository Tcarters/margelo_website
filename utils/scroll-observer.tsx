import { type } from "os";
import React, {Children, useCallback, useEffect, useState } from "react";

interface ScrollValue {
    scrollY: number
}

interface props  {
    children: React.ReactNode
    
}

export const ScrollContext = React.createContext<ScrollValue>({
        scrollY: 0
    })

const ScrollObserver  =  ({children} : props )  => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = useCallback( () => {
        setScrollY(window.scrollY)
     }, [])

     useEffect( () => {
         document.addEventListener('scroll' , handleScroll,  { passive: true })
         return () => document.removeEventListener('scroll', handleScroll)
     }, [handleScroll])

     return (
         <ScrollContext.Provider value={ { scrollY }}>
             {children}
         </ScrollContext.Provider>
     )
}

export default ScrollObserver