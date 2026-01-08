import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBasket, FaInstagram, FaTiktok, FaArrowRight, FaTwitter, FaPinterest, FaBars } from "react-icons/fa";
import {useState} from 'react';
import Profilepic from './assets/download.jpeg';
import Productpic1 from './assets/Hoodies.jpeg';
import Productpic2 from './assets/Twin boys.jpeg';
import Productpic3 from './assets/MenCasualRoundNeckCommuteShirt.jpeg';
import aboutpic from './assets/user-3.jpg';
import Productpic4 from './assets/200gT Shirt1PcsTShirtPolyesterMenRoundNeckShort SleeveTShirtGodPatternPrintingSuiableForSummer.jpeg'

function Dashboard() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className='container min-w-screen h-full overflow-x-hidden static'>
      <div className='flex flex-col overflow-x-hidden text-white font-sans box-border bg-white'>

        {/* Navigation Section */}
        <div className="flex justify-between overflow-x-hidden w-full items-center bg-stone-950 p-5">
        <button 
          className='!border-none !bg-transparent lg:hidden duration-150 hover:scale-110 hover:rotate-x-10 hover:cursor-pointer hover:!text-yellow-500'
          onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className='text-white text-lg' />
          </button>
          <div className='flex hidden lg:flex justify-between gap-2 lg:gap-5'>
            <Link to="/" className='!text-white text-lg lg:text-xl !font-light hover:!text-yellow-500'>Home</Link>
            <Link to="/Catalog" className='!text-white text-lg lg:text-xl !font-light hover:!text-yellow-500'>Catalog</Link>
            <Link to="/Contact" className='!text-white text-lg lg:text-xl !font-light hover:!text-yellow-500'>Contact</Link>
          </div>
          <div className='items-center px-2'>
            <Link to="/" className='text-2xl font-bold !text-yellow-700 cursor-pointer'>Eracrone</Link>
          </div>
          <div className='flex justify-between gap-10 md:gap-8 lg:gap-10 px-5'>
            <FaSearch 
            className='text-lg duration-150 hover:scale-120 hover:border-underline hover:cursor-pointer hover:!text-yellow-500'
            onClick={() => setSearchOpen(true)}
            />

            <FaUser className='text-lg duration-150 hover:scale-120 hover:rotate-x-10 hover:cursor-pointer hover:!text-yellow-500' />

            <FaShoppingBasket className='text-lg text-xl duration-150 hover:scale-120 hover:rotate-x-10 hover:cursor-pointer hover:!text-yellow-500' />
          </div>
          {searchOpen && (
            <div 
            className='absolute inset-0'
            onClick={() => setSearchOpen(false)}
            >
              <aside
              className='float-right mr-45 lg:mr-45 md:mr-40 mt-5 lg:mt-4 md:mt-5 shadow-lg bg-yellow-700 rounded-lg'
              onClick={(e) => e.stopPropagation()}
              >
                <input type="search" placeholder='search for anything' className='py-2 px-4 w-[120px] lg:w-[250px] md:w-[200px] text-white italic border-none' />

              </aside>
            </div>
          )}
        </div>
        {isMenuOpen && (
          <div 
          className="fixed inset-0 bg-opacity-50 bg-stone-950 z-40"
          onClick={() => setIsMenuOpen(false)}
          >
            <aside 
            className='fixed top-0 left-0 w-64 h-full bg-opacity-50 text-white shadow-lg p-6 transform transition-transform duration-500 ease-in-out translate-x-0 $(isMenuOpen ? "translate-x-0" : "-translate-x-full")'
            onClick={(e) => e.stopPropagation()}
            >
              <button 
              className='!text-xl mb-7 !border-none !bg-transparent lg:hidden duration-150 hover:scale-110 hover:rotate-x-10 hover:cursor-pointer hover:!text-yellow-500'
              onClick={() => setIsMenuOpen(false)}
              >
                X
              </button>
              <div className='flex flex-col gap-15 '>
                  <Link to="/" className='!text-white text-lg !font-light hover:!text-yellow-500'>Home</Link>
                  <Link to="/Catalog" className='!text-white text-xl !font-light hover:!text-yellow-500'>Catalog</Link>
                  <Link to="/Contact" className='!text-white text-xl  !font-light hover:!text-yellow-500'>Contact</Link>
                </div>
            </aside>
          </div>
        )}

        {/* Hero Section */}

        <div className='justify-between w-full max-w-screen py-10'>
          <div className='flex flex-col lg:flex-row object-fill w-full pt-10 lg:pt-5 px-10 lg:px-10 gap-10 text-black'>
            <div className='items-center'>
              <img src={Profilepic} alt="Photo" className='w-[500px]' />
            </div>
            <div className='flex flex-col'>
              <p className='text-xl font-bold lg:py-2'>Exclusives Streetwear Collections</p>
              <span className='text-lg font-normal py-5 lg:py-8'>Explore the Ultimate Collection of Curated streetwear Styles here.</span>
              <Link to="/Catalog" className='w-[120px] border-1 !border-black px-5 py-3 !text-black !bg-white text-black'>Shop Now</Link>
            </div>
          </div>
          <div className='flex flex-col text-black mt-5'>
            <div>
              <h2 className='ml-8 font-normal text-xl !font-thin py-8'>Featured Products</h2>
            </div>
            <div className='flex flex-row w-full justify-between lg:justify-center px-5'>
              <div className='flex flex-col w-md w-[200px] lg:w-[350px] p-5'>
                <img src={Productpic1} alt="photo" className='rounded-lg duration-100 hover:scale-105 hover:rotate-x-10 hover:cursor-pointer' />
                <p className='text-lg font-bold py-2'>Hoodie</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                <Link to="/Catalog" className='mt-10 w-[120px] border-1 !border-black px-5 py-3 !text-black !bg-white text-black'>Shop Now</Link>
              </div>
              <div className='flex flex-col w-md w-[200px] lg:w-[350px] p-5'>
                <img src={Productpic2} alt="photo" className='rounded-lg duration-100 hover:scale-105 hover:rotate-x-10 hover:cursor-pointer' />
                <p className='text-lg font-bold py-2'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                <Link to="/Catalog" className='mt-10 w-[120px] border-1 !border-black px-5 py-3 !text-black !bg-white text-black'>Shop Now</Link>
              </div>
              <div className='flex flex-col w-md w-[200px] lg:w-[350px] p-5'>
                <img src={Productpic3} alt="photo" className='rounded-lg duration-100 hover:scale-105 hover:rotate-x-10 hover:cursor-pointer' />
                <p className='text-lg font-bold py-2'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                <Link to="/Catalog" className='mt-10 w-[120px] border-1 !border-black px-5 py-3 !text-black !bg-white text-black'>Shop Now</Link>
              </div>
              <div className='flex flex-col w-md w-[200px] lg:w-[350px] p-5'>
                <img src={Productpic4} alt="photo" className='rounded-lg duration-100 hover:scale-105 hover:rotate-x-10 hover:cursor-pointer' />
                <p className='text-lg font-bold py-2'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                <Link to="/Catalog" className='mt-10 w-[120px] border-1 !border-black px-5 py-3 !text-black !bg-white text-black'>Shop Now</Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row w-full px-3 mt-15'>
            <div className='flex flex-col w-sm p-2 lg:w-lg'>
              <img src={aboutpic} alt="Photo" className='rounded-lg' />
            </div>
            <div className='text-black w-xl px-3 lg:px-6'>
              <h2 className='text-2xl font-bold pt-5'>About Us</h2>
              <p className='text-xl py-5 font-light w-sm lg:w-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aliquam porro necessitatibus explicabo ex delectus cupiditate sit natus. Minima excepturi quas sed culpa dolorem maxime error quos voluptatem eius debitis?</p>
              <Link to="/Contact" className='w-[120px] my-5 border-1 !border-black px-5 py-3 !text-black !bg-white text-black'>Get in touch</Link>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row w-full px-3 mt-20'>
            <div className='flex flex-col w-sm p-2 lg:w-lg'>
              <img src={Productpic3} alt="Photo" className='mask-b-from-80% rounded-t-lg' />
            </div>
            <div className='text-black w-md px-3 lg:px-6'>
              <h2 className='text-2xl font-bold pt-5'>Auntentic Hoodies</h2>
              <p className='text-xl py-5 font-light w-sm lg:w-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aliquam porro necessitatibus explicabo ex delectus cupiditate sit natus. Minima excepturi quas sed culpa dolorem maxime error quos voluptatem eius debitis?</p>
              <Link to="/Catalog" className='my-5 w-[120px] border-1 !border-black px-5 py-3 !text-black !bg-white text-black'>Shop Now</Link>
            </div>
          </div>
        </div>

        {/* Footer Section */}

        <div className='flex flex-col max-w-screen overflow-x-hidden items-center text-white w-full px-5 py-10 bg-stone-950'>
          <div className='items-center text-center'>
            <p className='font-bold'>Subscribe to our newletter</p>
            <div className='flex flex-row mt-3'>
              <input
                type="email" name="email" id="email" placeholder='Email'
                className='border-1 border-white p-2 w-[330px]'
              />
              <FaArrowRight className='text-xl mt-2 ml-2 duration-150 hover:translate-gpu hover:scale-130 cursor-pointer hover:!text-yellow-500' />
            </div>
          </div>
          <div className='flex flex-row justify-between gap-4 mt-4'>
            <FaInstagram className='text-xl duration-150 hover:translate-gpu hover:scale-120 cursor-pointer hover:!text-yellow-500' />
            <FaTiktok className='text-xl duration-150 hover:translate-gpu hover:scale-120 cursor-pointer hover:!text-yellow-500' />
            <FaTwitter className='text-xl duration-150 hover:translate-gpu hover:scale-120 cursor-pointer hover:!text-yellow-500' />
            <FaPinterest className='text-xl duration-150 hover:translate-gpu hover:scale-120 cursor-pointer hover:!text-yellow-500' />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard;