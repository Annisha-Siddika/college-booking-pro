
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} College Booking pro. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed and developed by Annisha Siddika.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
