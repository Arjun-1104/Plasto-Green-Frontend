// import { useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
// import { Link } from "react-router-dom";
// import useAppStore from "../store/store";
// // import { useStore } from "zustand";

// const sortOptions = [
//   // {id: 1, name: 'Most Popular', href: '#', current: true },
//   // {id: 2, name: 'Best Rating', href: '#', current: false },
//   // { name: 'Newest', href: '#', current: false },
//   { id: 3, name: "Price: Low to High", href: "#", current: false },
//   { id: 4, name: "Price: High to Low", href: "#", current: false },
// ];
// // const subCategories = [
// //   { name: 'Totes', href: '#' },
// //   { name: 'Backpacks', href: '#' },
// //   { name: 'Travel Bags', href: '#' },
// //   { name: 'Hip Bags', href: '#' },
// //   { name: 'Laptop Sleeves', href: '#' },
// // ]
// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       { value: "white", label: "White", checked: false },
//       { value: "beige", label: "Beige", checked: false },
//       { value: "blue", label: "Blue", checked: false },
//       { value: "brown", label: "Brown", checked: false },
//       { value: "green", label: "Green", checked: false },
//       { value: "purple", label: "Purple", checked: false },
//     ],
//   },
//   // {
//   //   id: 'category',
//   //   name: 'Category',
//   //   options: [
//   //     { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//   //     { value: 'sale', label: 'Sale', checked: false },
//   //     { value: 'travel', label: 'Travel', checked: false },
//   //     { value: 'organization', label: 'Organization', checked: false },
//   //     { value: 'accessories', label: 'Accessories', checked: false },
//   //   ],
//   // },
//   {
//     id: "size",
//     name: "Size",
//     options: [
//       { value: "6x4", label: "6x4", checked: false },
//       { value: "7x4", label: "7x4", checked: false },
//       { value: "8x4", label: "8x4", checked: false },
//       { value: "8x6", label: "8x6", checked: false },
//       { value: "9x6", label: "9x6", checked: false },
//     ],
//   },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function ProductFilter() {
//   // console.log(items);

//   const {
//     setSorting,
//     inStock,
//     colors,
//     sizes,
//     toggleInStock,
//     toggleColor,
//     toggleSize,
//     getFilterItems,
//   } = useAppStore();

//   // const filterData = useStore(state=> state.inStock ? state.getFilterItems() : state.displayData.items)

//   // console.log(displayData)
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   return (
//     <div className="bg-white">
//       <div>
//         {/* Mobile filter dialog */}
//         <Dialog
//           open={mobileFiltersOpen}
//           onClose={setMobileFiltersOpen}
//           className="relative z-40 lg:hidden"
//         >
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
//           />

//           <div className="fixed inset-0 z-40 flex">
//             <DialogPanel
//               transition
//               className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
//             >
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button
//                   type="button"
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
//                 >
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Close menu</span>
//                   <XMarkIcon aria-hidden="true" className="size-6" />
//                 </button>
//               </div>

//               {/* Filters */}
//               <form className="mt-4 border-t border-gray-200">
//                 {/* <h3 className="sr-only">Categories</h3>
//                 <ul role="list" className="px-2 py-3 font-medium text-gray-900">
//                   {subCategories.map((category) => (
//                     <li key={category.name}>
//                       <a href={category.href} className="block px-2 py-3">
//                         {category.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul> */}

//                 {filters.map((section) => (
//                   <Disclosure
//                     key={section.id}
//                     as="div"
//                     className="border-t border-gray-200 px-4 py-6"
//                   >
//                     <h3 className="-mx-2 -my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {section.name}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <PlusIcon
//                             aria-hidden="true"
//                             className="size-5 group-data-open:hidden"
//                           />
//                           <MinusIcon
//                             aria-hidden="true"
//                             className="size-5 group-not-data-open:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <div className="space-y-6">
//                         {section.options.map((option, optionIdx) => (
//                           <div key={option.value} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid size-4 grid-cols-1">
//                                 <input
//                                   defaultValue={option.value}
//                                   id={`filter-mobile-${section.id}-${optionIdx}`}
//                                   name={`${section.id}`}
//                                   type="checkbox"
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                 />
//                                 <svg
//                                   fill="none"
//                                   viewBox="0 0 14 14"
//                                   className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                 >
//                                   <path
//                                     d="M3 8L6 11L11 3.5"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-checked:opacity-100"
//                                   />
//                                   <path
//                                     d="M3 7H11"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-indeterminate:opacity-100"
//                                   />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label
//                               htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                               className="min-w-0 flex-1 text-gray-500"
//                             >
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//               </form>
//             </DialogPanel>
//           </div>
//         </Dialog>

//         <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               New Arrivals
//             </h1>

//             <div className="flex items-center">
//               <Menu as="div" className="relative inline-block text-left">
//                 <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Sort
//                   <ChevronDownIcon
//                     aria-hidden="true"
//                     className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
//                   />
//                 </MenuButton>

//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//                 >
//                   <div className="py-1">
//                     {sortOptions.map((option) => (
//                       <MenuItem key={option.name}>
//                         <a
//                           href={option.href}
//                           className={classNames(
//                             option.current
//                               ? "font-medium text-gray-900"
//                               : "text-gray-500",
//                             "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
//                           )}
//                           onClick={() => setSorting(option.name)}
//                         >
//                           {option.name}
//                         </a>
//                       </MenuItem>
//                     ))}
//                   </div>
//                 </MenuItems>
//               </Menu>

//               <button
//                 type="button"
//                 className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
//               >
//                 <span className="sr-only">View grid</span>
//                 <Squares2X2Icon aria-hidden="true" className="size-5" />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setMobileFiltersOpen(true)}
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon aria-hidden="true" className="size-5" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pt-6 pb-24">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//               {/* Filters */}
//               <form className="hidden lg:block">
//                 {/* <h3 className="sr-only">Categories</h3>
//                 <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
//                   {subCategories.map((category) => (
//                     <li key={category.name}>
//                       <a href={category.href}>{category.name}</a>
//                     </li>
//                   ))}
//                 </ul> */}
//                 <div className="flex items-center justify-between border-b border-gray-200 py-6">
//                   <span className="font-medium text-sm text-gray-900">
//                     In stock only
//                   </span>
//                   <label class="relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       value=""
//                       class="sr-only peer"
//                       checked={inStock}
//                       onChange={toggleInStock}
//                     />
//                     <div class="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-800 hover:peer-checked:bg-neutral-700"></div>
//                   </label>
//                 </div>

//                 {filters.map((section) => (
//                   <Disclosure
//                     key={section.id}
//                     as="div"
//                     className="border-b border-gray-200 py-6"
//                   >
//                     <h3 className="-my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {section.name}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <PlusIcon
//                             aria-hidden="true"
//                             className="size-5 group-data-open:hidden"
//                           />
//                           <MinusIcon
//                             aria-hidden="true"
//                             className="size-5 group-not-data-open:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <div className="space-y-4">
//                         {section.options.map((option, optionIdx) => (
//                           <div key={option.value} className="flex gap-3">
//                             <div className="flex h-5 shrink-0 items-center">
//                               <div className="group grid size-4 grid-cols-1">
//                                 <input
//                                   // defaultValue={option.value}
//                                   // defaultChecked={option.checked}
//                                   checked={
//                                     section.id === "color"
//                                       ? colors.includes(option.value)
//                                       : sizes.includes(option.value)
//                                   }
//                                   onChange={() =>
//                                     section.id === "color"
//                                       ? toggleColor(option.value)
//                                       : toggleSize(option.value)
//                                   }
//                                   id={`filter-${section.id}-${optionIdx}`}
//                                   name={`${section.id}[]`}
//                                   type="checkbox"
//                                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                                 />
//                                 <svg
//                                   fill="none"
//                                   viewBox="0 0 14 14"
//                                   className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
//                                 >
//                                   <path
//                                     d="M3 8L6 11L11 3.5"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-checked:opacity-100"
//                                   />
//                                   <path
//                                     d="M3 7H11"
//                                     strokeWidth={2}
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="opacity-0 group-has-indeterminate:opacity-100"
//                                   />
//                                 </svg>
//                               </div>
//                             </div>
//                             <label
//                               htmlFor={`filter-${section.id}-${optionIdx}`}
//                               className="text-sm text-gray-600"
//                             >
//                               {option.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//               </form>

//               {/* Product grid */}
//               <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-3 border">
//                 {/* {(items ? items : displayData).map((item) => { */}
//                 {getFilterItems().map((item) => {
//                   return (
//                     <Link to="/productItem">
//                       <div key={item.id} className="relative border p-2 group">
//                         <img
//                           alt="image"
//                           src={item.image}
//                           className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//                         />
//                         <div className="mt-4 flex justify-between">
//                           <div>
//                             <h3 className="text-sm text-gray-700">
//                               {/* <a href=""> */}
//                               <span
//                                 aria-hidden="true"
//                                 className="absolute inset-0 "
//                               />
//                               {item.title}
//                               {/* </a> */}
//                             </h3>
//                             <p className="text-sm font-medium text-gray-900">
//                               {item.price}
//                             </p>

//                             {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
//                           </div>
//                           {/* <p className="text-sm font-medium text-gray-900">{item.price}</p> */}
//                         </div>
//                       </div>
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import useAppStore from "../store/store";

const sortOptions = [
  { id: 3, name: "Price: Low to High", href: "#", current: false },
  { id: 4, name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "6x4", label: "6x4" },
      { value: "7x4", label: "7x4" },
      { value: "8x4", label: "8x4" },
      { value: "8x6", label: "8x6" },
      { value: "9x6", label: "9x6" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductFilter() {
  const {
    setSorting,
    inStock,
    colors,
    sizes,
    toggleInStock,
    toggleColor,
    toggleSize,
    getFilterItems,
  } = useAppStore();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50 min-h-screen">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-semibold text-green-700">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-green-50 focus:ring-2 focus:ring-green-500"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-green-700 hover:text-green-900 font-medium">
                        <span>{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3 items-center">
                            <input
                              checked={
                                section.id === "color"
                                  ? colors.includes(option.value)
                                  : sizes.includes(option.value)
                              }
                              onChange={() =>
                                section.id === "color"
                                  ? toggleColor(option.value)
                                  : toggleSize(option.value)
                              }
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}`}
                              type="checkbox"
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="text-gray-700"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-green-800">
              New Arrivals
            </h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-green-700 hover:text-green-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-green-400 group-hover:text-green-600"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          type="button"
                          className={classNames(
                            option.current
                              ? "font-semibold text-green-900"
                              : "text-gray-700",
                            "block w-full text-left px-4 py-2 text-sm hover:bg-green-50"
                          )}
                          onClick={() => setSorting(option.name)}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-green-400 hover:text-green-600 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-green-400 hover:text-green-600 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <div className="flex items-center justify-between border-b border-gray-200 py-6">
                  <span className="font-medium text-sm text-green-900">
                    In stock only
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={inStock}
                      onChange={toggleInStock}
                    />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-600 transition-all duration-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                  </label>
                </div>
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-green-700 hover:text-green-900 font-medium">
                        <span>{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3 items-center">
                            <input
                              checked={
                                section.id === "color"
                                  ? colors.includes(option.value)
                                  : sizes.includes(option.value)
                              }
                              onChange={() =>
                                section.id === "color"
                                  ? toggleColor(option.value)
                                  : toggleSize(option.value)
                              }
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-gray-700"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
              {/* Product grid */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {getFilterItems().map((item) => (
                  <Link to="/productItem" key={item.name}>
                    <div className="relative border rounded-lg bg-white p-3 group shadow hover:shadow-lg transition-all duration-300">
                      <img
                        alt={item.title}
                        src={item.image}
                        className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-80 lg:aspect-auto lg:h-64"
                      />
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <h3 className="text-base font-semibold text-green-800">
                            {item.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-900">
                            ₹{item.price}
                          </p>
                        </div>
                        {/* Add more product info here if needed */}
                      </div>
                    </div>
                  </Link>
                ))}
                {getFilterItems().length === 0 && (
                  <div className="col-span-full text-center text-gray-500 py-12">
                    No products found matching your filters.
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
