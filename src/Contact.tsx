import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBasket, FaInstagram, FaTiktok, FaArrowRight, FaTwitter, FaPinterest, FaBars } from "react-icons/fa";
import {useState} from 'react';

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

        <div className='flex flex-col justify-center gap-3 py-10'>
          <div className='justify-center mx-10 py-5'>
            <h2 className='text-black text-2xl font-bold'>Contact</h2>
          </div>
          <div className='border-1 border-red px-10'>
            <form method='post' className='block justify-center items-center'>
              <input type="text" name="" id="" placeholder='Name' className='w-[140px] md:w-[250px] lg:w-[300px] border-1 border-black p-2 text-black'/>
              <input type="email" name="" id="" placeholder='Email' className='w-[140px] md:w-[250px] lg:w-[300px] border-1 border-black p-2 text-black mx-3'/> <br />
              <input type="text" name="" id="" placeholder='Phone number' className='w-[293px] md:w-[512px] lg:w-[612px] border-1 border-black p-2 text-black my-3' /> <br />
              <textarea name="" id="" placeholder='Comment' className='w-[293px] md:w-[512px] lg:w-[612px] border-1 border-black p-5 text-black'></textarea> <br />
              <button type="submit" className='border-1 !border-none !bg-black my-3'>Send</button>
            </form>
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