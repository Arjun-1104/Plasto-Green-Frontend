import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { data } from '../data/data'
import image from '../assets/images/plyBanner.png'

 const useAppStore = create(devtools((set) => ({
    // State 1: active nav
    
    activeNav: 'Home',
    setActiveNav:(nav)  => set(() => ({activeNav: nav})),
    
    // State 2: product Banner click to send data to product.jsx
    activeBannerCardName: 'plywood',
    setActiveBannerCardName: (name) => set(()=> ({activeBannerCardName : name })),

    // all data
    allProductData : data,
    // setAllProductData: ()=> set((state)=> ({allProductData : state.allProductData})),


//    display data
    displayData : {id : '1', title: 'Product', image : image,items :  Object.values(data).flatMap(category => { console.log(category); return category.items})},
    setDisplayData: (type) => set((state) => {
        console.log(type)
        // if(type === 'product'){
        //     return {
        //         displayData : {id : 'dd', title: 'Product', image : '',items :  [Object.values(data).flatMap(category => { console.log(category); return category.items})]}
        //     }
        // }
        if(Object.prototype.hasOwnProperty.call(state.allProductData, type)){
            return {
                displayData : state.allProductData[type]
            }
        }
        return {id : '1', title: 'Product', image : {image}, items :  [Object.values(data).flatMap(category => { console.log(category); return category.items})]}
    }),

    sorting : '',
    setSorting : (sortBy) => set((state)=> ({
         displayData : state.displayData
        // console.log(state.displayData.items)
        // if(sortBy === 'Most Popular'){
        //     // Array.sort(()=> )
        // }
        // else if(sortBy ==='Best Rating'){
            // state.displayData.items.sort((a,b)=> console.log(a,b))
            
        // }
        // else if(sortBy === 'Price: Low to High'){
        //     Array.sort(()=> )
        // }
        // else if(sortBy === 'Price: High to Low'){
        //     Array.sort(()=> )
        // }
        
    }))


})))

export default useAppStore;











