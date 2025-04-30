import { Images } from "assets";
import { StaticImageData } from "next/image";
import { routeConstant } from "routes/constants";

export type Product = {
  id: string;
  name: string;
  price: string;
  color: string;
  colorsAvailable: string;
  image: StaticImageData;
  hoverImage: StaticImageData;
  images: StaticImageData[];
  category: "shirts" | "trousers" | "jeans";
  isNew?: boolean;
  description: string;
  sizes: string[];
  materials: string;
  fit: string;
  productCode: string;
  modelInfo: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Beyond Streets T-Shirt",
    color: "Charcoal Grey",
    colorsAvailable: "1",
    price: "$89",
    image: Images.Cat1_P1_Collection_1,
    hoverImage: Images.Cat1_P1_Collection_2,
    images: [
      Images.Shirts_Product1_1,
      Images.Shirts_Product1_2,
      Images.Shirts_Product1_3,
      Images.Shirts_Product1_4,
    ],
    category: "shirts",
    isNew: true,
    description:
      'Add some edge to your look with the Beyond Streets T-Shirt. This charcoal grey piece features a bold graphic on the back showcasing a distressed, city-inspired design with "Beyond Streets" written across it. The front of the shirt remains minimalist, with a subtle logo on the chest for added contrast. Crafted from soft, medium-weight cotton, this shirt is designed for both comfort and style, making it a must-have addition to your wardrobe.',
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Slightly Oversized Fit",
    productCode: "BST-001",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "2",
    name: "Beyond Classic Shirt",
    color: "Soft White",
    colorsAvailable: "1",
    price: "$129",
    image: Images.Cat1_P2_Collection_1,
    hoverImage: Images.Cat1_P2_Collection_2,
    images: [
      Images.Shirts_Product2_1,
      Images.Shirts_Product2_2,
      Images.Shirts_Product2_3,
      Images.Shirts_Product2_4,
    ],
    category: "shirts",
    description:
      "Keep it fresh and relaxed with the Beyond Classic Shirt in soft white. This lightweight shirt features a striking contrast of black buttons that give it a modern, edgy vibe. The subtle embroidered detailing adds a touch of sophistication to the overall design. The lapels are neatly tailored, enhancing the clean, crisp look of the shirt. The breathable fabric and relaxed fit make it perfect for warmer days while keeping you stylish.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Relaxed Fit",
    productCode: "BCS-001",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "3",
    name: "Onyx Textured Black",
    color: "Onyx Black",
    colorsAvailable: "1",
    price: "$139",
    image: Images.Cat1_P3_Collection_1,
    hoverImage: Images.Cat1_P3_Collection_2,
    images: [
      Images.Shirts_Product3_1,
      Images.Shirts_Product3_2,
      Images.Shirts_Product3_3,
      Images.Shirts_Product3_4,
    ],
    category: "shirts",
    description:
      "Keep it sleek and stylish with the Onyx Textured Black. This shirt is all about the details. The crisp, tailored lapels and perfectly positioned black buttons create a clean, sharp look that can be dressed up or down. Its lightweight, textured fabric adds an extra dimension of sophistication while offering exceptional comfort and breathability.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Relaxed Fit",
    productCode: "OTB-001",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "4",
    name: "Coastal Breeze Shirt",
    color: "Cadet Blue",
    colorsAvailable: "1",
    price: "$119",
    image: Images.Cat1_P4_Collection_1,
    hoverImage: Images.Cat1_P4_Collection_2,
    images: [
      Images.Shirts_Product4_1,
      Images.Shirts_Product4_2,
      Images.Shirts_Product4_3,
      Images.Shirts_Product4_4,
    ],
    category: "shirts",
    description:
      "Bring effortless cool to your wardrobe with the Coastal Breeze Shirt in Soft Blue. Crafted from lightweight cotton, this shirt in Soft Blue features a subtle striped texture and contrast black buttons. Designed with a relaxed fit, it's perfect for casual, everyday wear. The chest pocket adds a functional touch, while the breathable fabric ensures comfort all day.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Relaxed Fit",
    productCode: "CBS-001",
    modelInfo: "Model is 5'6 and 70kg, wearing size M",
  },
  {
    id: "5",
    name: "Canyon Button-down Shirt",
    color: "Brown",
    colorsAvailable: "1",
    price: "$129",
    image: Images.Cat1_P5_Collection_1,
    hoverImage: Images.Cat1_P5_Collection_2,
    images: [
      Images.Shirts_Product5_1,
      Images.Shirts_Product5_2,
      Images.Shirts_Product5_3,
      Images.Shirts_Product5_4,
    ],
    category: "shirts",
    description:
      "Made from lightweight cotton, this shirt features a rich brown colour with a subtle texture, giving it a modern yet relaxed look. The button-down front, paired with a front pocket, adds functional detail while the open collar and relaxed fit ensure all-day comfort. Whether you're pairing it with neutral trousers or adding a pop of colour, this shirt easily adapts to your style.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Relaxed Fit",
    productCode: "CBDS-001",
    modelInfo: "Model is 5'6 and 70kg, wearing size M",
  },
  {
    id: "6",
    name: "Desert Breeze Shirt",
    color: "Spanish Beige",
    colorsAvailable: "1",
    price: "$129",
    image: Images.Cat1_P6_Collection_1,
    hoverImage: Images.Cat1_P6_Collection_2,
    images: [
      Images.Shirts_Product6_1,
      Images.Shirts_Product6_2,
      Images.Shirts_Product6_3,
      Images.Shirts_Product6_4,
    ],
    category: "shirts",
    description:
      "The Desert Breeze Shirt in Spanish Beige brings a fresh take on classic style. Made from a textured cotton fabric, this shirt offers a subtle depth to the light colour, adding sophistication to your everyday look. Featuring a relaxed fit with a button-down front, the shirt combines comfort and style effortlessly. The black contrast buttons give it a modern edge, while the breathable fabric ensures comfort, making it perfect for casual outings or laid-back events.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Relaxed Fit",
    productCode: "DBS-001",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "7",
    name: "Slate Grey Shirt",
    color: "Slate Grey",
    colorsAvailable: "1",
    price: "$129",
    image: Images.Cat1_P7_Collection_1,
    hoverImage: Images.Cat1_P7_Collection_2,
    images: [
      Images.Shirts_Product7_1,
      Images.Shirts_Product7_2,
      Images.Shirts_Product7_3,
      Images.Shirts_Product7_4,
    ],
    category: "shirts",
    description:
      "The Slate Shirt in Slate Grey is the perfect balance of modern style and comfort. Made from soft, textured cotton, this shirt offers a unique look with a sophisticated grey tone and subtle texture. Designed with a relaxed fit, it features a button-down front with contrasting black buttons for a refined touch. Ideal for any casual occasion, the breathable fabric ensures all-day wearability while keeping your look fresh and effortless.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Relaxed Fit",
    productCode: "SGS-001",
    modelInfo: "Model is 188cm and 75kg, wearing size M",
  },
  {
    id: "8",
    name: "Soft Drift Trousers in Cadet Blue",
    color: "Cadet Blue",
    colorsAvailable: "6",
    price: "$129",
    image: Images.Cat2_P1_Collection_1,
    hoverImage: Images.Cat2_P1_Collection_2,
    images: [
      Images.Trousers_Product1_1,
      Images.Trousers_Product1_2,
      Images.Trousers_Product1_3,
      Images.Trousers_Product1_4,
    ],
    category: "trousers",
    isNew: true,
    description:
      "The Soft Drift Trousers in Crisp White are made from Spendix Georgette fabric, known for its softness and breathability. These trousers feature a wide-leg fit with a pintuck detail along the front. The waistband is elasticated with an internal drawstring for a customizable fit. They come with side pockets and split hems, giving you both comfort and utility in one simple design.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Spendix Georgette",
    fit: "Wide leg, relaxed",
    productCode: "SDT-001",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "9",
    name: "Soft Drift Trousers in Reddish Brown",
    color: "Reddish Brown",
    colorsAvailable: "6",
    price: "$129",
    image: Images.Cat2_P2_Collection_1,
    hoverImage: Images.Cat2_P2_Collection_2,
    images: [
      Images.Trousers_Product2_1,
      Images.Trousers_Product2_2,
      Images.Trousers_Product2_3,
      Images.Trousers_Product2_4,
    ],
    category: "trousers",
    description:
      "The Soft Drift Trousers in Crisp White are made from Spendix Georgette fabric, known for its softness and breathability. These trousers feature a wide-leg fit with a pintuck detail along the front. The waistband is elasticated with an internal drawstring for a customizable fit. They come with side pockets and split hems, giving you both comfort and utility in one simple design.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Spendix Georgette",
    fit: "Wide leg, relaxed",
    productCode: "SDT-002",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "10",
    name: "Soft Drift Trousers in Soft White",
    color: "Soft White",
    colorsAvailable: "6",
    price: "$129",
    image: Images.Cat2_P3_Collection_1,
    hoverImage: Images.Cat2_P3_Collection_2,
    images: [
      Images.Trousers_Product3_1,
      Images.Trousers_Product3_2,
      Images.Trousers_Product3_3,
      Images.Trousers_Product3_4,
    ],
    category: "trousers",
    description:
      "The Soft Drift Trousers in Crisp White are made from Spendix Georgette fabric, known for its softness and breathability. These trousers feature a wide-leg fit with a pintuck detail along the front. The waistband is elasticated with an internal drawstring for a customizable fit. They come with side pockets and split hems, giving you both comfort and utility in one simple design.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Spendix Georgette",
    fit: "Wide leg, relaxed",
    productCode: "SDT-003",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "11",
    name: "Soft Drift Trousers in Charcoal Black",
    color: "Charcoal Black",
    colorsAvailable: "6",
    price: "$129",
    image: Images.Cat2_P4_Collection_1,
    hoverImage: Images.Cat2_P4_Collection_2,
    images: [
      Images.Trousers_Product4_1,
      Images.Trousers_Product4_2,
      Images.Trousers_Product4_3,
      Images.Trousers_Product4_4,
    ],
    category: "trousers",
    description:
      "The Soft Drift Trousers in Crisp White are made from Spendix Georgette fabric, known for its softness and breathability. These trousers feature a wide-leg fit with a pintuck detail along the front. The waistband is elasticated with an internal drawstring for a customizable fit. They come with side pockets and split hems, giving you both comfort and utility in one simple design.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Spendix Georgette",
    fit: "Wide leg, relaxed",
    productCode: "SDT-004",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "12",
    name: "Soft Drift Trousers in Spanish White",
    color: "Spanish White",
    colorsAvailable: "6",
    price: "$129",
    image: Images.Cat2_P5_Collection_1,
    hoverImage: Images.Cat2_P5_Collection_2,
    images: [
      Images.Trousers_Product5_1,
      Images.Trousers_Product5_2,
      Images.Trousers_Product5_3,
      Images.Trousers_Product5_4,
    ],
    category: "trousers",
    description:
      "The Soft Drift Trousers in Crisp White are made from Spendix Georgette fabric, known for its softness and breathability. These trousers feature a wide-leg fit with a pintuck detail along the front. The waistband is elasticated with an internal drawstring for a customizable fit. They come with side pockets and split hems, giving you both comfort and utility in one simple design.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Spendix Georgette",
    fit: "Wide leg, relaxed",
    productCode: "SDT-005",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "13",
    name: "Raging Storm Baggy Denim",
    color: "Faded Black",
    colorsAvailable: "1",
    price: "$149",
    image: Images.Cat3_P1_Collection_1,
    hoverImage: Images.Cat3_P1_Collection_2,
    images: [Images.Jeans_Product1_1, Images.Jeans_Product1_2],
    category: "jeans",
    isNew: true,
    description:
      "The Raging Storm Baggy Denim Jeans in Faded Black offer a bold, relaxed fit with a rugged, worn-in look. Made from soft denim, these jeans feature a heavy wash with stress area tacking and a slight whiskering effect. The zip fly and belt loops provide a classic feel, while the embroidered logo on the back pocket adds a modern touch. These baggy jeans are perfect for pairing with casual wear for a laid-back, stylish vibe.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Baggy, Straight, Wide-Legged",
    productCode: "RSD-001",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
  {
    id: "14",
    name: "Horizon Blue Baggy Denim",
    color: "Light Blue",
    colorsAvailable: "1",
    price: "$149",
    image: Images.Cat3_P2_Collection_1,
    hoverImage: Images.Cat3_P2_Collection_2,
    images: [Images.Jeans_Product2_1, Images.Jeans_Product2_2],
    category: "jeans",
    description:
      "The Horizon Blue Baggy Denim Jeans in Light Blue are designed for with a relaxed, wide-legged fit and soft, textured denim, these jeans feature a classic blue wash with a slightly faded look. The jeans are accented with stress area tacking and a subtle whiskering effect. The embroidered logo on the back pocket adds a touch of modern detailing, making these baggy jeans a versatile choice for casual outings.",
    sizes: ["S", "M", "L", "XL"],
    materials: "100% Cotton",
    fit: "Baggy, Straight, Wide-Legged",
    productCode: "HBD-001",
    modelInfo: "Model is 5'11 and 80kg, wearing size M",
  },
];

const headerLinks: SideBarItemPathType[] = [
  {
    path: "",
    title: routeConstant.shop.title,
    children: [
      {
        path: routeConstant.collections.path + "?shirts",
        title: routeConstant.shirts.title,
      },
      {
        path: routeConstant.collections.path + "?trousers",
        title: routeConstant.trousers.title,
      },
      {
        path: routeConstant.collections.path + "?jeans",
        title: routeConstant.jeans.title,
      },
      {
        path: routeConstant.collections.path,
        title: routeConstant.collections.title,
      },
    ],
  },
  {
    path: "",
    title: routeConstant.brand.title,
    children: [
      {
        path: routeConstant.lookbook.path,
        title: routeConstant.lookbook.title,
      },
      {
        path: routeConstant.about.path,
        title: routeConstant.about.title,
      },
    ],
  },
  {
    path: "",
    title: routeConstant.info.title,
    children: [
      {
        path: routeConstant.contact.path,
        title: routeConstant.contact.title,
      },
      {
        path: routeConstant.termsAndConditions.path,
        title: routeConstant.termsAndConditions.title,
      },
      {
        path: routeConstant.shippingAndReturns.path,
        title: routeConstant.shippingAndReturns.title,
      },
    ],
  },
];

export { headerLinks, products };
