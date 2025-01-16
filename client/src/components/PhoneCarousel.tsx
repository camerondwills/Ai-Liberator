import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const SLIDE_INTERVAL = 3000; // 3 seconds per slide

export default function PhoneCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, SLIDE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  // Get the base URL for the images
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0">
          <img
            src={`${baseUrl}phone-mockup.png`}
            alt="AI Liberator App Interface 1"
            className="max-w-[300px] w-full mx-auto"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <img
            src={`${baseUrl}phone-mockup-2.png`}
            alt="AI Liberator App Interface 2"
            className="max-w-[300px] w-full mx-auto"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <img
            src={`${baseUrl}phone-mockup-3.png`}
            alt="AI Liberator App Interface 3"
            className="max-w-[300px] w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
}