
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
    return (
        <header className='max-w-[1320px] mx-auto'>
            <nav className='flex justify-between items-center py-12'>
                <h1 className='text-[rgb(21,11,43)] text-3xl font-bold cursor-pointer'>Recipe Cooking</h1>
                <ul className='flex text-lg text-[rgba(21,11,43,0.7)] font-medium gap-x-12'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Recipes</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Search</li>
                </ul>
                <div className='flex items-center gap-x-4'>
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
                <div className='bg-[url(../../../public/img/background_img.png)] w-full h-[600px] flex flex-col justify-center items-center text-center'>
                    <h1 className='text-[52px] font-bold text-white'>Delicious Recipes: <br /> Explore Culinary Delights for Every Palate</h1>
                    <p className='text-white text-lg font-normal'>Welcome to Flavor Haven: Where Culinary Magic Happens!Indulge in a Symphony of Tastes with Our Exquisite Recipes.
                        From Sizzling Stir-Fries to Decadent Desserts, We Have It All.Embark on a Journey of Culinary Excellence 
                        - <span className='text-[rgb(11,229,138)]'>Let Your Taste Buds Rejoice!</span></p>
                    <div className='text-xl font-semibold flex gap-x-8 mt-10'>
                        <button className='text-[rgb(21,11,43)] bg-[rgb(11,229,138)] py-5 px-8 rounded-[50px]'>Explore Now</button>
                        <button className='text-white py-5 px-8 bg-transparent border border-white rounded-[50px]'>Our Feedback</button>
                    </div>
                </div>
            </section>
        </header>
    );
};



export default Header;