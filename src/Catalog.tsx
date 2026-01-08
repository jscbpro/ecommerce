import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBasket, FaInstagram, FaTiktok, FaArrowRight, FaTwitter, FaPinterest, FaBars } from "react-icons/fa";
import {useState} from 'react';
import Productpic1 from './assets/Hoodies.jpeg';
import Productpic2 from './assets/Tween Boy Letter Print Washed Short Sleeve T-Shirt, Casual College Style, Comfortable, Fashionable, Versatile, Cute & Soft, Suitable For Daily Wear, School, Outings, Sports, Festivals And Parties.jpeg';
import Productpic3 from './assets/MenCasualRoundNeckCommuteShirt.jpeg';
import Productpic4 from './assets/200gT Shirt1PcsTShirtPolyesterMenRoundNeckShort SleeveTShirtGodPatternPrintingSuiableForSummer.jpeg'

function Catalog() {

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

        <div className='w-full max-w-screen py-10'>
            <div className='relative '>
                <div className='px-6'>
                    <h2 className='text-black text-2xl'>Products</h2>
                </div>
              <div className='flex flex-wrap gap-5 md:gap-15 lg:gap-5 px-1 left-0 w-full'>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-5 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic1} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-10 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic4} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-5 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic2} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-10 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic3} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-5 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic1} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-5 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic1} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-10 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic4} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-5 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic2} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-10 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic3} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                <div className='flex flex-col w-[200px] lg:w-[250px] text-black p-5 duration-100 hover:scale-105 hover:transform-gpu hover:rotate-x-5 hover:cursor-pointer'>
                <div className='w-[200px] lg:w-[250px]'>
                    <img src={Productpic1} alt="photo" className='rounded-lg' />
                   </div>
                <p className='text-lg font-bold py-1'>T-Shirt</p>
                <span className='text-md font-thin'>20,000 RWf</span>
                </div>
                
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
export default Catalog;