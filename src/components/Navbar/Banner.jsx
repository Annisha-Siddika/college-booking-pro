import banner from '../../assets/images/banner.jpg'
const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-gray-100" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container mx-auto flex items-center justify-center h-screen">
        <div className="md:w-1/2 text-center p-8">
          <h2 className="text-3xl text-green-600 md:text-4xl font-bold mb-4">Unlock Your Academic Journey with College Booking Pro</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Welcome to College Booking Pro - the one-stop platform to help you explore, compare, and book your dream college.
            Begin your educational journey with confidence and ease.
          </p>
          <a href="/explore" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-lg font-semibold">Explore Colleges</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
