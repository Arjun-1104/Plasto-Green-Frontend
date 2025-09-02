import {create} from 'zustand'
import { data } from '../data/data'

export const UseAppStore = create((set) => ({
    // State 1: active nav
    activeNav: 'Home',
    setActiveNav:(nav)  => set(() => ({activeNav: nav})),

    // State 2: product Banner click to send data to product.jsx
    activeBannerCardName: 'plywood',
    setActiveBannerCardName: (name) => set(()=> ({activeBannerCardName : name })),

    // all data
    productData : data,
    setProductData: ()=> set((state)=> ({productData : state.productData})),

    //display data
    displayData : data,
    setDisplayData: (type) => set((state) => (
            console.log(type)
))

}))







