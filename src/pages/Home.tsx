import React, { useEffect, useState, useRef } from 'react';
import heroImage from '../assets/heroImage.png';
import shoeImageMen from '../assets/products/men/menShoes1.png'
import hoodieMen from '../assets/products/men/menhoodie.jpg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { products } from '../data/products'

const Home = () => {
    const [searchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState<string>("Men".toLowerCase())
    const [activeProducts, setActiveProducts] = useState<any[]>([])
    const productsSectionRef = useRef<HTMLDivElement>(null);
    const topSectionRef = useRef<HTMLDivElement>(null);
    
    const categories = [
        'Men',
        'Women',
        'Unisex Accessories',
        // 'Youth and Kids Corner',
        'Limited Drops and Bestsellers',
    ];

    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl) {
            // Decode the URL-encoded category name
            const decodedCategory = decodeURIComponent(categoryFromUrl);
            // Find the matching category (case-insensitive)
            const category = categories.find(cat => 
                cat.toLowerCase() === decodedCategory.toLowerCase()
            );
            if (category) {
                handleCategoryChange(category);
                // Scroll to products section
                productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If no category is selected, scroll to top
            topSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchParams]);

    useEffect(() => {
        let prods = products.filter(product => 
            product.category.toLowerCase() === activeCategory.toLowerCase()
        );
        setActiveProducts(prods);
    }, [activeCategory]);

    const navigate = useNavigate();

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category.toLowerCase());
        let prods = products.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );
        setActiveProducts(prods);
    };

    const handleShopNowClick = () => {
        productsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section ref={topSectionRef} className="min-h-screen grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 py-10">
                {/* Text Content */}
                <div className="flex flex-col justify-center gap-8">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                        Welcome to Kazzin Digital
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700">
                        Your one-stop fashion destination for style that speaks. From everyday essentials to bold statement pieces, we bring you quality, affordability, and the trendiest looks — all at your fingertips.
                    </p>
                    <button 
                        onClick={handleShopNowClick}
                        className="bg-black text-white px-6 py-3  w-max hover:bg-gray-800 transition"
                    >
                        Shop Now
                    </button>
                </div>

                {/* Hero Image */}
                <div className="hidden md:flex items-center justify-center">
                    <img src={heroImage} alt="Hero" className="max-w-full h-auto" />
                </div>
            </section>

            {/* Best Selling Section */}
            <section ref={productsSectionRef} className="px-6 md:px-16 py-16 bg-white">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-4">
                        <div className="hidden md:block h-1 w-20 bg-black" />
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Best Selling</h2>
                        <div className="hidden md:block h-1 w-20 bg-black" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            onClick={() => handleCategoryChange(category)}
                            key={category}
                            className={`${activeCategory === category.toLowerCase() ? 'bg-black text-white' : 'bg-white text-black'} shadow-sm py-3 border text-center hover:shadow-md transition cursor-pointer`}
                        >
                            <p className="text-lg font-medium">{category}</p>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-16">
                    {activeProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-center text-center"
                            onClick={() => navigate(`/products/${product.id}`, { state: { product } })}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-40 w-40 object-contain mb-4"
                            />
                            <p className="text-md text-gray-700 mb-1">{product.name}</p>
                            <p className="font-semibold text-gray-600 mb-3">&#8358;{product.price.max ? product.price.max : product.price.toLocaleString()}</p>

                            {/* Add to Cart */}
                            <button
                                onClick={() => console.log('Add to cart:', product.id)}
                                className="text-sm text-white bg-black px-4 py-2 hover:bg-gray-800 transition"
                            >
                                View product
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
