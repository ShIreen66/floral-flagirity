import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className="fixed w-full  top-0 flex items-center justify-between py-12 px-20">
      <h2 className='text-xl'>F</h2>
      <div className='flex font-[braven] gap-60 items-center'>
        <div className="flex items-center justify-center gap-12">
        <a className="text-xl font-light" href="#">Shop</a>
        <a className="text-xl font-light" href="#">New</a>
        <a className="text-xl font-light" href="#">About</a>
        <a className="text-xl font-light" href="#">Stores</a>
        <a className="text-xl font-light" href="#">Search</a>
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
