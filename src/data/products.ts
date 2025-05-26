export interface Product {
  id: number;
  name: string;
  price: number | { min: number; max: number };
  image: string;
  category: string;
  description?: string;
  sizes?: number[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Berrykey Men Lightweight Winter Varsity Jacket - White",
    price: 5555,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/183283/1.jpg?2230",
    category: "men"
  },
  {
    id: 2,
    name: "TOUPHY Denim Jacket Korean Casual Jacket Youth Trend Hooded Couple-Light Blue",
    price: {
      min: 12490,
      max: 13142
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/4052711/1.jpg?6960",
    category: "men"
  },
  {
    id: 3,
    name: "Berrykey Men's Trendy Zipper Turtleneck Long Sleeve Varsity Jackets Sport Coats - White",
    price: {
      min: 6665,
      max: 7218
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/849377/1.jpg?1492",
    category: "men"
  },
  {
    id: 4,
    name: "Summer Windproof Thin Men's Fashionable Jacket, Baseball Jacket Style - Black",
    price: 9350,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/5152093/1.jpg?2315",
    category: "men"
  },
  {
    id: 5,
    name: "Summer Thin Men's Fashionable Baseball Jacket Windproof Thin Jacket - Black",
    price: 9979,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/6642093/1.jpg?4846",
    category: "men"
  },
  {
    id: 6,
    name: "Summer Thin Men's Fashionable Baseball Jacket Windproof Thin Jacket - Blue",
    price: 7906,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/0152093/1.jpg?7605",
    category: "men"
  },
  {
    id: 7,
    name: "ASHION Men's Varsity Jacket - Stylish, Comfortable, Durable With Free Necklace",
    price: 12123,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/7281163/1.jpg?9336",
    category: "men"
  },
  {
    id: 8,
    name: "Berrykey Men's Casual Windbreak Lightweight Blazer Zipper Jacket & Coats - Dark Gray",
    price: 7980,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/685307/1.jpg?8984",
    category: "men"
  },
  {
    id: 9,
    name: "Urban Classics Leather Sleeve Versity Jacket",
    price: 12999,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/8707172/1.jpg?4469",
    category: "men"
  },
  {
    id: 10,
    name: "Men's Casual Button Down Denim Jacket Classic Jean Coat",
    price: {
      min: 17828,
      max: 18500
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/4600173/1.jpg?9826",
    category: "men"
  },
  {
    id: 11,
    name: "Black And Brown Hoodie And Joggers With Print",
    price: {
      min: 17000,
      max: 18000
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/6398262/1.jpg?2382",
    category: "women"
  },
  {
    id: 12,
    name: "Unisex Joggers Up And Down Wine SweatShirt",
    price: {
      min: 15500,
      max: 20000
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/8399081/1.jpg?0159",
    category: "women"
  },
  {
    id: 13,
    name: "Women Pullover Letter Printed Hoodie - Khaki",
    price: 8829,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/6988033/1.jpg?7505",
    category: "women"
  },
  {
    id: 14,
    name: "Black Sweatshirt Smile Prints",
    price: 11000,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/500546/1.jpg?1408",
    category: "women"
  },
  {
    id: 15,
    name: "Danami Crop Hoodie With Brooklyn New York Print - Fuchsia Pink",
    price: {
      min: 13900,
      max: 15900
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/3565952/1.jpg?0147",
    category: "women"
  },
  {
    id: 16,
    name: "Black, Wine And Off White Patch Sweatshirt",
    price: 12000,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/305746/1.jpg?0752",
    category: "women"
  },
  {
    id: 17,
    name: "Danami Women's Long Sleeve Hoodie- Pink",
    price: {
      min: 13900,
      max: 17900
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/823254/1.jpg?5380",
    category: "women"
  },
  {
    id: 18,
    name: "Danami Tie & Die Printed Crop Hoodie- Black",
    price: {
      min: 11900,
      max: 13900
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/492317/1.jpg?3884",
    category: "women"
  },
  {
    id: 19,
    name: "Danami Crop Hoodie With Brooklyn New York Print - Black",
    price: {
      min: 13900,
      max: 15900
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/1806952/1.jpg?0559",
    category: "women"
  },
  {
    id: 20,
    name: "Quality Styled Black Hoodie & Joggers With White Print",
    price: {
      min: 17000,
      max: 18000
    },
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/8259011/1.jpg?7709",
    category: "women"
  },
  {
    id: 21,
    name: "Feng Shui Pixiu Obsidian Stone Wealth Bracelet Ring Set",
    price: 3550,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/7501112/1.jpg?5124",
    category: "Unisex Accessories"
  },
  {
    id: 22,
    name: "Mateamoda Couple Watches Men Watches Women Watchs",
    price: 5660,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/0048372/1.jpg?9832",
    category: "Unisex Accessories"
  },
  {
    id: 23,
    name: "Wazobia PERFUME EDP 100ML FOR MEN AND WOMEN",
    price: 15600,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/0524292/1.jpg?5091",
    category: "Unisex Accessories"
  },
  {
    id: 24,
    name: "Geneva Unisex Rhinestone Casual Wrist Watch With Bracelet- Gold",
    price: 4499,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/183252/1.jpg?6676",
    category: "Unisex Accessories"
  },
  {
    id: 25,
    name: "Elastic Couple Wristwatch",
    price: 5500,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/9776162/1.jpg?0063",
    category: "Unisex Accessories"
  },
  {
    id: 26,
    name: "Orlando Couple Black Dial Elegant Wristwatch - Silver & Gold",
    price: 9999,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/169254/1.jpg?1418",
    category: "Unisex Accessories"
  },
  {
    id: 27,
    name: "Lattafa Pure Asad Bourbon Eau De Parfum Spray",
    price: 30000,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/5273704/1.jpg?0897",
    category: "Unisex Accessories"
  },
  {
    id: 28,
    name: "Geneva Full Steel Crystal Rhynestone Unisex Wrist Watch-Gold",
    price: 3499,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/35585/1.jpg?5634",
    category: "Unisex Accessories"
  },
  {
    id: 29,
    name: "LED Silicone Digital Sports Electronic Wristwatch - Unisex",
    price: 2998,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/595395/1.jpg?8550",
    category: "Unisex Accessories"
  },
  {
    id: 30,
    name: "UNISEX DIGITAL LED ELECTRONIC FASHION WRISTWATCH",
    price: 4500,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/3689332/1.jpg?1294",
    category: "Unisex Accessories"
  },
  {
    id: 31,
    name: "C Watch Couple's Elegant Wrist Watch Set",
    price: 7800,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/715362/1.jpg?7249",
    category: "Unisex Accessories"
  },
  {
    id: 32,
    name: "Lattafa Oud Ana Abiyedh ( I Am White) 100ml Oud Perfume By Lattafa",
    price: 18500,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/2752221/1.jpg?2286",
    category: "Unisex Accessories"
  },
  {
    id: 33,
    name: "Keep Moving Best Seller/Never Fading Silver Studded Wrist Watch + Hand Chain + Necklace + Ring For Big Boys",
    price: 29599,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/5135441/1.jpg?0035",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 34,
    name: "Best Seller Non Fade Jeans For Men - Blue",
    price: 18000,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/4290483/1.jpg?2130",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 35,
    name: "Best Seller/Never Fading Dual Timer Gold Wrist Watch + Hand Chain + Necklace + Ring For Big Boys",
    price: 35999,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/403437/1.jpg?8806",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 36,
    name: "Best Seller Anti-theft Unisex Cross Bag",
    price: 82500,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/1935293/1.jpg?0364",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 37,
    name: "Keep Moving Best Seller/Sophisticated Silver Studded Wrist Watch + Hand Chain + Studded Necklace -Unisex",
    price: 29999,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/7845441/1.jpg?4899",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 38,
    name: "Best Seller 2022 New Creative 3d Digital Black And White Grid Collage Pattern Flap Holiday Leisure Short Sleeves Shirt S - 5xl",
    price: 42888,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/7075972/1.jpg?2808",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 39,
    name: "Harem Pants Adjusted For Men Hip-Hop Style Shots Little Feet Trousers Fashion Brand Fashion Brand Best Sellers Autumn",
    price: 17049,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/4783221/1.jpg?5900",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 40,
    name: "(full Black)Men's Sports Shoes Springtime New Casual Fashion Round Toe Lightweight Best Sellers In",
    price: 32469,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/5450452/1.jpg?2445",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 41,
    name: "Best Seller 2022 New Creative Beach 3d Digital Printing Music Sacks Flap Vacation Leisure Short Sleeves Shirt S - 5xl",
    price: 46292,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/4181882/1.jpg?2374",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 42,
    name: "(black And White)Men's Sports Shoes Springtime New Casual Fashion Round Toe Lightweight Best Seller",
    price: 32469,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/5450452/1.jpg?2441",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 43,
    name: "Street Style Casual Hoodie with White Snake Big V Print Men's Best Sellers Men and Women Couples Fleece Casual Hoodie",
    price: 57381,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/7118952/1.jpg?6426",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 44,
    name: "Best Seller Camp Jupiter SPQR Merchandise Essential T Shirt Cowboy Hat sun hat Sun Cap Men Golf Wear Women's",
    price: 47461,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/8788962/1.jpg?6235",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 45,
    name: "Street Style Casual Hoodie With White Snake Big V Print Men's Best Sellers Men And Women Couples Fleece Casual Hoodie",
    price: 57381,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/7877952/1.jpg?2530",
    category: "Limited Drops and Bestsellers"
  },
  {
    id: 46,
    name: "Best Seller 2022 New Creative Beach 3d Digital Printing Music Sacks Flap Vacation Leisure Short Sleeves Shirt S - 5xl",
    price: 43548,
    image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/0375972/1.jpg?4196",
    category: "Limited Drops and Bestsellers"
  }
]; 