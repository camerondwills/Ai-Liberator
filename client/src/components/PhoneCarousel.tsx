import { useState, useEffect } from "react";

const SLIDE_INTERVAL = 3000; // 3 seconds per slide

const images = [
  {
    src: "/phone-mockup.png",
    alt: "AI Liberator App Interface 1"
  },
  {
    src: "/phone-mockup-2.png",
    alt: "AI Liberator App Interface 2"
  },
  {
    src: "/phone-mockup-3.png",
    alt: "AI Liberator App Interface 3"
  }
];

export default function PhoneCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute transition-opacity duration-1000"
          style={{
            opacity: currentIndex === index ? (isTransitioning ? 0 : 1) : 0,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-[300px] w-full mx-auto"
          />
        </div>
      ))}
    </div>
  );
}