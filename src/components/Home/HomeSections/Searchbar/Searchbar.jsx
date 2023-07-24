import { useEffect, useState } from "react";
import CollegeCards from "../../../CollegeCards/CollegeCards";
import { MdOutlineCancel } from 'react-icons/md';


const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // State to manage visibility of college cards

  useEffect(() => {
    fetch("https://endgame-server-three.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      });
  }, []);

  const handleSearch = () => {
    // Filter college data based on the search term
    const filteredColleges = searchResults.filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredColleges);
    setShowResults(true); // Show the college cards when there are search results
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setShowResults(false); // Hide college cards when the search term is reset
  };

  return (
    <div className="absolute top-[80px] right-0 left-0">
      {/* Search Input Field */}
      <div className="bg-green-700 flex justify-center items-center py-2">
        <input
          type="text"
          placeholder="Search for a college..."
          className="border border-gray-400 rounded-s-md p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Search Button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-e-md"
          onClick={handleSearch}
        >
          Search
        </button>

        {/* Reset Button (To clear search and hide college cards) */}
        {showResults && (
          <button
            className="text-white text-xl ml-2"
            onClick={handleResetSearch}
          >
            <MdOutlineCancel/>
          </button>
        )}
      </div>

      {/* College Cards */}
      {showResults &&
        searchResults.map((college) => (
          <CollegeCards key={college._id} college={college} />
        ))}
    </div>
  );
};

export default Searchbar;
