import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { data } from '../data/data'

 const useAppStore = create(devtools((set) => ({
    // State 1: active nav
    activeNav: 'Home',
    setActiveNav:(nav)  => set(() => ({activeNav: nav})),

    // State 2: product Banner click to send data to product.jsx
    activeBannerCardName: 'plywood',
    setActiveBannerCardName: (name) => set(()=> ({activeBannerCardName : name })),

    // all data
    allProductData : data,
    setAllProductData: ()=> set((state)=> ({allProductData : state.allProductData})),
//     display data
    displayData : data,
    setDisplayData: (type) => set((state) => {
        console.log(type)
        // console.log(state.allProductData)
        if(state.allProductData.hasOwnProperty(type)){
            return {
                displayData : state.displayData[type]
            }
        }
        return data;
})


})))

export default useAppStore;











