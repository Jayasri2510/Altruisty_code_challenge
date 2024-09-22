import React from 'react'
import img1 from './image/front.png'
import it1 from './image/item1.png'
import it2 from './image/item2.png'
import it3 from './image/item3.png'
import it4 from './image/item4.png'
import a1 from './image/a1.png'
import a2 from './image/a2.png'
import a3 from './image/a3.png'
import a4 from './image/a4.png'
        
      
     function App() {
            return (
                <div className="container mx-auto p-4">
                    <header className="flex justify-between items-center py-2 border-b  bg-black pl-5 pr-5">
                        <div className="text-sm text-gray-500">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="text-blue-500">ShopNow</a></div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-500">English</a>
                            
                        </div>
                    </header>
                    <nav className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold">Exclusive</div>
                        <div className="flex space-x-8">
                            <a href="#" className="text-gray-700">Home</a>
                            <a href="#" className="text-gray-700">Contact</a>
                            <a href="#" className="text-gray-700">About</a>
                            <a href="#" className="text-gray-700">Sign Up</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <input type="text" placeholder="What are you looking for?" className="border rounded px-4 py-2"/>
                            <i className="fas fa-search text-gray-500"></i>
                            <i className="fas fa-heart text-gray-500"></i>
                            <i className="fas fa-shopping-cart text-gray-500"></i>
                        </div>
                    </nav>
                    <main className="flex">
                        <aside className="w-1/4">
                            <ul className="space-y-4">
                                <li className="text-gray-700">Woman's Fashion</li>
                                <li className="text-gray-700">Men's Fashion</li>
                                <li className="text-gray-700">Electronics</li>
                                <li className="text-gray-700">Home & Lifestyle</li>
                                <li className="text-gray-700">Medicine</li>
                                <li className="text-gray-700">Sports & Outdoor</li>
                                <li className="text-gray-700">Baby's & Toys</li>
                                <li className="text-gray-700">Groceries & Pets</li>
                                <li className="text-gray-700">Health & Beauty</li>
                            </ul>
                        </aside>
                        <section className="w-3/4">
                            <div className="relative">
                                <img src={img1} alt="iPhone 14 Series - Up to 10% off Voucher" className="w-full"/>
                                
                            </div>



                                    <div className="p-8 space-x-0 ml-0">
                    <div className="flex items-center mb-4 " >
                        <div className="bg-red-500 w-2 h-8 mr-2"></div>
                        <h2 className="text-2xl font-bold">Today's</h2>
                    </div>
                    <h1 className="text-4xl font-bold mb-8">Flash Sales</h1>
                    <div className="flex items-center mb-8">
                        <div className="text-center mx-2">
                            <div className="text-3xl font-bold">03</div>
                            <div className="text-sm">Days</div>
                        </div>
                        <div className="text-center mx-2">
                            <div className="text-3xl font-bold">23</div>
                            <div className="text-sm">Hours</div>
                        </div>
                        <div className="text-center mx-2">
                            <div className="text-3xl font-bold">19</div>
                            <div className="text-sm">Minutes</div>
                        </div>
                        <div className="text-center mx-2">
                            <div className="text-3xl font-bold">56</div>
                            <div className="text-sm">Seconds</div>
                        </div>
                    </div>
                    <div className="flex space-x-4 overflow-x-auto">
                        <div className="flex-shrink-0 w-64 p-8 border rounded-lg shadow-lg">
                            <div className="relative">
                                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">-40%</div>
                                <img src={it1} alt="Red gamepad" className="w-full h-40 object-cover mb-4"/>
                                <div className="absolute top-0 right-0 p-2">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">HAVIT HV-G92 Gamepad</h3>
                            <div className="text-red-500 text-xl font-bold">$120</div>
                            <div className="text-gray-500 line-through">$160</div>
                            <div className="flex items-center mt-2">
                                <div className="text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="text-gray-500 ml-2">(88)</div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-64 p-4 border rounded-lg shadow-lg">
                            <div className="relative">
                                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">-25%</div>
                                <img src={it2} alt="RGB keyboard" className="w-full h-40 object-cover mb-4"/>
                                <div className="absolute top-0 right-0 p-2">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">AK-900 Wired Keyboard</h3>
                            <div className="text-red-500 text-xl font-bold">$370</div>
                            <div className="text-gray-500 line-through">$400</div>
                            <div className="flex items-center mt-2">
                                <div className="text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="text-gray-500 ml-2">(75)</div>
                            </div>
                            <button className="mt-4 bg-black text-white py-2 px-4 rounded">Add To Cart</button>
                        </div>
                        <div className="flex-shrink-0 w-64 p-4 border rounded-lg shadow-lg">
                            <div className="relative">
                                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">-30%</div>
                                <img src={it3} alt="Gaming monitor" className="w-full h-40 object-cover mb-4"/>
                                <div className="absolute top-0 right-0 p-2">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">IPS LCD Gaming Monitor</h3>
                            <div className="text-red-500 text-xl font-bold">$960</div>
                            <div className="text-gray-500 line-through">$1160</div>
                            <div className="flex items-center mt-2">
                                <div className="text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="text-gray-500 ml-2">(99)</div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-64 p-4 border rounded-lg shadow-lg">
                            <div className="relative">
                                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">-25%</div>
                                <img src={it4} alt="Comfort chair" className="w-full h-40 object-cover mb-4"/>
                                <div className="absolute top-0 right-0 p-2">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">S-Series Comfort Chair</h3>
                            <div className="text-red-500 text-xl font-bold">$375</div>
                            <div className="text-gray-500 line-through">$400</div>
                            <div className="flex items-center mt-2">
                                <div className="text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="text-gray-500 ml-2">(99)</div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-64 p-4 border rounded-lg shadow-lg">
                            <div className="relative">
                                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">-25%</div>
                                <img src={it4} alt="Comfort chair" className="w-full h-40 object-cover mb-4"/>
                                <div className="absolute top-0 right-0 p-2">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">S-Series Comfort Chair</h3>
                            <div className="text-red-500 text-xl font-bold">$375</div>
                            <div className="text-gray-500 line-through">$400</div>
                            <div className="flex items-center mt-2">
                                <div className="text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="text-gray-500 ml-2">(99)</div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-64 p-4 border rounded-lg shadow-lg">
                            <div className="relative">
                                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">-25%</div>
                                <img src={it4} alt="Comfort chair" className="w-full h-40 object-cover mb-4"/>
                                <div className="absolute top-0 right-0 p-2">
                                    <i className="far fa-heart text-gray-500"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">S-Series Comfort Chair</h3>
                            <div className="text-red-500 text-xl font-bold">$375</div>
                            <div className="text-gray-500 line-through">$400</div>
                            <div className="flex items-center mt-2">
                                <div className="text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="text-gray-500 ml-2">(99)</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button className="bg-red-500 text-white py-2 px-8 rounded">View All Products</button>
                    </div>
                </div>
                <div className="p-8">
                <div className="mb-8"> 
                <div className="p-8 space-x-0 ml-0">
                    <div className="flex items-center mb-4 " >
                        <div className="bg-red-500 w-2 h-8 mr-2"></div>
                        <h2 className="text-2xl font-bold">Categories</h2>
                    </div>
                    <h1 className="text-4xl font-bold mb-8">Browse By Category</h1>
                    </div>
                    
                       
                        <div className="grid grid-cols-6 gap-4 mt-4">
                          
                        </div>
                    </div>
                    <div className="flex justify-around mb-8">
                        <div className="text-center">
                            <i className="fas fa-mobile-alt text-2xl"></i>
                            <p>Phones</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-laptop text-2xl"></i>
                            <p>Computers</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-watch text-2xl"></i>
                            <p>SmartWatch</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-camera text-2xl text-red-500"></i>
                            <p className="text-red-500">Camera</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-headphones text-2xl"></i>
                            <p>HeadPhones</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-gamepad text-2xl"></i>
                            <p>Gaming</p>
                        </div>
                    </div>
            
                    
                    
                    <div className="flex items-center mb-4 " >
                        <div className="bg-red-500 w-2 h-8 mr-2"></div>
                        <h2 className="text-2xl font-bold">This Month</h2>
                    </div>
                    <h1 className="text-4xl font-bold mb-8">Best Selling Products</h1>
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex flex-col items-center">
                            <img src={a1} alt="Red coat" className="mb-2"/>
                            <p>The north coat</p>
                            <p className="text-red-500">$260 <span className="line-through text-gray-500">$360</span></p>
                            <p className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> (65)</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={a2} alt="Gucci duffle bag" className="mb-2"/>
                            <p>Gucci duffle bag</p>
                            <p className="text-red-500">$960 <span className="line-through text-gray-500">$1160</span></p>
                            <p className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> (65)</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={a3} alt="RGB liquid CPU Cooler" className="mb-2"/>
                            <p>RGB liquid CPU Cooler</p>
                            <p className="text-red-500">$160 <span className="line-through text-gray-500">$170</span></p>
                            <p className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> (65)</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={a4} alt="Small BookSelf" className="mb-2"/>
                            <p>Small BookSelf</p>
                            <p className="text-red-500">$360</p>
                            <p className="text-yellow-500"><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> (65)</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-red-500 text-white py-2 px-4 rounded">View All</button>
                    </div>
                    
                    </div>
                        </section>
                                
    
                    </main>

                    

                </div>
                
                
            );
        
          }

export default App;
