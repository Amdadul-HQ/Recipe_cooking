
import './Header.css'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
    return (
        <header className='max-w-[1320px] mx-auto mb-28 lg:px-0 px-4'>
            <nav className='lg:flex justify-between items-center py-12 lg:space-y-0 space-y-4'>
                <h1 className='text-[rgb(21,11,43)] text-3xl lg:text-left text-center font-bold cursor-pointer'>Recipe Cooking</h1>
                <ul className='lg:flex hidden text-lg text-[rgba(21,11,43,0.7)] font-medium gap-x-12'>
                    <li className='cursor-pointer hover:bg-[rgb(11,229,138)] hover:text-black px-3 py-2 rounded-lg transition-[500ms]'>Home</li>
                    <li className='cursor-pointer hover:bg-[rgb(11,229,138)] hover:text-black px-3 py-2 rounded-lg transition-[500ms]'>Recipes</li>
                    <li className='cursor-pointer hover:bg-[rgb(11,229,138)] hover:text-black px-3 py-2 rounded-lg transition-[500ms]'>About</li>
                    <li className='cursor-pointer hover:bg-[rgb(11,229,138)] hover:text-black px-3 py-2 rounded-lg transition-[500ms]'>Search</li>
                </ul>
                <div className='flex lg:justify-end justify-center items-center gap-x-4 lg:rounded-none rounded-2xl'>
                    <div className='flex bg-[rgba(21,11,43,0.05)] gap-x-3 py-3 px-6 rounded-[50px]'>
                        <span className='text-3xl'><IoSearchOutline></IoSearchOutline></span>
                        <input type="text" placeholder='Search' className='bg-transparent outline-none' />
                    </div>
                    <div className='text-4xl p-2 bg-[rgb(11,229,138)] rounded-full cursor-pointer' title='User'>
                        <FaRegCircleUser></FaRegCircleUser>
                    </div>
                </div>
            </nav>
            <section>
                <div className='bg lg:rounded-none rounded-2xl space-y-6'>
                    <h1 className='lg:text-5xl text-2xl font-bold text-white'>Delicious Recipes: <br /> Explore Culinary Delights for Every Palate</h1>
                    <p className='text-white lg:text-lg font-normal'>Welcome to Flavor Haven: Where Culinary Magic Happens!Indulge in a Symphony of Tastes with Our Exquisite Recipes.
                        From Sizzling Stir-Fries to Decadent Desserts, We Have It All.Embark on a Journey of Culinary Excellence 
                        - <span className='text-[rgb(11,229,138)]'>Let Your Taste Buds Rejoice!</span></p>
                    <div className='lg:text-xl text-lg font-semibold flex gap-x-8 mt-4 lg:pb-0 pb-4 lg:mt-10'>
                        <button className='text-[rgb(21,11,43)] hover:bg-[rgba(11,229,138,0.79)] transition-[500ms] bg-[rgb(11,229,138)] py-2 px-4 lg:py-5 lg:px-8 rounded-[50px]'>Explore Now</button>
                        <button className='text-white hover:bg-[rgba(11,229,138,0.9)] hover:text-black transition-[500ms] lg:py-5 py-2 px-4 lg:px-8 bg-transparent border border-white rounded-[50px]'><a href="#feedback">Our Feedback</a></button>
                    </div>
                </div>
            </section>
        </header>
    );
};



export default Header;