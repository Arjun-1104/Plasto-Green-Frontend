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
