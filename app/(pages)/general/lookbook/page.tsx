// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight, Instagram, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import styles from "./Lookbook.module.scss";

// interface LookbookCategory {
//   id: number;
//   title: string;
//   description: string;
//   images: LookbookImage[];
// }

// interface LookbookImage {
//   id: number;
//   src: string;
//   alt: string;
//   featured?: boolean;
//   season?: string;
// }

// const Lookbook: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<number>(0);
//   const [showInfo, setShowInfo] = useState<boolean>(false);

//   const categories: LookbookCategory[] = [
//     {
//       id: 1,
//       title: "Summer 2024",
//       description:
//         "Explore our latest summer collection, featuring breathable fabrics and vibrant colors perfect for the warmer months.",
//       images: [
//         {
//           id: 1,
//           src: "/placeholder.svg",
//           alt: "Summer collection - Beach wear",
//           featured: true,
//           season: "Summer 2024",
//         },
//         {
//           id: 2,
//           src: "/placeholder.svg",
//           alt: "Summer collection - Casual outfit",
//           season: "Summer 2024",
//         },
//         {
//           id: 3,
//           src: "/placeholder.svg",
//           alt: "Summer collection - Evening outfit",
//           season: "Summer 2024",
//         },
//         {
//           id: 4,
//           src: "/placeholder.svg",
//           alt: "Summer collection - Swimwear",
//           season: "Summer 2024",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Fall 2024",
//       description:
//         "Our Fall collection embraces earthy tones and layered looks that transition seamlessly from day to night.",
//       images: [
//         {
//           id: 5,
//           src: "/placeholder.svg",
//           alt: "Fall collection - Outerwear",
//           featured: true,
//           season: "Fall 2024",
//         },
//         {
//           id: 6,
//           src: "/placeholder.svg",
//           alt: "Fall collection - Knitwear",
//           season: "Fall 2024",
//         },
//         {
//           id: 7,
//           src: "/placeholder.svg",
//           alt: "Fall collection - Formal wear",
//           season: "Fall 2024",
//         },
//         {
//           id: 8,
//           src: "/placeholder.svg",
//           alt: "Fall collection - Accessories",
//           season: "Fall 2024",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "Winter 2024",
//       description:
//         "Stay warm and stylish with our Winter essentials, designed with premium materials for maximum comfort.",
//       images: [
//         {
//           id: 9,
//           src: "/placeholder.svg",
//           alt: "Winter collection - Coats",
//           featured: true,
//           season: "Winter 2024",
//         },
//         {
//           id: 10,
//           src: "/placeholder.svg",
//           alt: "Winter collection - Sweaters",
//           season: "Winter 2024",
//         },
//         {
//           id: 11,
//           src: "/placeholder.svg",
//           alt: "Winter collection - Boots",
//           season: "Winter 2024",
//         },
//         {
//           id: 12,
//           src: "/placeholder.svg",
//           alt: "Winter collection - Scarves",
//           season: "Winter 2024",
//         },
//       ],
//     },
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <div className={styles.lookbookContainer}>
//       {/* Header */}
//       <header className={styles.lookbookHeader}>
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex justify-between items-center">
//             <Link to="/" className={styles.logoContainer}>
//               <h1 className={styles.logo}>NOYR</h1>
//             </Link>
//             <div className="flex items-center space-x-6">
//               <Link to="/" className="text-gray-800 hover:text-black">
//                 Home
//               </Link>
//               <Link to="/" className="text-gray-800 hover:text-black">
//                 Shop
//               </Link>
//               <Link to="/lookbook" className="text-black font-semibold">
//                 Lookbook
//               </Link>
//               <Link to="/" className="text-gray-800 hover:text-black">
//                 About
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className={styles.lookbookHero}>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="container mx-auto px-4 py-20 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">NOYR Lookbook</h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto">
//             Discover our seasonal collections and latest styles.
//           </p>
//         </motion.div>
//       </section>

//       {/* Category Navigation */}
//       <section className={styles.categoryNav}>
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex justify-center space-x-8 border-b border-gray-200 pb-4">
//             {categories.map((category, index) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(index)}
//                 className={`${
//                   activeCategory === index
//                     ? "text-black border-b-2 border-black"
//                     : "text-gray-500 hover:text-black"
//                 } pb-2 transition-all duration-300 font-medium`}
//               >
//                 {category.title}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Image */}
//       <section className={styles.featuredImage}>
//         <div className="container mx-auto px-4 py-8">
//           {categories[activeCategory].images
//             .filter((img) => img.featured)
//             .map((image) => (
//               <motion.div
//                 key={image.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg"
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <h2 className="text-3xl md:text-5xl font-bold mb-4">
//                       {categories[activeCategory].title}
//                     </h2>
//                     <Button
//                       variant="outline"
//                       className="bg-white text-black border-white hover:bg-black hover:text-white"
//                       onClick={() => setShowInfo(!showInfo)}
//                     >
//                       {showInfo ? "Hide Details" : "Collection Details"}
//                       <ChevronDown
//                         className={`ml-2 h-4 w-4 transition-transform ${
//                           showInfo ? "rotate-180" : ""
//                         }`}
//                       />
//                     </Button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//         </div>
//       </section>

//       {/* Collection Info */}
//       {showInfo && (
//         <motion.section
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: "auto" }}
//           exit={{ opacity: 0, height: 0 }}
//           transition={{ duration: 0.3 }}
//           className={styles.collectionInfo}
//         >
//           <div className="container mx-auto px-4 py-8">
//             <div className="bg-gray-100 p-8 rounded-lg">
//               <h3 className="text-2xl font-semibold mb-4">
//                 {categories[activeCategory].title}
//               </h3>
//               <p className="text-gray-700 mb-6">
//                 {categories[activeCategory].description}
//               </p>
//               <div className="flex justify-between items-center">
//                 <Button variant="outline" className="flex items-center">
//                   Shop This Collection <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//                 <a
//                   href="https://instagram.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-black flex items-center"
//                 >
//                   <Instagram className="mr-2 h-5 w-5" /> Follow Our Instagram
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       )}

//       {/* Image Gallery Carousel */}
//       <section className={styles.imageGallery}>
//         <div className="container mx-auto px-4 py-16">
//           <h2 className="text-2xl font-semibold mb-10 text-center">
//             {categories[activeCategory].title} Gallery
//           </h2>
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             className="w-full"
//           >
//             <CarouselContent>
//               {categories[activeCategory].images.map((image) => (
//                 <CarouselItem
//                   key={image.id}
//                   className="md:basis-1/2 lg:basis-1/3"
//                 >
//                   <div className="p-1">
//                     <div className="overflow-hidden rounded-lg">
//                       <motion.img
//                         whileHover={{ scale: 1.05 }}
//                         transition={{ duration: 0.3 }}
//                         src={image.src}
//                         alt={image.alt}
//                         className="w-full aspect-[3/4] object-cover"
//                       />
//                     </div>
//                     <div className="mt-3">
//                       <p className="text-sm text-gray-500">{image.season}</p>
//                       <p className="font-medium">{image.alt}</p>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="flex justify-center mt-8">
//               <CarouselPrevious className="relative -left-0 mr-4" />
//               <CarouselNext className="relative -right-0" />
//             </div>
//           </Carousel>
//         </div>
//       </section>

//       {/* Grid Gallery */}
//       <section className={styles.gridGallery}>
//         <div className="container mx-auto px-4 py-16">
//           <h2 className="text-2xl font-semibold mb-10 text-center">
//             Explore More Styles
//           </h2>
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {categories
//               .flatMap((cat) => cat.images.slice(0, 2))
//               .slice(0, 6)
//               .map((image) => (
//                 <motion.div
//                   key={image.id}
//                   variants={fadeInUp}
//                   className="overflow-hidden rounded-lg"
//                 >
//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full aspect-[3/4] object-cover"
//                   />
//                 </motion.div>
//               ))}
//           </motion.div>
//           <div className="text-center mt-12">
//             <Button className="bg-black text-white hover:bg-gray-800">
//               View All Collections
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className={styles.newsletter}>
//         <div className="container mx-auto px-4 py-16">
//           <div className="bg-gray-100 p-8 md:p-16 rounded-lg text-center">
//             <h2 className="text-2xl md:text-3xl font-semibold mb-4">
//               Stay Updated
//             </h2>
//             <p className="text-gray-700 mb-8 max-w-xl mx-auto">
//               Subscribe to our newsletter to receive early access to new
//               collections, exclusive offers, and styling inspiration.
//             </p>
//             <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
//               />
//               <Button className="bg-black text-white hover:bg-gray-800">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className={styles.footer}>
//         <div className="container mx-auto px-4 py-12">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <h1 className="text-2xl font-bold">NOYR</h1>
//               <p className="text-gray-600 mt-2">Elevate Your Style</p>
//             </div>
//             <div className="flex space-x-8">
//               <Link to="/" className="text-gray-700 hover:text-black">
//                 Home
//               </Link>
//               <Link to="/" className="text-gray-700 hover:text-black">
//                 Shop
//               </Link>
//               <Link to="/lookbook" className="text-gray-700 hover:text-black">
//                 Lookbook
//               </Link>
//               <Link to="/" className="text-gray-700 hover:text-black">
//                 About
//               </Link>
//             </div>
//           </div>
//           <div className="border-t border-gray-200 mt-8 pt-8 text-center">
//             <p className="text-gray-600">
//               © {new Date().getFullYear()} NOYR Clothing. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Lookbook;
