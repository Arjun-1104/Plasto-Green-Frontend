import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { data } from "../data/data";
import image from "../assets/images/plyBanner.png";

const initialDisplayData = {
  id: "1",
  title: "Product",
  image: image,
  items: Object.values(data).flatMap((category) => category.items),
};

const useAppStore = create(
  devtools((set, get) => ({
    // State 1: active nav
    activeNav: "Home",
    setActiveNav: (nav) => set(() => ({ activeNav: nav })),

    // all data
    allProductData: data,
    sorting: "",
    inStock: false,
    colors: [],
    sizes: [],

    // display data
    displayData: initialDisplayData,
    setDisplayData: (type) => {
      const allData = get().allProductData;
      if (Object.prototype.hasOwnProperty.call(allData, type)) {
        set({ displayData: allData[type], sorting: "" });
      } else {
        // console.log(initialDisplayData,4)
        set({ displayData: initialDisplayData, sorting: "" });
      }
    },

    //filter
    setSorting: (sortBy) => {
      console.log(sortBy);

      const { displayData } = get();
      const sortItems = [...displayData.items];
      // displayData.items = sortItems;
      switch (sortBy) {
        case "Price: Low to High": {
          sortItems.sort((a, b) => a.price - b.price);
          break;
        }
        case "Price: High to Low": {
          sortItems.sort((a, b) => b.price - a.price);
          break;
        }
        default:
          break;
      }
      // console.log(displayData,1)
      // console.log(sortItems,2)

      set({
        displayData: { ...displayData, items: sortItems },
        sorting: sortBy,
      });
      // console.log(displayData,3)
    },

    // getFilterItems: ()=> {
    //   const {displayData,inStock, colors, sizes} = get();
    //   const sortItems = [...displayData.items];

    //   if(!displayData?.items) return [];

    //   console.log(inStock)
    //   if(inStock) {
    //     return displayData.items.filter((item)=> item.stock > 0)
    //   }
    //   console.log(displayData.items)
    //   return displayData.items;
    // },
    getFilterItems: () => {
      const { displayData, inStock, colors, sizes } = get();
      if (!displayData?.items) return [];
      return displayData.items.filter((item) => {
        if (inStock && item.stock <= 0) return false;
        if (colors.length > 0 && (!item.color || !colors.includes(item.color)))
          return false;
        if (sizes.length > 0) {
          // Convert dimensions to string like "8x4"
          const itemSize =
            item.dimensions && item.dimensions.width && item.dimensions.height
              ? `${item.dimensions.width.replace(
                  "ft",
                  ""
                )}x${item.dimensions.height.replace("ft", "")}`
              : item.size; // fallback to item.size if exists
          if (!itemSize || !sizes.includes(itemSize)) return false;
        }
        return true;
      });
    },

    toggleInStock: () => set((state) => ({ inStock: !state.inStock })),

    toggleColor: (color) =>
      set((state) => ({
        colors: state.colors.includes(color)
          ? state.colors.filter((c) => c !== color)
          : [...state.colors, color],
      })),

    toggleSize: (size) => {
      return set((state) => ({
        sizes: state.sizes.includes(size)
          ? state.sizes.filter((s) => s !== size)
          : [...state.sizes, size],
      }));
    },

    resetFillters: () => set({ inStock: false, colors: [], sizes: [] }),
  }))
);

export default useAppStore;
