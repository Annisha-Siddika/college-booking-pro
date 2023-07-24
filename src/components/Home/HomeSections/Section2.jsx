import { useEffect, useRef, useState } from "react";
import bg from '../../../assets/images/gallery.jpg'
const Section2 = () => {
  const collegeImages = [
    "https://i.ibb.co/dB6z18D/i-Stock-491829140.jpg",
    "https://i.ibb.co/mH8jkh5/Cover-Photo-1.jpg",
    "https://i.ibb.co/Xz422qK/Alumni23-Photo.jpg",
    "https://i.ibb.co/3sstkSt/group-of-college-graduates-celebrating.jpg",
    "https://i.ibb.co/n6xXKhk/pngtree-group-of-graduates-posing-for-a-graduation-picture-picture-image-2657335.png",
  ];

  const delay = 2500;

  const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === collegeImages.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {collegeImages.map((imageUrl, index) => (
            <div
              className="slide"
              key={index}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>

        <div className="slideshowDots">
          {collegeImages.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white py-8 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold bg-green-600 text-white py-2 text-center mb-4">College Image Gallery</h2>
        <Slideshow />
      </div>
    </div>
  );
};

export default Section2;
