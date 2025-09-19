// import { StarIcon } from '@heroicons/react/20/solid'
// import mainBannerImage1 from "../assets/images/mainBannerImage1.webp";
// import { MdAddCircleOutline } from "react-icons/md";
// import { AiOutlineMinusCircle } from "react-icons/ai";
// import defaultImage from '../assets/images/plyBanner.png'

// const product = {
//   name: 'Basic Tee 6-Pack',
//   price: '$192',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Men', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
//       alt: 'Two each of gray, white, and black shirts laying flat.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
//       alt: 'Model wearing plain black basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
//       alt: 'Model wearing plain gray basic tee.',
//     },
//     {
//       src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
//   colors: [
//     { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
//     { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
//     { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: false },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: true },
//     { name: '2XL', inStock: true },
//     { name: '3XL', inStock: true },
//   ],
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     'Hand cut and sewn locally',
//     'Dyed with our proprietary colors',
//     'Pre-washed & pre-shrunk',
//     'Ultra-soft 100% cotton',
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// }
// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//   return classes.filter(Boolean).join('')
// }

// export default function ProductItem() {
//   return (
//     // <div className="bg-white mt-20 border">
//     //   <div className="pt-6">
//     //     {/* <nav aria-label="Breadcrumb">
//     //       <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//     //         {product.breadcrumbs.map((breadcrumb) => (
//     //           <li key={breadcrumb.id}>
//     //             <div className="flex items-center">
//     //               <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
//     //                 {breadcrumb.name}
//     //               </a>
//     //               <svg
//     //                 fill="currentColor"
//     //                 width={16}
//     //                 height={20}
//     //                 viewBox="0 0 16 20"
//     //                 aria-hidden="true"
//     //                 className="h-5 w-4 text-gray-300"
//     //               >
//     //                 <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//     //               </svg>
//     //             </div>
//     //           </li>
//     //         ))}
//     //         <li className="text-sm">
//     //           <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
//     //             {product.name}
//     //           </a>
//     //         </li>
//     //       </ol>
//     //     </nav> */}

//     //     {/* Image gallery */}
//     //     <div className="mx-auto mt-6 border max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
//     //       {/* <img
//     //         alt={product.images[0].alt}
//     //         src={product.images[0].src}
//     //         className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
//     //       />
//     //       <img
//     //         alt={product.images[1].alt}
//     //         src={product.images[1].src}
//     //         className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
//     //       />
//     //       <img
//     //         alt={product.images[2].alt}
//     //         src={product.images[2].src}
//     //         className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
//     //       /> */}
//     //       <img
//     //         alt={product.images[3].alt}
//     //         src={product.images[3].src}
//     //         className=" aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
//     //       />
//     //       <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//     //         <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
//     //       </div>
//     //     </div>

//     //     {/* Product info */}
//     //     <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
//     //       <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//     //         <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
//     //       </div>

//     //       {/* Options */}
//     //       <div className="mt-4 lg:row-span-3 lg:mt-0">
//     //         <h2 className="sr-only">Product information</h2>
//     //         <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

//     //         {/* Reviews */}
//     //         <div className="mt-6">
//     //           <h3 className="sr-only">Reviews</h3>
//     //           <div className="flex items-center">
//     //             <div className="flex items-center">
//     //               {[0, 1, 2, 3, 4].map((rating) => (
//     //                 <StarIcon
//     //                   key={rating}
//     //                   aria-hidden="true"
//     //                   className={classNames(
//     //                     reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
//     //                     'size-5 shrink-0',
//     //                   )}
//     //                 />
//     //               ))}
//     //             </div>
//     //             <p className="sr-only">{reviews.average} out of 5 stars</p>
//     //             <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//     //               {reviews.totalCount} reviews
//     //             </a>
//     //           </div>
//     //         </div>

//     //         <form className="mt-10">
//     //           {/* Colors */}
//     //           {/* <div>
//     //             <h3 className="text-sm font-medium text-gray-900">Color</h3>

//     //             <fieldset aria-label="Choose a color" className="mt-4">
//     //               <div className="flex items-center gap-x-3">
//     //                 {product.colors.map((color) => (
//     //                   <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
//     //                     <input
//     //                       defaultValue={color.id}
//     //                       defaultChecked={color === product.colors[0]}
//     //                       name="color"
//     //                       type="radio"
//     //                       aria-label={color.name}
//     //                       className={classNames(
//     //                         color.classes,
//     //                         'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
//     //                       )}
//     //                     />
//     //                   </div>
//     //                 ))}
//     //               </div>
//     //             </fieldset>
//     //           </div> */}

//     //           {/* Sizes */}
//     //           {/* <div className="mt-10">
//     //             <div className="flex items-center justify-between">
//     //               <h3 className="text-sm font-medium text-gray-900">Size</h3>
//     //               <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//     //                 Size guide
//     //               </a>
//     //             </div>

//     //             <fieldset aria-label="Choose a size" className="mt-4">
//     //               <div className="grid grid-cols-4 gap-3">
//     //                 {product.sizes.map((size) => (
//     //                   <label
//     //                     key={size.id}
//     //                     aria-label={size.name}
//     //                     className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
//     //                   >
//     //                     <input
//     //                       defaultValue={size.id}
//     //                       defaultChecked={size === product.sizes[2]}
//     //                       name="size"
//     //                       type="radio"
//     //                       disabled={!size.inStock}
//     //                       className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
//     //                     />
//     //                     <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
//     //                       {size.name}
//     //                     </span>
//     //                   </label>
//     //                 ))}
//     //               </div>
//     //             </fieldset>
//     //           </div> */}
//     //           <div className='mt-10 flex itmes-center justify-between'>
//     //             <div className='border w-15 p-1.5'>
//     //               <img src={mainBannerImage1} alt="" className='w-full h-full' />
//     //             </div>
//     //             <div className=''>
//     //               <p>size 8 x 4</p>
//     //               <p>Thikness 4.4</p>
//     //               <p>FaceSlin - gunjan</p>
//     //             </div>
//     //             <div className=''>
//     //               <p>qantity</p>
//     //               <div className='flex'>
//     //                 <AiOutlineMinusCircle/>
//     //                 <p>0</p>
//     //                 <MdAddCircleOutline/>

//     //               </div>
//     //               <p>stock 80</p>
//     //             </div>
//     //             <div>
//     //               <p>price</p>
//     //               <p>rs 1934</p>
//     //             </div>

//     //           </div>
//     //           <div className='mt-10 flex itmes-center justify-between'>
//     //             <div className='border w-15 p-1.5'>
//     //               <img src={mainBannerImage1} alt="" className='w-full h-full' />
//     //             </div>
//     //             <div className=''>
//     //               <p>size 8 x 4</p>
//     //               <p>Thikness 4.4</p>
//     //               <p>FaceSlin - gunjan</p>
//     //             </div>
//     //             <div className=''>
//     //               <p>qantity</p>
//     //               <div className='flex'>
//     //                 <AiOutlineMinusCircle/>
//     //                 <p>0</p>
//     //                 <MdAddCircleOutline/>

//     //               </div>
//     //               <p>stock 80</p>
//     //             </div>
//     //             <div>
//     //               <p>price</p>
//     //               <p>rs 1934</p>
//     //             </div>

//     //           </div>

//     //           <button
//     //             type="submit"
//     //             className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
//     //           >
//     //             Add to bag
//     //           </button>
//     //         </form>
//     //       </div>

//     //       <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
//     //         {/* Description and details */}
//     //         <div>
//     //           <h3 className="sr-only">Description</h3>

//     //           <div className="space-y-6">
//     //             <p className="text-base text-gray-900">{product.description}</p>
//     //           </div>
//     //         </div>

//     //         <div className="mt-10">
//     //           <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

//     //           <div className="mt-4">
//     //             <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//     //               {product.highlights.map((highlight) => (
//     //                 <li key={highlight} className="text-gray-400">
//     //                   <span className="text-gray-600">{highlight}</span>
//     //                 </li>
//     //               ))}
//     //             </ul>
//     //           </div>
//     //         </div>

//     //         <div className="mt-10">
//     //           <h2 className="text-sm font-medium text-gray-900">Details</h2>

//     //           <div className="mt-4 space-y-6">
//     //             <p className="text-sm text-gray-600">{product.details}</p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className='bg-white mt-20 border'>
//        {/* <!-- Image gallery --> */}
//     <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
//       <img src={defaultImage} alt="Two" class="row-span-2 aspect-3/4 size-full object-cover" />
//     </div>
//     <div>
//        <div class="flex">
//         <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
//         <p class="text-3xl tracking-tight text-gray-900">$192</p>
//       </div>
//        {/* <!-- Reviews --> */}
//         <div class="mt-6 border">
//           <h3 class="sr-only">Reviews</h3>
//           <div class="flex items-center">
//             <div class="flex items-center">
//               {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
//               <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 shrink-0 text-gray-900">
//                 <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
//               </svg>
//               <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 shrink-0 text-gray-900">
//                 <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
//               </svg>
//               <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 shrink-0 text-gray-900">
//                 <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
//               </svg>
//               <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 shrink-0 text-gray-900">
//                 <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
//               </svg>
//               <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 shrink-0 text-gray-200">
//                 <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
//               </svg>
//             </div>
//             <p class="sr-only">4 out of 5 stars</p>
//             <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
//           </div>
//         </div>
//           <div className='mt-10 flex itmes-center justify-between'>
//                  <div className='border w-15 p-1.5'>
//                   <img src={mainBannerImage1} alt="" className='w-full h-full' />
//                 </div>
//                <div className=''>
//                    <p>size 8 x 4</p>
//                    <p>Thikness 4.4</p>
//                    <p>FaceSlin - gunjan</p>
//                 </div>
//                 <div className=''>
//                   <p>qantity</p>
//                   <div className='flex'>
//                     <AiOutlineMinusCircle/>
//                     <p>0</p>
//                     <MdAddCircleOutline/>

//                   </div>
//                    <p>stock 80</p>
//                </div>
//                  <div>
//                    <p>price</p>
//                   <p>rs 1934</p>
//                  </div>
//                </div>

//                 <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">Add to bag</button>
//     </div>
//     </div>
//   )
// }

import React, { useState } from "react";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    id: 1,
    name: "EcoBoard Premium Plywood Sheet",
    brand: "Plasto Green",
    rating: 4.3,
    reviews: 1247,
    price: 2899,
    originalPrice: 3499,
    discount: 17,
    images: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1866148/pexels-photo-1866148.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    sizes: ["Small (2x4 ft)", "Medium (4x8 ft)", "Large (5x10 ft)"],
    inStock: true,
    deliveryDate: "Tomorrow, Dec 15",
    highlights: [
      "100% Eco-friendly and sustainable",
      "Water-resistant coating",
      "Termite and borer proof",
      "ISI certified quality",
      "Smooth finish on both sides",
    ],
    specifications: {
      Material: "Eucalyptus Wood",
      Thickness: "18mm",
      Grade: "BWR (Boiling Water Resistant)",
      Finish: "Smooth",
      Certification: "ISI Certified",
      Warranty: "5 Years",
    },
  };

  const reviews = [
    {
      id: 1,
      user: "Rajesh Kumar",
      rating: 5,
      date: "Dec 10, 2024",
      comment:
        "Excellent quality plywood. Used it for my kitchen cabinets and very satisfied with the finish.",
      helpful: 12,
    },
    {
      id: 2,
      user: "Priya Sharma",
      rating: 4,
      date: "Dec 8, 2024",
      comment:
        "Good product but delivery was slightly delayed. Overall happy with the purchase.",
      helpful: 8,
    },
    {
      id: 3,
      user: "Amit Singh",
      rating: 5,
      date: "Dec 5, 2024",
      comment:
        "Best quality plywood I've used. Highly recommend for furniture making.",
      helpful: 15,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-gray-50 mt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        {/* <nav className="text-sm text-gray-600 mb-4">
          <span>Home</span> <span className="mx-2">/</span>
          <span>Building Materials</span> <span className="mx-2">/</span>
          <span>Plywood</span> <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav> */}

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg shadow-sm p-4">
              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                      selectedImage === index
                        ? "border-green-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  <svg
                    className="w-5 h-5 inline mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
                    />
                  </svg>
                  ADD TO CART
                </button>
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  <svg
                    className="w-5 h-5 inline mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Product Title and Brand */}
              <div className="mb-4">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-green-600 font-medium">by {product.brand}</p>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                  <span className="font-semibold">{product.rating}</span>
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-600">
                  ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                    {product.discount}% off
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedSize === size
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span className="font-semibold">
                    Delivery by {product.deliveryDate}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Free delivery on orders above ₹2000
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8 bg-white rounded-lg shadow-sm">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                  {tab === "reviews" && ` (${product.reviews})`}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Product Description
                </h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    The EcoBoard Premium Plywood Sheet is crafted from
                    sustainably sourced eucalyptus wood, making it an ideal
                    choice for environmentally conscious builders and furniture
                    makers. This high-quality plywood features a smooth finish
                    on both sides and is treated with water-resistant coating
                    for enhanced durability.
                  </p>
                  <p className="mb-4">
                    Perfect for interior applications including furniture
                    making, kitchen cabinets, wardrobes, and decorative panels.
                    The BWR (Boiling Water Resistant) grade ensures excellent
                    performance in humid conditions, making it suitable for
                    kitchens and bathrooms.
                  </p>
                  <p>
                    Each sheet undergoes rigorous quality testing and comes with
                    ISI certification, guaranteeing consistent quality and
                    performance. The termite and borer proof treatment ensures
                    long-lasting durability and protection against pest damage.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Technical Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-200"
                      >
                        <span className="font-medium text-gray-600">{key}</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-semibold">
                              {review.user.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {review.user}
                            </p>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-sm text-gray-500">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{review.comment}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <button className="text-gray-500 hover:text-green-600 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          Helpful ({review.helpful})
                        </button>
                        <button className="text-gray-500 hover:text-red-600">
                          Report
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
