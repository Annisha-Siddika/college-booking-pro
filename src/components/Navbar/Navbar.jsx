
import icon from '/collegeIcon.png'
const Navbar = () => {
    return (
     <div>
         <nav className="bg-green-600 text-white p-4 sticky top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
            <div className='flex justify-center items-center gap-2'>
            <img src={icon} alt="" className='w-12' />
            <div className="text-xl font-bold">College Booking Pro</div>
            </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/colleges" className="hover:text-gray-300">Colleges</a>
            <a href="/admission" className="hover:text-gray-300">Admission</a>
            <a href="/mycollege" className="hover:text-gray-300">My College</a>
          </div>
          <div className="md:hidden flex space-x-4">
            {/* Mobile Menu */}
            <button className="focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
     </div>
    );
  };
  
  export default Navbar;