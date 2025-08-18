import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 top-0 flex items-center justify-between py-12 px-20">
      <h2 className='text-xl'>F</h2>
      <div className='flex font-[braven] gap-60 items-center'>
        <div className="flex items-center justify-center gap-12">
        <a className="navtext relative px-1 text-xl font-light inline-block hover:underline" href="#">Shop</a>
        <a className="navtext relative px-1 text-xl font-light inline-block hover:underline" href="#">New</a>
        <a className="navtext relative px-1 text-xl font-light inline-block hover:underline" href="#">About</a>
        <a className="navtext relative px-1 text-xl font-light inline-block hover:underline" href="#">Stores</a>
        <a className="navtext relative px-1 text-xl font-light inline-block hover:underline" href="#">Search</a>
      </div>

      <div className='flex gap-10 text-xl'>
    <i className="ri-shopping-bag-3-line"></i>
    <i className="ri-menu-3-line"></i>
      </div>

      </div>
    </div>
  );
};

export default Navbar;
